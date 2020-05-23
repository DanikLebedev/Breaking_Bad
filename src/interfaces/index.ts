import {
    FETCH_ALL_DATA,
    FETCH_ALL_EPISODES_SUCCESS,
    FETCH_ALL_CHARACTERS_SUCCESS,
    FETCH_ALL_DATA_ERROR,
    FETCH_CHARACTER_BY_ID_SUCCESS, FETCH_EPISODES_BY_ID
} from "../store/actions/actionTypes";
import {Reducer} from "redux";

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
    currentCharacter: Character,
    currentEpisode: Episode,
}

export interface Episode {
    id: number | null;
    title: string;
    season: number | null;
    episode: number | null;
    air_date: string;
    characters: string[];
    series: string;
}


export type DataTypes = Character[] | Episode[] | Character | Episode

export interface FetchData {
    type: typeof FETCH_ALL_DATA,
}

export interface FetchDataSuccess {
    type: typeof FETCH_ALL_CHARACTERS_SUCCESS | typeof FETCH_ALL_EPISODES_SUCCESS | typeof FETCH_CHARACTER_BY_ID_SUCCESS | typeof FETCH_EPISODES_BY_ID,
    payload: DataTypes;
}

export interface FetchDataError {
    type: typeof FETCH_ALL_DATA_ERROR;
    error: string
}

export type fetchDataTypes = FetchData | FetchDataSuccess | FetchDataError
