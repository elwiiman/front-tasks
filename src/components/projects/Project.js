import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Project = ({ project }) => {
  //obtain context of projectContext
  const projectsContext = useContext(projectContext);
  const { focusInProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { obtainTasks } = tasksContext;

  //function to obtain the focus project and also the tasks related to project
  const focusProjectAndTasks = (projectId) => {
    focusInProject(projectId);
    obtainTasks(projectId);
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => focusProjectAndTasks(project._id)}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
