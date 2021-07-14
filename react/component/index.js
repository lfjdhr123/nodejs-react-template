import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "../reducers";
import ReduxThunk from "redux-thunk";
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
