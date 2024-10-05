// pages/add-project.js
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';


const AddProject = () => {
    const { data: session, status } = useSession(); // Correctly destructuring
    const [project, setProject] = useState({
        id: '',
        type: '',
        title: '',
        category: '',
        tech: '',
        datePublished: '',
        projectURL: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if the session is loading or not authenticated
        if (status === 'loading') {
            alert('Loading session...');
            return;
        }
        
        if (!session) {
            alert('Please log in with GitHub first.');
            return;
        }

        try {
            const response = await axios.post('/api/github/add-project', {
                ...project,
               // accessToken: session.accessToken, // Use access token from the session
            });

            if (response.status === 200) {
                alert('Project added successfully!');
            } else {
                alert(`Error: ${response.data.error}`);
            }
        } catch (error) {
            console.error('Failed to add project:', error.response ? error.response.data : error.message);
            alert('Failed to add project');
        }
    };

    // Optionally, you can redirect to a login page if the session is not available
    useEffect(() => {
        if (status === 'unauthenticated') {
            window.location.href = '/api/auth/signin/github'; // Redirect to login if unauthenticated
        }
    }, [status]);

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={project.title}
                onChange={(e) => setProject({ ...project, title: e.target.value })}
                required // Ensure the title is required
            />
            {/* Add other input fields similarly */}
            <button type="submit">Submit Project</button>
        </form>
    );
};

export default AddProject;
