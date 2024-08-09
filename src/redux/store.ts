import { combineReducers } from "redux";
import {reducer} from "./slice";
import { configureStore } from "@reduxjs/toolkit";

const arhivRedusers = combineReducers({
    one: reducer
})

export const store = configureStore({
    reducer: arhivRedusers
})