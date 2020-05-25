import React, { useContext } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const Task = ({ task }) => {
  const projectsContext = useContext(projectContext);
  const { projectFocus } = projectsContext;

  const tasksContext = useContext(taskContext);
  const { deleteTask, obtainTasks } = tasksContext;

  const [projectSelected] = projectFocus;

  //Function to execute when user press delete button of a task
  const deleteATask = (id) => {
    deleteTask(id);
    obtainTasks(projectSelected.id);
  };

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="estado">
        {task.state ? (
          <button type="button" className="completo">
            Complete
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incomplete
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => deleteATask(task.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default Task;
