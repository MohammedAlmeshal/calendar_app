import { GET_TASKS, ADD_TASK, DELETE_TASK } from "./types";

export const getTasks = () => {
  return { type: GET_TASKS, payload: "" };
};

export const addTask = (task) => {
  return { type: ADD_TASK, payload: task };
};

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};
