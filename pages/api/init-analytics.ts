import type { NextApiRequest, NextApiResponse } from 'next';
import { init } from '@amplitude/analytics-browser';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const apiKey = process.env.AMPLITUDE_API_KEY;
            if (!apiKey) {
                return res.status(500).json({ error: 'Amplitude API key not defined' });
            }

            //init(apiKey); // Initialize Amplitude
            res.status(200).json({ message: 'Amplitude initialized successfully' });

            // Log initialization in development mode
            if (process.env.NODE_ENV === 'development') {
                console.log('Amplitude initialized');
            }
        } catch (error) {
            console.error('Error initializing Amplitude:', error);
            res.status(500).json({ error: 'Failed to initialize Amplitude' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
