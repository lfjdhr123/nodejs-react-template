import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../styles/style.scss";
import Header from "./Header";
import CounterBtn from "./CounterBtn";
import { useSelector, useDispatch } from "react-redux";

/*
简单流程：
1.点击按钮，触发点击事件
2.点击事件中，通过dispatch（useDispatch()）执行一个action
3.action执行后会返回一个对象被reducer接收到
4.reducer接收到会根据type来改变全局store中的数据
*/

/*
  Actions defined in './react/actions/index.js'
  actions 可以在'./react/actions/index.js'这个文件中找到
 */
import { increaseGlobalCounter, decreaseGlobalCounter } from "../actions";

const App = () => {
  // Allows you to extract data from the Redux store state, using a selector function.
  //你可以使用selector方法，从redux中的store拿到state（以此方式来提取store中的数据）
  const counter = useSelector(state => state.data.counter);

  // This hook returns a reference to the dispatch function from the Redux store. You may use it to dispatch actions as needed.
  //这个hook（钩子）从redux store中返回一个参数去调度函数方法，你可以根据需要去使用dispatch调度actions
  const dispatch = useDispatch();

  // increase button click handler, calling the increaseGlobalCounter action
  //“增加”按钮单击后执行，调用increaseGlobalCounter操作
  function increaseHandler() {
    dispatch(increaseGlobalCounter(1));
  }

  // decrease button click handler, calling the decreaseGlobalCounter action
  //“减少”按钮单击后执行，调用decreaseGlobalCounter操作
  function decreaseHandler() {
    dispatch(decreaseGlobalCounter(1));
  }

  /*
    The below is using React Router for the client-side rendering, reference: https://reactrouter.com/web/example/basic
    下面是使用React Router进行客户端渲染，参考网址：https://reactrouter.com/web/example/basic
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
