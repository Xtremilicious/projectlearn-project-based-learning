// pages/api/github/add-project.js
import axios from 'axios';

export default async function handler(req, res) {
    const { accessToken, ...projectData } = req.body;

    if (!accessToken) {
        console.error('Missing access token');
        return res.status(400).json({ error: 'Access token is required' });
    }

    try {
        // Step 1: Fetch current data.json
        console.log(`https://api.github.com/repos/${process.env.GITHUB_REPO_OWNER}/${process.env.GITHUB_REPO_NAME}/contents/public/data.json`)
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
        console.log('content', content);
        const projectsData = JSON.parse(content);

        console.log('projectsData', projectsData, typeof(projectsData));

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

        console.log('Branch response:', branchResponse.data);

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

        console.log('Pull request response:', pullRequestResponse.data);
        res.status(200).json({ message: 'Pull request created' });
    } catch (error) {
        console.error('Error creating pull request:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to add project' });
    }
}
