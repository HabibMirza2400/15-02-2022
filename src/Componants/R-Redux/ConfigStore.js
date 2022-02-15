import { createStore, combineReducers } from "redux";
import { ProductReducer } from "./ProductReducer";

const configStore = () => {
  const myStore = createStore(
    combineReducers({ ProductReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()
  );
  return myStore;
};
