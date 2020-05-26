import {
  OBTAIN_TASKS,
  ADD_TASK,
  ERROR_TASK_FORM,
  DELETE_TASK,
  CHANGE_TASK_STATUS,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTAIN_TASKS:
      return {
        ...state,
        tasksInProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errorInForm: false,
      };

    case ERROR_TASK_FORM:
      return { ...state, errorInForm: true };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    case CHANGE_TASK_STATUS:
      return {
        ...state,
        tasksInProject: state.tasksInProject.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };

    default:
      return state;
  }
};
