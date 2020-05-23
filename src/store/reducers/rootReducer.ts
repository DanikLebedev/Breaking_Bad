import {combineReducers} from "redux";
import {apiReducer} from "./apiReducer";

export const rootReducer = combineReducers({
    api: apiReducer
})

export type RootState = ReturnType<typeof rootReducer>
