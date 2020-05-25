import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";

import { OBTAIN_TASKS, ADD_TASK, ERROR_TASK_FORM } from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: "Elegir plataforma", state: true, projectId: 1 },
      { name: "Elegir colores", state: false, projectId: 2 },
      { name: "Elegir hosting", state: true, projectId: 3 },
      { name: "Elegir plataforma de pago", state: false, projectId: 4 },
      { name: "Elegir colores", state: false, projectId: 4 },
      { name: "Elegir hosting", state: true, projectId: 2 },
      { name: "Elegir plataforma de pago", state: false, projectId: 1 },
      { name: "Elegir colores", state: false, projectId: 3 },
      { name: "Elegir hosting", state: true, projectId: 4 },
      { name: "Elegir plataforma de pago", state: false, projectId: 3 },
    ],
    tasksInProject: null,
    errorInForm: false,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Function to obtain tasks of an specific project
  const obtainTasks = (projectId) => {
    dispatch({ type: OBTAIN_TASKS, payload: projectId });
  };

  // function to add a task to an specific project
  const addTask = (task) => {
    dispatch({ type: ADD_TASK, payload: task });
  };

  //function for validate new project form
  const showError = () => {
    dispatch({ type: ERROR_TASK_FORM });
  };

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksInProject: state.tasksInProject,
        errorInForm: state.errorInForm,
        obtainTasks,
        addTask,
        showError,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
