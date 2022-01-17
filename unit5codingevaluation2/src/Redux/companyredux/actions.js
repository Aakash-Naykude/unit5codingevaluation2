import { GET_JOB_ERROR, GET_JOB_LOADING, GET_JOB_SUCCESS } from "./actionTypes";

export const getJobLoading = () => {
  return {
    type: GET_JOB_LOADING,
  };
};
export const getJobSuccess = (message) => {
  return {
    type: GET_JOB_SUCCESS,
    payload: message,
  };
};
export const getJobError = (message) => {
  return {
    type: GET_JOB_ERROR,
    payload: message,
  };
};
