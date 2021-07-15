import ActionType from "./type";

// the action for increase the global counter
//使全局计数增加的action（调用这个方法会返回一个对象，对象中分别有type与payload。下同）
//（此时这个返回的对象，会被reducer自动接收到，在reducers下的index中，会对接收到的对象根据类型（type）做出反应）
export function increaseGlobalCounter(num) {
  return {
    type: ActionType.INCREASE_GLOBAL_COUNTER,
    payload: num
  };
}

// the action for decrease the global counter
//使全局计数减少的action
export function decreaseGlobalCounter(num) {
  return {
    type: ActionType.DECREASE_GLOBAL_COUNTER,
    payload: num
  };
}
