import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from "../api/apiSlice.js";
import authReducer from "./authSlice.js";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
