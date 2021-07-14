import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/style.scss";
import Header from "./Header";
import CounterBtn from "./CounterBtn";

import { useSelector, useDispatch } from "react-redux";
import { increaseGlobalCounter, decreaseGlobalCounter } from "../actions";
const App = () => {
  const counter = useSelector(state => state.data.counter);
  const dispatch = useDispatch();
  function increaseHandler() {
    dispatch(increaseGlobalCounter(1));
  }
  function decreaseHandler() {
    dispatch(decreaseGlobalCounter(1));
  }
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/increase">
          <CounterBtn buttonName={"Increase"} clickHandler={increaseHandler} />
        </Route>
        <Route exact path="/decrease">
          <CounterBtn buttonName={"Increase"} clickHandler={decreaseHandler} />
        </Route>
        Counter: {counter}
      </div>
    </Router>
  );
};

export default App;
