import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

// map and export the reducer for the store
//计算和导出reducer（就是把几个小的reducer合到一起形成大reducer，此处就是把上面那个“dataReducer”看作一个小reducer）
export default combineReducers({
    data: dataReducer
});
