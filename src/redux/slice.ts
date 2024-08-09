import axios, { AxiosResponse } from "axios";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeJson = {
    id: number ,
    name: string
}

type TypeFun = () => Promise<AxiosResponse<TypeJson[] , any>>


const fun:TypeFun = async () => {
    const jsons = await axios.get<TypeJson[]>("http://localhost:300/api");
    return jsons;
}

const initialState = { api: fun}


const slice = createSlice({
    name: "API",
    initialState ,
    reducers: {
        one: (state , action:PayloadAction<string>) => {
            if(action.type === "one") {

            }
        } 
    }
})

export const {reducer , actions} = slice