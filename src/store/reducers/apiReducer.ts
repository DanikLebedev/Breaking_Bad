import {fetchDataTypes, initStore} from "../../interfaces";
import {
    FETCH_ALL_CHARACTERS_SUCCESS,
    FETCH_ALL_DATA,
    FETCH_ALL_DATA_ERROR,
    FETCH_ALL_EPISODES_SUCCESS,
    FETCH_CHARACTER_BY_ID_SUCCESS,
    GET_ALL_SEASONS,
    GET_SEASON_BY_ID
} from "../actions/actionTypes";

export const initialStore: initStore = {
    characters: [],
    episodes: [],
    seasons: [],
    currentCharacter: [{
        char_id: null,
        nickname: '',
        name: '',
        img: '',
        appearance: [],
        birthday: '',
        category: [],
        occupation: [],
        portrayed: '',
        status: ''
    }],
    currentEpisode: {
        air_date: '',
        characters: [],
        episode: null,
        id: null,
        season: null,
        series: '',
        title: ''
    },
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
        case FETCH_ALL_CHARACTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                characters: action.payload
            } as initStore
        case FETCH_ALL_EPISODES_SUCCESS:
            return {
                ...state,
                loading: false,
                episodes: action.payload
            } as initStore
        case FETCH_ALL_DATA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case FETCH_CHARACTER_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                currentCharacter: action.payload
            } as initStore
        case GET_ALL_SEASONS:
            return {
                ...state,
                loading: false,
                seasons: action.payload
            } as initStore
        case GET_SEASON_BY_ID:
            return {
                ...state,
                loading: false,
                seasons: state.seasons.filter(season => season.seasonId === action.payload)
            }
        default:
            return state
    }
}
