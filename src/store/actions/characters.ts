import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Action, AnyAction} from "redux";
import {Character, fetchDataTypes, initStore} from "../../interfaces";
import {baseUrl, requestData, requestDataError} from "./shared";
import {FETCH_ALL_CHARACTERS_SUCCESS, FETCH_CHARACTER_BY_ID_SUCCESS} from "./actionTypes";


export const requestAllCharactersSuccess = (data: Character[]): fetchDataTypes => ({
    type: FETCH_ALL_CHARACTERS_SUCCESS,
    payload: data
})


export const fetchCharacters = (limit?: string): ThunkAction<Promise<void>, initStore, unknown, Action<string>> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(requestData())
        const res = await fetch(baseUrl + `characters?${limit ? 'limit=' + limit : ''}`)
        const data: Character[] = await res.json()
        dispatch(requestAllCharactersSuccess(data))
    } catch (e) {
        dispatch(requestDataError(e))
    }
}

export const requestCharacterByIdSuccess = (data: Character[]): fetchDataTypes => ({type: FETCH_CHARACTER_BY_ID_SUCCESS, payload: data})


export const fetchCharactersById = (id: string | undefined):ThunkAction<Promise<void>, initStore, unknown, Action<string>> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(requestData())
        const res = await fetch(baseUrl + `characters/${id}`)
        const data: Character[] = await res.json()
        dispatch(requestCharacterByIdSuccess(data))
    } catch (e) {
        dispatch(requestDataError(e))
    }
}

