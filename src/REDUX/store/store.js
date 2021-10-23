import { createStore } from "redux";
import combineReducer from "../reducer/combineReucer";

const store = createStore(combineReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
