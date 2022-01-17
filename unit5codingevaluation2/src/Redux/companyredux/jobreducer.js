import { GET_JOB_ERROR, GET_JOB_LOADING, GET_JOB_SUCCESS } from "./actionTypes";

const init = {
  isLoading: false,
  message: "",
  isError: false,
};

export const getJobReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_JOB_LOADING:
      return {
        isLoading: true,
        message: "",
        isError: false,
      };
    case GET_JOB_SUCCESS:
      return {
        isLoading: false,
        message: payload,
        isError: false,
      };
    case GET_JOB_ERROR:
      return {
        isLoading: false,
        message: payload,
        isError: true,
      };
    default:
      return state;
  }
};
