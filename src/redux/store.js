import { createStore, compose } from "redux";
import reducer from "./reducers/index";

export default function configureStore() {
  const store = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )(createStore)(reducer, {});

  return store;
}
