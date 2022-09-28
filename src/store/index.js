import { createStore, combineReducers } from "redux";
import amountReducer from "./amount/reducer.js";

const reducers = combineReducers({
  amountReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;