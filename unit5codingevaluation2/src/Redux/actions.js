import {
  ADD_JOB_BY_ADMIN_ERROR,
  ADD_JOB_bY_ADMIN_LOADING,
  ADD_JOB_BY_ADMIN_SUCCESS,
} from "./actionTypes";

export const addJobLoading = () => {
  return {
    type: ADD_JOB_bY_ADMIN_LOADING,
  };
};
export const addJobSuccess = (message) => {
  return {
    type: ADD_JOB_BY_ADMIN_SUCCESS,
    payload: message,
  };
};
export const addJobError = (message) => {
  return {
    type: ADD_JOB_BY_ADMIN_ERROR,
    payload: message,
  };
};
