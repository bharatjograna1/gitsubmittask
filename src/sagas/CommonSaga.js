/**
 * Developed By: Bharat Jograna
 * Created on: 17 July 2022
 * Common Sagas to use in any module
*/
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';

//Action Types..
import {

	GET_DATA_LIST,
    GET_DATA_ITEM_BY_ID,
    ADD_DATA_ITEM,
    EDIT_DATA_ITEM,
    DELETE_DATA_ITEM

} from '../actions';

//Action methods..
import {

    getDataListSuccess,
    getDataListFailure,

    getDataItemByIDSuccess,
    getDataItemByIDFailure,

    addDataItemSuccess,
    addDataItemFailure,

    editDataItemSuccess,
    editDataItemFailure,

    deleteDataItemSuccess,
    deleteDataItemFailure

} from '../actions';

//Get function form helper for Rest API Call
import { 

	getLocalStorageAPI, 
	setLocalStorageAPI

} from './SagasHelper';


/**
 * Function To Get Data List API
 */
function* getDataListAPI({ payload }) {

    const response = yield call(getLocalStorageAPI, "");
    try {
        if (response.statusCode === 200) {
            yield put(getDataListSuccess(response));
        } else {
            yield put(getDataListFailure(response));
        }
    } catch (error) {
        yield put(getDataListFailure(error));
    }
}

// Create Sagas method To Get Data List
export function* getDataListSagas() {
    yield takeEvery(GET_DATA_LIST, getDataListAPI);
}

/**
 * Function To Get Data List API
 */
function* getDataItemByIDAPI({ payload }) {

    const response = yield call(getLocalStorageAPI, payload.Data);
    try {
        if (response.statusCode === 200) {
            yield put(getDataItemByIDSuccess(response));
        } else {
            yield put(getDataItemByIDFailure(response));
        }
    } catch (error) {
        yield put(getDataItemByIDFailure(error));
    }
}

// Create Sagas method To Get Data Item By ID
export function* getDataItemByIDSagas() {
    yield takeEvery(GET_DATA_ITEM_BY_ID, getDataItemByIDAPI);
}

/**
 * Function To Add Data Item API
 */
function* addDataItemAPI({ payload }) {

    const response = yield call(setLocalStorageAPI, payload.Data);
    try {
        if (response.statusCode === 200) {
            yield put(addDataItemSuccess(response));
        } else {
            yield put(addDataItemFailure(response));
        }
    } catch (error) {
        yield put(addDataItemFailure(error));
    }
}

// Create Sagas method To Add Data Item
export function* addDataItemSagas() {
    yield takeEvery(ADD_DATA_ITEM, addDataItemAPI);
}

/**
 * Function To Edit Data Item API
 */
function* editDataItemAPI({ payload }) {

    const response = yield call(setLocalStorageAPI, payload.Data);
    try {
        if (response.statusCode === 200) {
            yield put(editDataItemSuccess(response));
        } else {
            yield put(editDataItemFailure(response));
        }
    } catch (error) {
        yield put(editDataItemFailure(error));
    }
}

// Create Sagas method To Edit Data Item
export function* editDataItemSagas() {
    yield takeEvery(EDIT_DATA_ITEM, editDataItemAPI);
}

/**
 * Function To Delete Data Item API
 */
function* deleteDataItemAPI({ payload }) {

    const response = yield call(setLocalStorageAPI, payload.Data);
    try {
        if (response.statusCode === 200) {
            yield put(deleteDataItemSuccess(response));
        } else {
            yield put(deleteDataItemFailure(response));
        }
    } catch (error) {
        yield put(deleteDataItemFailure(error));
    }
}

// Create Sagas method To Delete Data Item
export function* deleteDataItemSagas() {
    yield takeEvery(DELETE_DATA_ITEM, deleteDataItemAPI);
}

// Export methods to rootSagas
export default function* rootSaga() {
    yield all([
        fork(getDataListSagas),
        fork(getDataItemByIDSagas),
        fork(addDataItemSagas),
        fork(editDataItemSagas),
        fork(deleteDataItemSagas)
    ]);
}