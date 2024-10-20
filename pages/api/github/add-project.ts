import axios from "axios";
import { getToken } from "next-auth/jwt";

const slug = (name: string) =>
  name
    .split(" ")
    .map((part) => part.toLowerCase())
    .join("-");

export default async function handler(req, res) {
  const token = await getToken({ req }); // Get the session from the request

  // Ensure the session exists and access token is available
  if (!token || !token.accessToken) {
    console.error("Missing access token");
    return res
      .status(401)
      .json({ error: "Unauthorized: Access token is required" });
  }

  const { projects } = req.body;
  const { accessToken } = token;

  // Utility function to introduce delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  // Retry function to fetch repository details with retries if the repo is not yet ready
  const retryFetch = async (fn, retries = 5, delayTime = 2000) => {
    for (let i = 0; i < retries; i++) {
      try {
        return await fn();
      } catch (error) {
        if (i < retries - 1) {
          console.log(`Retrying after ${delayTime}ms... (${i + 1}/${retries})`);
          await delay(delayTime);
        } else {
          throw error;
        }
      }
    }
  };

  try {
    const baseBranch = "master";
    const forkedRepoOwner = token.name; // Assuming the fork is created under the user's GitHub account

    // Step 1: Check if the fork already exists
    let forkExists = false;
    try {
      const forkCheckResponse = await axios.get(
        `https://api.github.com/repos/${forkedRepoOwner}/${process.env.GITHUB_REPO_NAME}`,
        {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }
      );
      forkExists = true;
    } catch (error) {
      if (error.response && error.response.status === 404) {
        console.log("Fork does not exist, creating a new fork...");
      } else {
        throw error; // If the error is not 404, rethrow it
      }
    }

    // Step 2: Fork the repository if it doesn't exist
    if (!forkExists) {
      const forkResponse = await axios.post(
        `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/forks`,
        {},
        {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }
      );

      // Wait for some time before proceeding to allow GitHub to process the fork
      console.log("Waiting for the fork to be ready...");
      await delay(5000); // Wait for 5 seconds (increase if necessary)
    }

    // Step 3: Sync the fork with the latest changes from the original repository (if fork exists)
    if (forkExists) {
      const branchResponse = await retryFetch(() =>
        axios.get(
          `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/git/refs/heads/${baseBranch}`,
          {
            headers: {
              Authorization: `token ${accessToken}`,
            },
          }
        )
      );

      const latestSha = branchResponse.data.object.sha;

      // Update the fork by fast-forwarding it to the latest commit from the main repo
      await axios.patch(
        `https://api.github.com/repos/${forkedRepoOwner}/${process.env.GITHUB_REPO_NAME}/git/refs/heads/${baseBranch}`,
        {
          sha: latestSha,
          force: true, // Force update to ensure the fork syncs correctly
        },
        {
          headers: {
            Authorization: `token ${accessToken}`,
          },
        }
      );
      console.log("Fork synced with the latest commit");
    }

    // Step 4: Fetch current data.json from the forked repo
    const contentResponse = await retryFetch(() =>
      axios.get(
        `https://api.github.com/repos/${forkedRepoOwner}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`,
        {
          headers: {
            Authorization: `token ${accessToken}`,
            Accept: "application/vnd.github.v3+json",
          },
        }
      )
    );

    const sha = contentResponse.data.sha;
    const content = Buffer.from(
      contentResponse.data.content,
      "base64"
    ).toString("utf-8");
    const existingProjectsData = JSON.parse(content);

    // Step 5: Find the highest existing id
    const highestId = existingProjectsData.reduce(
      (max, project) => Math.max(max, project.id || 0),
      0
    );

    // Step 6: Append new project data with unique id
    const updatedProjectsData = [
      ...projects.map((project, index) => ({
        ...project,
        id: highestId + index + 1, // Assign new id based on the highest existing id
      })),
      ...existingProjectsData,
    ];

    // Step 7: Create new branch in the fork
    const newBranch = `${slug(token.name)}/add-project-${Date.now()}`;

    // Fetch base branch SHA from the forked repo
    const branchResponse = await axios.get(
      `https://api.github.com/repos/${forkedRepoOwner}/${process.env.GITHUB_REPO_NAME}/git/refs/heads/master`,
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    await axios.post(
      `https://api.github.com/repos/${forkedRepoOwner}/${process.env.GITHUB_REPO_NAME}/git/refs`,
      {
        ref: `refs/heads/${newBranch}`,
        sha: branchResponse.data.object.sha,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    // Step 8: Update data.json in the forked repo
    const updatedContent = Buffer.from(
      JSON.stringify(updatedProjectsData, null, 2)
    ).toString("base64");

    await axios.put(
      `https://api.github.com/repos/${forkedRepoOwner}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`,
      {
        message: "Add new projects",
        content: updatedContent,
        branch: newBranch,
        sha,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    // Step 9: Create pull request from fork to main repo
    const pullRequestResponse = await axios.post(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/pulls`,
      {
        title: `${token.name}: Project submission`,
        head: `${forkedRepoOwner}:${newBranch}`, // head branch comes from user's fork
        base: baseBranch,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    res.status(200).json({
      message: "Pull request created",
      pullRequestUrl: pullRequestResponse.data.html_url,
    });
  } catch (error) {
    console.error(
      "Error creating pull request:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to add projects" });
  }
}
