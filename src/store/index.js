import { createStore, combineReducers } from "redux";
import { postReducer } from "./reducers/post";

const rootReducer = combineReducers({
  postReducer,
});

const store = createStore(rootReducer);

export default store;
