import React, { useReducer } from "react";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  ENABLE_FORM_NEW_PROJECT,
  OBTAIN_PROJECTS,
  ADD_PROJECT,
  ERROR_PROJECT_FORM,
  FOCUS_PROJECT,
  DELETE_PROJECT,
  ERROR_PROJECT,
} from "../../types";

import axiosClient from "../../config/axios";

const ProjectState = (props) => {
  const initialState = {
    newProjectForm: false,
    projects: [],
    errorInForm: false,
    projectFocus: null,
    message: null,
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Series of functions for CRUD

  //function to enable showing form for submit new project
  const showNewProjectForm = () => {
    dispatch({ type: ENABLE_FORM_NEW_PROJECT });
  };

  //function to obtain projects
  const obtainProjects = async () => {
    try {
      const result = await axiosClient.get("/api/projects");
      dispatch({ type: OBTAIN_PROJECTS, payload: result.data.projects });
    } catch (error) {
      const alert = { msg: "There was an error", category: "alerta-error" };
      dispatch({ type: ERROR_PROJECT, payload: alert });
    }
  };

  //function to add projects
  const addProject = async (project) => {
    try {
      const result = await axiosClient.post("/api/projects", project);
      dispatch({ type: ADD_PROJECT, payload: result.data });
    } catch (error) {
      const alert = { msg: "There was an error", category: "alerta-error" };
      dispatch({ type: ERROR_PROJECT, payload: alert });
    }
  };

  //function for validate new project form
  const showError = () => {
    dispatch({ type: ERROR_PROJECT_FORM });
  };

  //Function to select and focus in a project choosen by the user
  const focusInProject = (projectId) => {
    dispatch({ type: FOCUS_PROJECT, payload: projectId });
  };

  //Function to delete a project
  const deleteProject = async (projectId) => {
    try {
      const result = await axiosClient.delete(`/api/projects/${projectId}`);
      dispatch({ type: DELETE_PROJECT, payload: projectId });
    } catch (error) {
      const alert = { msg: "There was an error", category: "alerta-error" };
      dispatch({ type: ERROR_PROJECT, payload: alert });
    }
  };

  return (
    <projectContext.Provider
      value={{
        newProjectForm: state.newProjectForm,
        projects: state.projects,
        errorInForm: state.errorInForm,
        projectFocus: state.projectFocus,
        message: state.message,
        showNewProjectForm,
        obtainProjects,
        addProject,
        showError,
        focusInProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
