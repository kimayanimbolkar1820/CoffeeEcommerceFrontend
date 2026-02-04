import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { addAddress } from "@/api/shippingApi";


export const addShippingAddressThunk = createAsyncThunk(
    "shipping/addAddress",
    async(shippingAddress , {rejectWithValue})=>{
       try {
         const res = await addAddress(shippingAddress)
         return res 
       } catch (error) {
        return rejectWithValue(
          error.response?.data?.message || "Something went wrong"
        )
       }
    }
)


const shippingSlice = createSlice({
    name:"shipping_address",
    initialState:{
        address : [],
        loading : false,
        error :null
    },
    reducers:{},
    extraReducers:(builder)=>{
       builder

       .addCase(addShippingAddressThunk.pending , (state)=>{
        state.loading = true
        state.error = null
       })

       .addCase(addShippingAddressThunk.fulfilled , (state , action)=>{
        state.loading = false
        state.address = action.payload
        state.error = null
       })

       .addCase(addShippingAddressThunk.rejected , (state , action)=>{
        state.loading = false
        state.error = action.payload
       })


    }
})


export default shippingSlice.reducer