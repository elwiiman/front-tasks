import React, { useReducer } from "react";
import taskContext from "./taskContext";
import taskReducer from "./taskReducer";

const TaskState = (props) => {
  const initialState = {
    tasks: [],
  };
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <taskContext.Provider value={{}}>{props.children}</taskContext.Provider>
  );
};

export default TaskState;
