import { configureStore } from "@reduxjs/toolkit";
import productReducer from "@/redux/features/productSlice"
import filterReducer from "./features/filterSlice"
import authReducer from "@/redux/features/authSlice"
import cartReducer from "@/redux/features/cartSlice"
import categoryReducer from "./features/categorySlice"


const store = configureStore({
    reducer : {
          product : productReducer,
          filter: filterReducer,
          auth : authReducer,
          cart : cartReducer,
          category: categoryReducer
    }
})

export default store;