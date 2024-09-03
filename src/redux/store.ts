import { combineReducers } from "redux";
import {slice} from "./slice";
import { configureStore} from "@reduxjs/toolkit";

export type AppStore = typeof store;

const arhivRedusers = combineReducers({
    one: slice.reducer
})



export const store = configureStore<TypeArhivRedusers>({
    reducer: arhivRedusers
})

export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<AppStore['getState']>
export type TypeArhivRedusers = ReturnType<typeof arhivRedusers>