import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "./mail/mailSlice"
import authReducer from "./auth/authSlice"
import categoriesReducer from "./categories/categoriesSlice"

export const store = configureStore({
    reducer: {
        mail: mailReducer,
        auth: authReducer,
        categories: categoriesReducer
    }
})