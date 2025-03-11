import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// pending, fulfilled, rejected
export const fetchPost = createAsyncThunk('posts/fetchPost', async (postId, {rejectWithValue}) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        if (!response.ok) {
            throw new Error("Failed to fetch");
        }

        const data = await response.json()
        return data
        
    } catch (error) {
        return rejectWithValue(error.message)
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        post: {},
        status: 'idle',
        error: null,
        postId: 1
    },
    reducers: {
        incrementPostId: (state, action) => {
            state.postId += action.payload;
        },
        decrementPostId: (state, action) => {
            state.postId -= action.payload;
        },
    },
    extraReducers: (buider) => {
        buider.addCase(fetchPost.pending, (state)=>{
            state.status = 'loading'
        })
        buider.addCase(fetchPost.fulfilled, (state, action)=>{
            console.log(action)
            state.status = 'succeeded'
            state.post = action.payload
        })
        buider.addCase(fetchPost.rejected, (state, action)=>{
            state.status = 'failed'
            state.error = action.payload
        })
    }
})

export const { incrementPostId, decrementPostId } = postSlice.actions;
export default postSlice.reducer;