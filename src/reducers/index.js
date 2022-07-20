/**
 * Developed By: Bharat Jograna
 * Created on: 17 July 2022
 * Redux Reducers 
*/
import { combineReducers } from "redux";
import CommonReducer from "./CommonReducer";

const reducers = combineReducers({
  CommonRdcr: CommonReducer
});

export default reducers;
