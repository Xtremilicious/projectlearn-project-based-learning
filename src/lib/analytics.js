import { useEffect } from "react";
import { init, logEvent, setUserId } from '@amplitude/analytics-browser';

// Your analytics object can still be defined here
export const analytics = {
    init: () => {
        init(process.env.NEXT_PUBLIC_AMPLITUDE_API_KEY, {
            defaultTracking: false
        });
    },
    track: (eventName, eventProperties) => {
        logEvent(eventName, eventProperties);

        // Log event tracking in development mode
        if (process.env.NODE_ENV === 'development') {
            console.log(`Tracked Event: ${eventName}`, eventProperties);
        }
    },
    setUserId: (userId) => {
        setUserId(userId);

        // Log user ID setting in development mode
        if (process.env.NODE_ENV === 'development') {
            console.log(`Set User ID: ${userId}`);
        }
    },
};