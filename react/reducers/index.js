import { combineReducers } from "redux";
import dataReducer from "./dataReducer";

// map and export the reducer for the store
export default combineReducers({
    data: dataReducer
});
