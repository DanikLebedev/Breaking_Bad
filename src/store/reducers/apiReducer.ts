import {fetchDataTypes, initStore} from "../../interfaces";
import {FETCH_ALL_DATA_ERROR, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA} from "../actions/actionTypes";

const initialStore: initStore = {
    data: [],
    error: '',
    loading: false
}

export const apiReducer = (state = initialStore, action: fetchDataTypes): initStore => {
    switch (action.type) {
        case FETCH_ALL_DATA:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALL_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case FETCH_ALL_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state
    }
}
