import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/productSlice"
import filterReducer from "./features/filterSlice"
import authReducer from "@/redux/features/authSlice"


const store = configureStore({
    reducer : {
          product : productReducer,
          filter: filterReducer,
          auth : authReducer
    }
})

export default store;