import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postsAPI } from "../service/api";


export const fetchPosts = createAsyncThunk('posts/fetchPosts', async ( _, { rejectWithValue }) => {
    try {
        return await postsAPI.getPosts();
    } catch (error) {
        return rejectWithValue(error.message || 'Failed to fetch posts')
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state)=>{
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action)=>{
                state.status = 'succeeded';
                state.posts = action.payload;
                state.error = null
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload
            })

    }
})

export default postsSlice.reducer;