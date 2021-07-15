import ActionType from "./type";

// the action for increase the global counter
export function increaseGlobalCounter(num) {
  return {
    type: ActionType.INCREASE_GLOBAL_COUNTER,
    payload: num
  };
}

// the action for decrease the global counter
export function decreaseGlobalCounter(num) {
  return {
    type: ActionType.DECREASE_GLOBAL_COUNTER,
    payload: num
  };
}
