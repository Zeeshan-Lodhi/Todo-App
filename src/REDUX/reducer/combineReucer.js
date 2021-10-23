import { combineReducers } from "redux";
import todoReducer from "./reducer";

const combineReducer = combineReducers({ todoReducer })

export default combineReducer