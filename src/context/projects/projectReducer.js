import {
  ENABLE_FORM_NEW_PROJECT,
  OBTAIN_PROJECTS,
  ADD_PROJECT,
  ERROR_PROJECT_FORM,
  FOCUS_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case ENABLE_FORM_NEW_PROJECT:
      return { ...state, newProjectForm: true };

    case OBTAIN_PROJECTS:
      return { ...state, projects: action.payload };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        newProjectForm: false,
        errorInForm: false,
      };
    case ERROR_PROJECT_FORM:
      return { ...state, errorInForm: true };
    case FOCUS_PROJECT:
      return {
        ...state,
        projectFocus: state.projects.filter(
          (project) => project._id === action.payload
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project._id !== action.payload
        ),
        projectFocus: null,
      };

    case ERROR_PROJECT:
      return { ...state, message: action.payload };

    default:
      return state;
  }
};
