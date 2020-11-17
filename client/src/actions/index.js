import { GET_TASKS, ADD_TASK, DELETE_TASK, ITEMS_LOADING } from "./types";
import axios from "axios";

export const getTasks = () => (dispatch) => {
  dispatch(setTasksLoading());
  axios.get("/api/tasks").then((res) => {
    dispatch({ type: GET_TASKS, payload: res.data });
  });
};

export const addTask = (task) => (dispatch) => {
 
    axios.post("api/tasks", task).then((res) => {
     dispatch({ type: ADD_TASK, payload: task });
  });
};

export const deleteTask = (id) => (dispatch) => {
  axios.delete(`/api/tasks/${id}`).then((res) => {
    dispatch({ type: DELETE_TASK, payload: id });
  });
};

export const setTasksLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};
