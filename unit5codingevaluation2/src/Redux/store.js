import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { getJobReducer } from "./companyredux/jobreducer";
import { jobReducer } from "./jobreducer";

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  getJobReducer: getJobReducer,
});
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
