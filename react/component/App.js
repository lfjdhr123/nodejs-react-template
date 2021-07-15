import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/style.scss";
import Header from "./Header";
import CounterBtn from "./CounterBtn";

import { useSelector, useDispatch } from "react-redux";
import { increaseGlobalCounter, decreaseGlobalCounter } from "../actions";
const App = () => {
  //useSelector作用：从redux的store中提取数据（state），
  //此时就想相当于把reducer中的store中的state数据counter拿过来与此页面的counter共享状态
  //（此页面的counter值随着store中的counter的值变化而变化）
  //若想改变store中的state如counter，需要调用actions中的方法使其自动返回对应的处理后的值给reducer
  //reducer自动接受后根据action给的类型进行对应的store中state（此处为counter）处理，返回新的state给store
  //useDispatch（）作用：返回Redux的store中对dispatch的引用。可执行redux方法
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
