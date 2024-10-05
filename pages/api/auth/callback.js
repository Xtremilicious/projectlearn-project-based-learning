// pages/api/auth/callback.js
import axios from 'axios';

export default async function handler(req, res) {
    const { code } = req.query;

    if (!code) {
        return res.status(400).send('Code is missing');
    }

    try {
        const tokenResponse = await axios.post(
            `https://github.com/login/oauth/access_token`,
            {
                client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            {
                headers: {
                    Accept: 'application/json',
                },
            }
        );

        const accessToken = tokenResponse.data.access_token;

        console.log(accessToken)

        // Store the access token using the serverless function
        await axios.post(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/store-access-token`, {
            accessToken,
        });

        // Redirect to the desired page
        res.redirect('/add-project');
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Failed to fetch access token' });
    }
}
