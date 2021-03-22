import { combineReducers } from "redux";
import contactreducer from "./contact";
import editReducer from "../REDUCER/edit";

const rootReducer = combineReducers({ contactreducer, editReducer });
export default rootReducer;
