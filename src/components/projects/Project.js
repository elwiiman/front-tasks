import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";

const Project = ({ project }) => {
  //obtain context of projectContext
  const projectsContext = useContext(projectContext);

  const { focusInProject } = projectsContext;

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => focusInProject(project.id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
