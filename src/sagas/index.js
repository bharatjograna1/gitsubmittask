/**
 * Developed By: Bharat Jograna
 * Created on: 17 July 2022
 * Redux Root Sagas 
*/
import { all } from "redux-saga/effects";

// sagas
import CommonSaga from "./CommonSaga";

export default function* rootSaga(getState) {
  yield all([
    CommonSaga()
  ]);
}