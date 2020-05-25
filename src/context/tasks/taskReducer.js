import {
  OBTAIN_TASKS,
  ADD_TASK,
  ERROR_TASK_FORM,
  DELETE_TASK,
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
        tasks: [...state.tasks, action.payload],
        errorInForm: false,
      };

    case ERROR_TASK_FORM:
      return { ...state, errorInForm: true };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      return state;
  }
};
