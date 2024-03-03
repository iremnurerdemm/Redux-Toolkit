import { configureStore } from "@reduxjs/toolkit";
//reducerları import et 
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice"
//configureStore-createStore farkları

export default configureStore({
    reducer:{counterReducer,crudReducer},
}) 