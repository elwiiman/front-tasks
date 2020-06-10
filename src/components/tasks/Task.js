import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { projectFocus } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { deleteTask, obtainTasks, extractTask, updateTask } = tasksContext;

  const [projectSelected] = projectFocus;

  //Function to execute when user press delete button of a task
  const deleteATask = (id) => {
    deleteTask(id, projectSelected._id);
    obtainTasks(projectSelected._id);
  };

  // function to modify tasks state
  const changeState = (task) => {
    task.status = !task.status;
    updateTask(task);
  };

  //function to selct a task
  const selectTask = (task) => {
    extractTask(task);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.status ? (
          <button
            type="button"
            className="completo"
            onClick={() => changeState(task)}
          >
            Complete
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => changeState(task)}
          >
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => selectTask(task)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteATask(task._id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
