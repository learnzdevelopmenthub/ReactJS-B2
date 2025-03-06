import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


const store = configureStore({
    reducer: {
        users: userSlice
    }
})

export default store;