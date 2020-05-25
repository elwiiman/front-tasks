import { OBTAIN_TASKS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case OBTAIN_TASKS:
      return {
        ...state,
        tasksInProject: state.tasks.filter(
          (task) => task.projectId === action.payload
        ),
      };
    default:
      return state;
  }
};
