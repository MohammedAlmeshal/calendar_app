import { GET_TASKS, ADD_TASK,DELETE_TASK } from "../actions/types";
import { v4 as uuid } from "uuid";

var initialState = {
  tasks: [
    { id: uuid(), taskDate: "2020-11-8", taskContent: "Today" },
    { id: uuid(), taskDate: "2020-11-17", taskContent: "that day taskkkk" },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return { ...state };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
case DELETE_TASK:
    return {...state , tasks: state.tasks.filter(task => task.id !== action.payload)}
    default:
      return state;
  }
}
