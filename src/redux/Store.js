import {configureStore} from "@reduxjs/toolkit";
import toggleReducer from './toggleSlice';
import countReducer from "./countSlice"

export const store = configureStore({
    reducer:{
        toggle: toggleReducer,
        icrement: countReducer,
    }
})