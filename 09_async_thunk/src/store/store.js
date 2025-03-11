import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./postSlice"

const store = configureStore({
    reducer: {
        posts: postSlice,
    }
})

export default store;