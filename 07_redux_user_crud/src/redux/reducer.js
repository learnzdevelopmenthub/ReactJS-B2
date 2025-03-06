let initialState = [
    {id: 1, name: "Priya", email: "priya@mail.com"},
    {id: 2, name: "Raja", email: "raja@mail.com"},
]

const userReducer = (state = initialState, action) => {
    console.log(action)
    if( action.type === 'ADD_USER'){
        let users = [...state, action.payload]
        return users
    } else if (action.type == 'DELETE_USER') {
        let users  = state.filter( item => item.id != action.payload)
        return users
    }
    return state
}

export default userReducer;