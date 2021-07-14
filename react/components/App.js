import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/style.scss";
import Header from "./Header";
import CounterBtn from "./CounterBtn";
import { useSelector, useDispatch } from "react-redux";
/*
  Actions defined in './react/actions/index.js'
 */
import { increaseGlobalCounter, decreaseGlobalCounter } from "../actions";

const App = () => {
  // Allows you to extract data from the Redux store state, using a selector function.
  const counter = useSelector(state => state.data.counter);

  // This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
  const dispatch = useDispatch();

  // increase button click handler, calling the increaseGlobalCounter action
  function increaseHandler() {
    dispatch(increaseGlobalCounter(1));
  }

  // decrease button click handler, calling the decreaseGlobalCounter action
  function decreaseHandler() {
    dispatch(decreaseGlobalCounter(1));
  }

  /*
    The below is using React Router for the client-side rendering, reference: https://reactrouter.com/web/example/basic
   */
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/increase">
          <CounterBtn buttonName={"Increase"} clickHandler={increaseHandler} />
        </Route>
        <Route exact path="/decrease">
          <CounterBtn buttonName={"Decrease"} clickHandler={decreaseHandler} />
        </Route>
        Counter: {counter}
      </div>
    </Router>
  );
};

export default App;
