import ActionType from "./type"
export function increaseGlobalCounter(num) {
    return {
        type: ActionType.INCREASE_GLOBAL_COUNTER,
        payload: num
    }
}
export function decreaseGlobalCounter(num) {
    return {
        type: ActionType.DECREASE_GLOBAL_COUNTER,
        payload: num
    }
}