import ActionType from "../actions/type";
/*
  Initialized state for the data reducer
 */
const INITIAL_STATE = {
  counter: 0
};

export default (state = INITIAL_STATE, action) => {
  /*
    Switch case for handling different actions
   */
  switch (action.type) {
    /*
      Received the action for increasing the global counter
     */
    case ActionType.INCREASE_GLOBAL_COUNTER:
      /*
        Remain all the other state and increase the counter
       */
      return {
        ...state,
        counter: state.counter + action.payload
      };

    /*
     Received the action for decreasing the global counter
    */
    case ActionType.DECREASE_GLOBAL_COUNTER:
      /*
        Remain all the other state and decrease the counter
       */
      return {
        ...state,
        counter: state.counter - action.payload
      };

    /*
        if the action.type is not recognized, remain the state as the same
      */
    default:
      return state;
  }
};
