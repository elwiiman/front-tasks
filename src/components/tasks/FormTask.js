import React, { useContext, useState, useEffect } from "react";
import projectContext from "../../context/projects/projectContext";
import taskContext from "../../context/tasks/taskContext";

const FormTask = () => {
  const projectsContext = useContext(projectContext);
  const { projectFocus } = projectsContext;

  const tasksContext = useContext(taskContext);
  const {
    taskSelected,
    addTask,
    errorInForm,
    showError,
    obtainTasks,
    updateTask,
  } = tasksContext;

  //Effect to detect if a task has been selected, in order to edit
  useEffect(() => {
    if (taskSelected !== null) {
      setTask(taskSelected);
    } else {
      setTask({ name: "" });
    }
  }, [taskSelected]);

  //State fo THIS component
  const [task, setTask] = useState({
    name: "",
  });

  //destructue THIS state
  const { name } = task;

  // if there is not project Focused
  if (!projectFocus) return null;

  //array destructruring
  const [projectSelected] = projectFocus;

  //excute in every change in the form
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //validate
    if (name.trim() === "") {
      showError();
      return;
    }

    //Review if is editing or adding
    if (taskSelected === null) {
      //add new task to tasks state
      task.projectId = projectSelected.id;
      task.state = false;
      addTask(task);
    } else {
      updateTask(task);
    }

    //obtain tasks in the selected project
    obtainTasks(projectSelected.id);

    //reset form
    setTask({ name: "" });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Task name..."
            name="name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-block btn-submit"
            value={taskSelected !== null ? "Edit task" : "Add task"}
          />
        </div>
      </form>
      {errorInForm ? (
        <p className="mensaje error">The name of task is mandatory</p>
      ) : null}
    </div>
  );
};

export default FormTask;
