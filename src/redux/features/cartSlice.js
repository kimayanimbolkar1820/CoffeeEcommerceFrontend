import  { createAsyncThunk ,createSlice,  } from "@reduxjs/toolkit"
import { addToCart } from "@/api/cartApi"
import { toast } from "react-toastify"

export const AddToCartThunk = createAsyncThunk(
    "cart/addToCart",
    async (productData ,{rejectWithValue} )=>{
       try {
        const res = await addToCart(productData)
        return res
       }
        catch (error) {
        return rejectWithValue(
            error.response?.data?.message || "Something went wrong"
        ) 
       }
    }
)


const cart = createSlice({
    name: "cart",
    initialState :{
        product : [],
        loading : false,
        error : null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(AddToCartThunk.pending , (state)=>{
            state.loading = true
            state.error =null
        })

        .addCase(AddToCartThunk.fulfilled , (state , action)=>{
            state.loading =false
            state.product.push(action.payload)
            toast.success("Product Added to cart")
        })
        
        .addCase(AddToCartThunk.rejected , (state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default cart.reducer

