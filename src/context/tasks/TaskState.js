import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";
import axiosClient from "../../config/axios";

import {
  OBTAIN_TASKS,
  ADD_TASK,
  ERROR_TASK_FORM,
  DELETE_TASK,
  SELECT_CURRENT_TASK,
  UPDATE_TASK,
} from "../../types";

const TaskState = (props) => {
  const initialState = {
    tasksInProject: [],
    errorInForm: false,
    taskSelected: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  //Function to obtain tasks of an specific project
  const obtainTasks = async (project) => {
    try {
      const response = await axiosClient.get("/api/tasks", {
        params: { project },
      });

      dispatch({ type: OBTAIN_TASKS, payload: response.data.tasks });
    } catch (error) {
      console.log(error);
    }
  };

  // function to add a task to an specific project
  const addTask = async (task) => {
    try {
      const response = await axiosClient.post("/api/tasks", task);
      dispatch({ type: ADD_TASK, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  //function for validate new project form
  const showError = () => {
    dispatch({ type: ERROR_TASK_FORM });
  };

  //function to delete a task
  const deleteTask = async (taskId, project) => {
    try {
      await axiosClient.delete(`/api/tasks/${taskId}`, {
        params: { project },
      });
      dispatch({ type: DELETE_TASK, payload: taskId });
    } catch (error) {
      console.log(error);
    }
  };

  //function to edit and update task
  const updateTask = async (task) => {
    try {
      const response = await axiosClient.put(`/api/tasks/${task._id}`, task);
      dispatch({ type: UPDATE_TASK, payload: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  //function to extract a task for edit
  const extractTask = (task) => {
    dispatch({ type: SELECT_CURRENT_TASK, payload: task });
  };

  return (
    <taskContext.Provider
      value={{
        tasksInProject: state.tasksInProject,
        errorInForm: state.errorInForm,
        taskSelected: state.taskSelected,
        obtainTasks,
        addTask,
        showError,
        deleteTask,
        extractTask,
        updateTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
