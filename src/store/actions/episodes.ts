import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Action, AnyAction} from "redux";
import {DataTypes, Episode, fetchDataTypes} from "../../interfaces";
import {baseUrl, requestData, requestDataError} from "./shared";
import {FETCH_ALL_EPISODES_SUCCESS} from "./actionTypes";



export const requestAllEpisodesSuccess = (data: Episode[]): fetchDataTypes => ({
    type: FETCH_ALL_EPISODES_SUCCESS,
    payload: data
});

export const fetchEpisodes = (): ThunkAction<Promise<void>, [], unknown, Action<string>> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(requestData())
        const res = await fetch(baseUrl + 'episodes')
        const data: Episode[] = await res.json()
        dispatch(requestAllEpisodesSuccess(data))
    } catch (e) {
        dispatch(requestDataError(e))
    }
}

