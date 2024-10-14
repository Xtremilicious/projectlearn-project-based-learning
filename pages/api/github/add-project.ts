// pages/api/github/add-project.js
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

  try {
    // Step 1: Fetch current data.json
    const contentResponse = await axios.get(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`,
      {
        headers: {
          Authorization: `token ${accessToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    const sha = contentResponse.data.sha;
    const content = Buffer.from(
      contentResponse.data.content,
      "base64"
    ).toString("utf-8");
    const existingProjectsData = JSON.parse(content);

    // Step 2: Find the highest existing id
    const highestId = existingProjectsData.reduce(
      (max, project) => Math.max(max, project.id || 0),
      0
    );

    // Step 3: Append new project data with unique id
    const updatedProjectsData = [
      ...projects.map((project, index) => ({
        ...project,
        id: highestId + index + 1, // Assign new id based on the highest existing id
      })),
      ...existingProjectsData,
    ];

    // Step 4: Create new branch
    const newBranch = `${slug(token.name)}/add-project-${Date.now()}`;
    const baseBranch = "master";
    const branchResponse = await axios.get(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/git/refs/heads/${baseBranch}`,
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    await axios.post(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/git/refs`,
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

    // Step 5: Update data.json
    const updatedContent = Buffer.from(
      JSON.stringify(updatedProjectsData, null, 2)
    ).toString("base64");
    await axios.put(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`,
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

    // Step 6: Create pull request
    const pullRequestResponse = await axios.post(
      `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/pulls`,
      {
        title: `${token.name}: Project submission`,
        head: newBranch,
        base: baseBranch,
      },
      {
        headers: {
          Authorization: `token ${accessToken}`,
        },
      }
    );

    res.status(200).json({ message: "Pull request created" });
  } catch (error) {
    console.error(
      "Error creating pull request:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to add projects" });
  }
}
