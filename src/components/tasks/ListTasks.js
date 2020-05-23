import React, { Fragment } from "react";
import Task from "./Task";

const ListTasks = () => {
  const tasksInAProject = [
    { name: "Elegir plataforma", state: true },
    { name: "Elegir colores", state: false },
    { name: "Elegir hosting", state: true },
    { name: "Elegir plataforma de pago", state: false },
  ];

  return (
    <Fragment>
      <h2>Project: Tienda Virtual</h2>
      <ul className="listado-tareas">
        {tasksInAProject.length === 0 ? (
          <li className="tarea">
            <p>There are no tasks to show</p>
          </li>
        ) : (
          tasksInAProject.map((task) => <Task task={task} />)
        )}
      </ul>

      <button type="button" className="btn btn-eliminar">
        Delete Project &times;
      </button>
    </Fragment>
  );
};

export default ListTasks;
