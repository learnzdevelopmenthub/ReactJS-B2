import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer";
import calculateReducer from "./calculateReducer";

const store = configureStore({
    reducer: {
        counter: counterReducer,
        calculator: calculateReducer,
    }
})

export default store;