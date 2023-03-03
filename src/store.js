import { configureStore } from "@reduxjs/toolkit";

import authReducer from './slices/authSlice'
import userReducer from './slices/userSlice'


//DISTRIBUTING STATES TO THE APPLICATION
export const store = configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
    },
})