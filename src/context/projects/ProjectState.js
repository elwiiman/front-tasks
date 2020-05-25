import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import projectContext from "./projectContext";
import projectReducer from "./projectReducer";
import {
  ENABLE_FORM_NEW_PROJECT,
  OBTAIN_PROJECTS,
  ADD_PROJECT,
  ERROR_PROJECT_FORM,
  FOCUS_PROJECT,
  DELETE_PROJECT,
} from "../../types";

const ProjectState = (props) => {
  const projects = [
    { id: 1, name: "Tienda Virtual" },
    { id: 2, name: "Intranet" },
    { id: 3, name: "Diseño sitio web" },
    { id: 4, name: "Detalles sitio" },
  ];

  const initialState = {
    newProjectForm: false,
    projects: [],
    errorInForm: false,
    projectFocus: null,
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(projectReducer, initialState);

  // Series of functions for CRUD

  //function to enable showing form for submit new project
  const showNewProjectForm = () => {
    dispatch({ type: ENABLE_FORM_NEW_PROJECT });
  };

  //function to obtain projects
  const obtainProjects = () => {
    dispatch({ type: OBTAIN_PROJECTS, payload: projects });
  };

  //function to add projects
  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({ type: ADD_PROJECT, payload: project });
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
  const deleteProject = (projectId) => {
    dispatch({ type: DELETE_PROJECT, payload: projectId });
  };

  return (
    <projectContext.Provider
      value={{
        newProjectForm: state.newProjectForm,
        projects: state.projects,
        errorInForm: state.errorInForm,
        projectFocus: state.projectFocus,
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
