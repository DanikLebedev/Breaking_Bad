import {
    FETCH_ALL_DATA,
    FETCH_ALL_DATA_ERROR,
} from "./actionTypes";
import {fetchDataTypes} from "../../interfaces";

export const baseUrl = 'https://www.breakingbadapi.com/api/';

export const requestData = (): fetchDataTypes => ({type: FETCH_ALL_DATA})

export const requestDataError = (e: Error): fetchDataTypes => ({
    type: FETCH_ALL_DATA_ERROR,
    error: e.message
});

