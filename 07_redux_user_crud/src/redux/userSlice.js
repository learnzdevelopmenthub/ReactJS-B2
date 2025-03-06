import { createSlice } from "@reduxjs/toolkit";

let initialState = [
    {id: 1, name: "Priya", email: "priya@mail.com"},
    {id: 2, name: "Raja", email: "raja@mail.com"},
]

// const userReducer = (state = initialState, action) => {
//     console.log(action)
//     if( action.type === 'ADD_USER'){
//         let users = [...state, action.payload]
//         return users
//     } else if (action.type == 'DELETE_USER') {
//         let users  = state.filter( item => item.id != action.payload)
//         return users
//     } else if ( action.type == 'UPDATE_USER') {
//         let users = state.map( item => item.id === action.payload.id ? action.payload : item )
//         return users
//     }
//     return state
// }

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.push(action.payload)
        },
        deleteUser: (state, action) => {
            const index = state.findIndex( item => item.id === action.payload)

            if( index != -1 ) {
                state.splice(index, 1)
            }
        },
        updateUser: (state, action) => {
            console.log()
            const index = state.findIndex( item => item.id === action.payload.id)

            if( index != -1 ) {
                state[index] = action.payload
            }
        }
    }
})

export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;