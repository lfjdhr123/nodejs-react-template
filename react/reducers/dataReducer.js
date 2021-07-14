import ActionType from "../actions/type";
const INITIAL_STATE = {
  counter: 0
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionType.INCREASE_GLOBAL_COUNTER:
      console.log(111);
      return {
        ...state,
        counter: state.counter + action.payload
      };
    case ActionType.DECREASE_GLOBAL_COUNTER:
      console.log(222);
      return {
        ...state,
        counter: state.counter - action.payload
      };

    default:
      return state;
  }
};
