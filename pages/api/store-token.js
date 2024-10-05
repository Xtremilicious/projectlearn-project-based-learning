let storedToken = null; // This will hold the token in memory

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { accessToken } = req.body;

        if (!accessToken) {
            return res.status(400).json({ error: 'Access token is required' });
        }

        // Store the access token in memory (or a database in a real app)
        storedToken = accessToken;

        return res.status(200).json({ message: 'Access token stored successfully' });
    } else if (req.method === 'GET') {
        // Retrieve the stored token (for demonstration purposes)
        return res.status(200).json({ accessToken: storedToken });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
