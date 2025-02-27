
const calculateReducer = (state = {total: 0}, action) => {
    console.log(action)
    
    if (action.type == 'ADD') {
        return {total: action.payload.firstValue + action.payload.secondValue}
    }
    return state
}

export default calculateReducer;