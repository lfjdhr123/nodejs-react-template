import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
/*

 */
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";

/*
    Reference: https://github.com/reduxjs/redux-thunk
 */
import ReduxThunk from "redux-thunk";

// the global store for shared state with all connected components
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
