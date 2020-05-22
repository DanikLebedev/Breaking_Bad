import {FETCH_ALL_DATA, FETCH_ALL_DATA_SUCCESS, FETCH_ALL_DATA_ERROR} from "../store/actions/actionTypes";

export interface Character {
    id: number;
    name: string;
    birthday: string;
    occupation: any[];
    img: string;
    nickname: string;
    appearance: any[];
    portrayed: string;
    category: any[]
}

export interface initStore {
    data: DataTypes,
    loading: boolean,
    error: string
}

export interface Episode {
    id: number;
    title: string;
    season: number;
    episode: number;
    air_date: string;
    characters: string[];
    series: string;
}


export type DataTypes = Character[] | Episode[]

export interface FetchData {
    type: typeof FETCH_ALL_DATA,
}

export interface FetchDataSuccess {
    type: typeof FETCH_ALL_DATA_SUCCESS,
    payload: DataTypes;
}

export interface FetchDataError {
    type: typeof FETCH_ALL_DATA_ERROR;
    error: string
}

export type fetchDataTypes = FetchData | FetchDataSuccess | FetchDataError
