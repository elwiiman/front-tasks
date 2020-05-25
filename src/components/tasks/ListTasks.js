import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";

const ListTasks = () => {
  const projectsContext = useContext(projectContext);

  const { projectFocus, deleteProject } = projectsContext;

  if (!projectFocus) return <h1>Please select a project</h1>;

  //array destructruring
  const [projectSelected] = projectFocus;

  const tasksInAProject = [
    { name: "Elegir plataforma", state: true },
    { name: "Elegir colores", state: false },
    { name: "Elegir hosting", state: true },
    { name: "Elegir plataforma de pago", state: false },
  ];

  return (
    <Fragment>
      <h2>{projectSelected.name}</h2>
      <ul className="listado-tareas">
        {tasksInAProject.length === 0 ? (
          <li className="tarea">
            <p>There are no tasks to show</p>
          </li>
        ) : (
          tasksInAProject.map((task) => <Task task={task} />)
        )}
      </ul>

      <button
        type="button"
        className="btn btn-eliminar"
        onClick={() => deleteProject(projectSelected.id)}
      >
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
