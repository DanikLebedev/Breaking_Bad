import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {Action, AnyAction} from "redux";
import {DataTypes, Episode, fetchDataTypes} from "../../interfaces";
import {baseUrl, requestData, requestDataError} from "./shared";
import {FETCH_ALL_EPISODES_SUCCESS, GET_ALL_SEASONS, GET_SEASON_BY_ID} from "./actionTypes";
import {SeasonProps} from "../../components/SeasonCard";

const seasons =  [
        {
            seasonId: '1',
            seasonImg: process.env.PUBLIC_URL + '/breaking_bad_1.jpg'
        },
        {
            seasonId: '2',
            seasonImg: process.env.PUBLIC_URL + '/breaking_bad_2.jpg'
        },
        {
            seasonId: '3',
            seasonImg: process.env.PUBLIC_URL + '/breaking_bad_3.jpg'
        },
        {
            seasonId: '4',
            seasonImg: process.env.PUBLIC_URL + '/breaking_bad_4.jpg'
        },
        {
            seasonId: '5',
            seasonImg: process.env.PUBLIC_URL + '/breaking_bad_5.jpg'
        }

    ]

export const getAllSeasons = (data: SeasonProps[]) => {
    return {type: GET_ALL_SEASONS, payload: data}
}
export const getSeasonById = (id: string) => ({type: GET_SEASON_BY_ID, payload: id})

export const fetchSeasons = (): ThunkAction<Promise<void>, [], unknown, Action<string>> => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
    try {
        dispatch(requestData())
       setTimeout(() => {
           dispatch(getAllSeasons(seasons))
       }, 1000)
    } catch (e) {
        dispatch(requestDataError(e))
    }
}

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

