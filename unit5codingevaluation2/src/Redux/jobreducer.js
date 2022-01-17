import {
  ADD_JOB_BY_ADMIN_ERROR,
  ADD_JOB_bY_ADMIN_LOADING,
  ADD_JOB_BY_ADMIN_SUCCESS,
} from "./actionTypes";

const init = {
  isLoading: false,
  message: "",
  isError: false,
};

export const jobReducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_JOB_bY_ADMIN_LOADING:
      return {
        isLoading: true,
        message: "",
        isError: false,
      };
    case ADD_JOB_BY_ADMIN_SUCCESS:
      return {
        isLoading: false,
        message: payload,
        isError: false,
      };
    case ADD_JOB_BY_ADMIN_ERROR:
      return {
        isLoading: false,
        message: payload,
        isError: true,
      };
    default:
      return state;
  }
};
