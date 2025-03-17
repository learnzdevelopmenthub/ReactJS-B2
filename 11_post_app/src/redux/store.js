import { configureStore } from "@reduxjs/toolkit";
import postsSlice from './postsSlice'

const store = configureStore({
    reducer: {
        posts: postsSlice
    }
})

export default store;