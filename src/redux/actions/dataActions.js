import { GET_GITHUB_STARS, GET_PROJECTS } from "../types";
import axios from "axios";
import { projects } from "../../utils/data";

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
    });
};

export const getProjects = () => dispatch => {
  dispatch({
    type: GET_PROJECTS,
    payload: projects.projectsData
  });
};
