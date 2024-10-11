import { GET_GITHUB_STARS, GET_PROJECTS } from "../types";

const initialState = {
  stars: null,
  projects: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GITHUB_STARS:
      return {
        ...state,
        stars: action.payload
      };
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload

      };

    default:
      return state;
  }
}
