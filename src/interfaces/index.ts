import {
    FETCH_ALL_DATA,
    FETCH_ALL_EPISODES_SUCCESS,
    FETCH_ALL_CHARACTERS_SUCCESS,
    FETCH_ALL_DATA_ERROR,
    FETCH_CHARACTER_BY_ID_SUCCESS, FETCH_EPISODES_BY_ID, GET_ALL_SEASONS, GET_SEASON_BY_ID
} from "../store/actions/actionTypes";
import {Reducer} from "redux";
import {SeasonProps} from "../components/SeasonCard";

export interface Character {
    char_id: number | null;
    name: string;
    birthday: string;
    occupation: string[];
    img: string;
    nickname: string;
    appearance: any[];
    portrayed: string;
    category: any[]
    status: string
}



export interface initStore {
    characters: Character[],
    episodes: Episode[],
    loading: boolean,
    error: string,
    seasons: SeasonProps[]
    currentCharacter: Character[],
    currentEpisode: Episode,
}

export interface Episode {
    episode_id: number | null ;
    title: string;
    season: string;
    episode: number | null;
    air_date: string;
    characters: string[];
    series: string;
}


export type DataTypes = Character[] | Episode[] | Character | Episode | string | SeasonProps[] | SeasonProps

export interface FetchData {
    type: typeof FETCH_ALL_DATA,
}

export interface FetchDataSuccess {
    type: typeof FETCH_ALL_CHARACTERS_SUCCESS | typeof FETCH_ALL_EPISODES_SUCCESS | typeof FETCH_CHARACTER_BY_ID_SUCCESS | typeof FETCH_EPISODES_BY_ID | typeof GET_ALL_SEASONS | typeof GET_SEASON_BY_ID,
    payload: DataTypes;
    id?: string
}

export interface FetchDataError {
    type: typeof FETCH_ALL_DATA_ERROR;
    error: string
}

export type fetchDataTypes = FetchData | FetchDataSuccess | FetchDataError

