// pages/add-project.js
import { useState } from 'react';
import axios from 'axios';

const AddProject = ({ accessToken }) => {
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
    try {
      const response = await axios.post('/api/github/add-project', {
        ...project,
        accessToken,  // Pass the access token along with the project data
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

  return (
    <form onSubmit={handleSubmit}>
      {/* Add form fields for project details */}
      <input
        type="text"
        placeholder="Title"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
      />
      {/* Add other input fields similarly */}
      <button type="submit">Submit Project</button>
    </form>
  );
};

// Get access token from query params
AddProject.getInitialProps = ({ query }) => {
  return { accessToken: query.access_token };
};

export default AddProject;
