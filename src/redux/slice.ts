import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeJson = {
    id: number ,
    name: string
}

export type TypeFun = () => Promise<AxiosResponse<TypeJson[] , any>>;

export type TypeApiInit = Record<never , TypeFun>;

export type InInitialState = {
    api: TypeApiInit ,
    loading: boolean
}


export const getApi = createAsyncThunk("Api" , async() => {
    const jsons = await axios.get<TypeJson[]>("http://localhost:300/api");
    return jsons.data;
})

const initialState = { api: {} , loading: false } satisfies InInitialState as InInitialState;


export const slice = createSlice({
    name: "API",
    initialState ,
    reducers: {
    } ,
    extraReducers: builder => {
        builder.addCase(getApi.pending , state => {state.loading = true})
        .addCase(getApi.fulfilled , (state , action:PayloadAction<TypeJson[]>) => {state.loading = false; state.api = action.payload})

    }
})
