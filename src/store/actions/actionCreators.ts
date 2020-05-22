import {FETCH_ALL_DATA, FETCH_ALL_DATA_ERROR, FETCH_ALL_DATA_SUCCESS} from "./actionTypes";
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {DataTypes, fetchDataTypes} from "../../interfaces";
import {Action, AnyAction} from "redux";

const baseUrl = 'https://www.breakingbadapi.com/api/';
export const requestData = (): fetchDataTypes => ({type: FETCH_ALL_DATA})
export const requestDataSuccess = (data: DataTypes): fetchDataTypes => ({
    type: FETCH_ALL_DATA_SUCCESS,
    payload: data
});
export const requestDataError = (e: Error): fetchDataTypes => ({
    type: FETCH_ALL_DATA_ERROR,
    error: e.message
});
export const fetchCharacters = (message: string): ThunkAction<Promise<void>, [], unknown, Action<string>> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(requestData())
        const res = await fetch(baseUrl + message)
        const data: DataTypes = await res.json()
        console.log(data)
        dispatch(requestDataSuccess(data))
    } catch (e) {
        dispatch(requestDataError(e))
    }
}

