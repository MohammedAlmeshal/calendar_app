import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  ITEMS_LOADING,
} from "../actions/types";


var initialState = {
  tasks: [],
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return { ...state, tasks: action.payload, loading: false };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };
    case ITEMS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
