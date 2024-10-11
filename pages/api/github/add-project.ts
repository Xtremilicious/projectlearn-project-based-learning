// pages/api/github/add-project.js
import axios from 'axios';
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({ req }); // Get the session from the request

    // Ensure the session exists and access token is available
    if (!session || !session.accessToken) {
        console.error('Missing session or access token');
        return res.status(401).json({ error: 'Unauthorized: Access token is required' });
    }

    const { accessToken } = session; // Access the token from the session
    const { ...projectData } = req.body; // Extract project data from the request body

    try {
        // Step 1: Fetch current data.json
        console.log(`https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`);
        const contentResponse = await axios.get(
            `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`,
            {
                headers: {
                    Authorization: `token ${accessToken}`,
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );

        const sha = contentResponse.data.sha;
        const content = Buffer.from(contentResponse.data.content, 'base64').toString('utf-8');
        const projectsData = JSON.parse(content);


        // Step 2: Append new project data
        projectsData.push(projectData);

        // Step 3: Create new branch
        const newBranch = `add-project-${Date.now()}`;
        const baseBranch = 'master';
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

        // Step 4: Update data.json
        const updatedContent = Buffer.from(JSON.stringify(projectsData, null, 2)).toString('base64');
        await axios.put(
            `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`,
            {
                message: 'Add new project',
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

        // Step 5: Create pull request
        const pullRequestResponse = await axios.post(
            `https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/pulls`,
            {
                title: 'New project submission',
                head: newBranch,
                base: baseBranch,
            },
            {
                headers: {
                    Authorization: `token ${accessToken}`,
                },
            }
        );

        res.status(200).json({ message: 'Pull request created' });
    } catch (error) {
        console.error('Error creating pull request:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to add project' });
    }
}
