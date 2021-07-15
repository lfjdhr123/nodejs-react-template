import ActionType from "../actions/type";
/*
  Initialized state for the data reducer
  此处为reducer的初始化数据
 */
const INITIAL_STATE = {
  counter: 0
};

export default (state = INITIAL_STATE, action) => {
  /*
    Switch case for handling different actions
    根据不同条件执行不同的处理
   */
  switch (action.type) {
    /*
      Received the action for incerease the global counter
      接收到增加全局数据counter的action
     */
    case ActionType.INCREASE_GLOBAL_COUNTER:
      /*
        Remain all the other state and increase the counter
        保持所有的state和增加counter
       */
      return {
        ...state,
        counter: state.counter + action.payload
      };

    /*
      Received the action for decreasing the global counter
      接收到减少全局数据counter的action
    */
    case ActionType.DECREASE_GLOBAL_COUNTER:
      /*
        Remain all the other state and decrease the counter
        保持所有的state和减少counter
       */
      return {
        ...state,
        counter: state.counter - action.payload
      };

    /*
        if the action.type is not recognized, remain the state as the same
        如果action的type没有识别到，则保持状态不变
      */
    default:
      return state;
  }
};
