import { combineReducers, createStore } from "redux";
import infoReducer from "./reducers/infoReducer";

const reducer = combineReducers({
  info: infoReducer
});

const store = createStore(reducer);

export default store;
