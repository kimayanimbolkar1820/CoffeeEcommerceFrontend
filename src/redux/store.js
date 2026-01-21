import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/productSlice"
import filterReducer from "./features/filterSlice"


const store = configureStore({
    reducer : {
          product : productReducer,
          filter: filterReducer,
    }
})

export default store;