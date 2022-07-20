/**
 * Developed By: Bharat Jograna
 * Created on: 17 July 2022
 * Common Actions to use in any module
*/

/**
 * List Of Action types To Get Data List
 */
export const GET_DATA_LIST = "GET_DATA_LIST";
export const GET_DATA_LIST_SUCCESS = "GET_DATA_LIST_SUCCESS";
export const GET_DATA_LIST_FAILURE = "GET_DATA_LIST_FAILURE";

// Redux Action To Get Data List
export const getDataList = (request) => ({
    type: GET_DATA_LIST,
    payload: request
});

// Redux Action To Get Data List Success
export const getDataListSuccess = (response) => ({
    type: GET_DATA_LIST_SUCCESS,
    payload: response
});

// Redux Action To Get Data List Failure
export const getDataListFailure = (error) => ({
    type: GET_DATA_LIST_FAILURE,
    payload: error
});

/**
 * List Of Action types To Get Data Item By ID
 */
export const GET_DATA_ITEM_BY_ID = "GET_DATA_ITEM_BY_ID";
export const GET_DATA_ITEM_BY_ID_SUCCESS = "GET_DATA_ITEM_BY_ID_SUCCESS";
export const GET_DATA_ITEM_BY_ID_FAILURE = "GET_DATA_ITEM_BY_ID_FAILURE";

// Redux Action To Get Data Item By ID
export const getDataItemByID = (request) => ({
    type: GET_DATA_ITEM_BY_ID,
    payload: request
});

// Redux Action To Get Data Item By ID Success
export const getDataItemByIDSuccess = (response) => ({
    type: GET_DATA_ITEM_BY_ID_SUCCESS,
    payload: response
});

// Redux Action To Get Data Item By ID Failure
export const getDataItemByIDFailure = (error) => ({
    type: GET_DATA_ITEM_BY_ID_FAILURE,
    payload: error
});

/**
 * List Of Action types To Add Data Item
 */
export const ADD_DATA_ITEM = "ADD_DATA_ITEM";
export const ADD_DATA_ITEM_SUCCESS = "ADD_DATA_ITEM_SUCCESS";
export const ADD_DATA_ITEM_FAILURE = "ADD_DATA_ITEM_FAILURE";

// Redux Action To Add Data Item
export const addDataItem = (request) => ({
    type: ADD_DATA_ITEM,
    payload: request
});

// Redux Action To Add Data Item Success
export const addDataItemSuccess = (response) => ({
    type: ADD_DATA_ITEM_SUCCESS,
    payload: response
});

// Redux Action To Add Data Item Failure
export const addDataItemFailure = (error) => ({
    type: ADD_DATA_ITEM_FAILURE,
    payload: error
});

/**
 * List Of Action types To Edit Data Item
 */
export const EDIT_DATA_ITEM = "EDIT_DATA_ITEM";
export const EDIT_DATA_ITEM_SUCCESS = "EDIT_DATA_ITEM_SUCCESS";
export const EDIT_DATA_ITEM_FAILURE = "EDIT_DATA_ITEM_FAILURE";

// Redux Action To Edit Data Item
export const editDataItem = (request) => ({
    type: EDIT_DATA_ITEM,
    payload: request
});

// Redux Action To Edit Data Item Success
export const editDataItemSuccess = (response) => ({
    type: EDIT_DATA_ITEM_SUCCESS,
    payload: response
});

// Redux Action To Edit Data Item Failure
export const editDataItemFailure = (error) => ({
    type: EDIT_DATA_ITEM_FAILURE,
    payload: error
});

/**
 * List Of Action types To Delete Data Item
 */
export const DELETE_DATA_ITEM = "DELETE_DATA_ITEM";
export const DELETE_DATA_ITEM_SUCCESS = "DELETE_DATA_ITEM_SUCCESS";
export const DELETE_DATA_ITEM_FAILURE = "DELETE_DATA_ITEM_FAILURE";

// Redux Action To Delete Data Item
export const deleteDataItem = (request) => ({
    type: DELETE_DATA_ITEM,
    payload: request
});

// Redux Action To Delete Data Item Success
export const deleteDataItemSuccess = (response) => ({
    type: DELETE_DATA_ITEM_SUCCESS,
    payload: response
});

// Redux Action To Delete Data Item Failure
export const deleteDataItemFailure = (error) => ({
    type: DELETE_DATA_ITEM_FAILURE,
    payload: error
});
