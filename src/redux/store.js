import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/productSlice"
import authReducer from "@/redux/features/authSlice"


const store = configureStore({
    reducer : {
          product : productReducer,
          auth : authReducer
    }
})

export default store;