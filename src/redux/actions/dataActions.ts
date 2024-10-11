import { GET_GITHUB_STARS, GET_PROJECTS } from "../types";
import axios from "axios";
import { fetchProjects } from "../../utils/data"; // Import the fetchProjects function

export const getGitHubStars = () => dispatch => {
  axios
    .get(
      `https://api.github.com/repos/Xtremilicious/ProjectLearn-Project-Based-Learning`
    )
    .then(res => {
      dispatch({
        type: GET_GITHUB_STARS,
        payload: res.data.stargazers_count
      });
    })
    .catch(error => {
      console.error("Error fetching GitHub stars:", error);
      // Handle error if necessary
    });
};

export const getProjects = () => async dispatch => {
  try {
    const projectsData = await fetchProjects(); // Fetch projects data
    dispatch({
      type: GET_PROJECTS,
      payload: projectsData // Use fetched data
    });
  } catch (error) {
    console.error("Error fetching projects:", error);
    // Handle error if necessary
  }
};
