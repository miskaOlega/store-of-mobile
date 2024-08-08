import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

type TypeJson = {
    id: number ,
    name: string
}

const fun = async () => {
    const jsons = await axios.get<TypeJson[]>("http://localhost:300/api");
    console.log(jsons.data)
}

const initialState = {
    api: fun
}

const slice = createSlice({
    name: "API",
    initialState ,
    reducers: {
        one: (state , {payload: payload}) => {
            return state
        } ,
        two: (state , {payload: payload}) => {
            return state
        }
    }
})

export const {reducer , actions} = slice