import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer";


const store = configureStore({
    reducer: {
        users: userReducer
    }
})

export default store;