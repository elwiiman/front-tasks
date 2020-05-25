import React, { Fragment, useContext } from "react";
import Task from "./Task";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListTasks = () => {
  const projectsContext = useContext(projectContext);
  const { projectFocus, deleteProject } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { tasksInProject } = tasksContext;

  if (!projectFocus) return <h1>Please select a project</h1>;

  //array destructruring
  const [projectSelected] = projectFocus;

  return (
    <Fragment>
      <h2>{projectSelected.name}</h2>
      <ul className="listado-tareas">
        {tasksInProject.length === 0 ? (
          <li className="tarea">
            <p>There are no tasks to show</p>
          </li>
        ) : (
          <TransitionGroup>
            {tasksInProject.map((task) => (
              <CSSTransition key={task.id} timeout={200} classNames="tarea">
                <Task task={task} />
              </CSSTransition>
            ))}
          </TransitionGroup>
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
