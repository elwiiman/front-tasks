import {
  OBTAIN_TASKS,
  ADD_TASK,
  ERROR_TASK_FORM,
  DELETE_TASK,
  SELECT_CURRENT_TASK,
  UPDATE_TASK,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTAIN_TASKS:
      return { ...state, tasksInProject: action.payload };

    case ADD_TASK:
      return {
        ...state,
        tasksInProject: [action.payload, ...state.tasksInProject],
        errorInForm: false,
      };

    case ERROR_TASK_FORM:
      return { ...state, errorInForm: true };

    case DELETE_TASK:
      return {
        ...state,
        tasksInProject: state.tasksInProject.filter(
          (task) => task._id !== action.payload
        ),
      };

    case UPDATE_TASK:
      return {
        ...state,
        tasksInProject: state.tasksInProject.map((task) => {
          if (task._id === action.payload._id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };

    case SELECT_CURRENT_TASK:
      return { ...state, taskSelected: action.payload };

    default:
      return state;
  }
};
