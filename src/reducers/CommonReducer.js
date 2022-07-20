/**
 * Developed By: Bharat Jograna
 * Created on: 17 July 2022
 * Common Reducers to use in any module
*/
import {

    // List Of Action types To Get Data List
    GET_DATA_LIST,
    GET_DATA_LIST_SUCCESS,
    GET_DATA_LIST_FAILURE,

    // List Of Action types To Get Data Item By ID
    GET_DATA_ITEM_BY_ID,
    GET_DATA_ITEM_BY_ID_SUCCESS,
    GET_DATA_ITEM_BY_ID_FAILURE,

    // List Of Action types To Add Data Item
    ADD_DATA_ITEM,
    ADD_DATA_ITEM_SUCCESS,
    ADD_DATA_ITEM_FAILURE,

    // List Of Action types To Edit Data Item
    EDIT_DATA_ITEM,
    EDIT_DATA_ITEM_SUCCESS,
    EDIT_DATA_ITEM_FAILURE,

    // List Of Action types To Delete Data Item
    DELETE_DATA_ITEM,
    DELETE_DATA_ITEM_SUCCESS,
    DELETE_DATA_ITEM_FAILURE,

} from '../actions';

/*
* Initial State
*/
const INIT_STATE = {
    loading: false,
	List: [],
	Data: [],
    ResponseData: [],
	ReplyData: [],
    Response: [],
}

//Check Action for Common use in project...
export default (state,action) => {

	if (typeof state === 'undefined') {
        return INIT_STATE
	}

    switch (action.type) {

        // List Of Action types To Get Data List
        case GET_DATA_LIST:
            return { ...state, List: [] };

        case GET_DATA_LIST_SUCCESS:
            return { ...state, List: action.payload };

        case GET_DATA_LIST_FAILURE:
            return { ...state, List: action.payload };

        // List Of Action types To Get Data Item By ID
        case GET_DATA_ITEM_BY_ID:
            return { ...state, Data: [] };

        case GET_DATA_ITEM_BY_ID_SUCCESS:
            return { ...state, Data: action.payload };

        case GET_DATA_ITEM_BY_ID_FAILURE:
            return { ...state, Data: action.payload };

        // List Of Action types To Add Data Item
        case ADD_DATA_ITEM:
            return { ...state, ResponseData: [] };

        case ADD_DATA_ITEM_SUCCESS:
            return { ...state, ResponseData: action.payload };

        case ADD_DATA_ITEM_FAILURE:
            return { ...state, ResponseData: action.payload };

        // List Of Action types To Edit Data Item
        case EDIT_DATA_ITEM:
            return { ...state, ReplyData: [] };

        case EDIT_DATA_ITEM_SUCCESS:
            return { ...state, ReplyData: action.payload };

        case EDIT_DATA_ITEM_FAILURE:
            return { ...state, ReplyData: action.payload };

        // List Of Action types To Delete Data Item
        case DELETE_DATA_ITEM:
            return { ...state, Response : [] };

        case DELETE_DATA_ITEM_SUCCESS:
            return { ...state, Response: action.payload };

        case DELETE_DATA_ITEM_FAILURE:
            return { ...state, Response: action.payload };

        default:
            return { ...state };
    }
}