import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { addAddress , showAddress} from "@/api/shippingApi";


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

export const showShippingAddressThunk = createAsyncThunk(
  "shipping/showAddress",
  async(_,{rejectWithValue})=>{
    try {
      const res = await showAddress()
      return res 
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "address not fetched"
      )
    }
  }
)


const shippingSlice = createSlice({
    name:"shipping_address",
    initialState:{
        address : [],
        loading : false,
        error :null,
        isSaved :  false 
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
        state.isSaved = true
        state.error = null
       })

       .addCase(addShippingAddressThunk.rejected , (state , action)=>{
        state.loading = false
        state.isSaved = false
        state.error = action.payload
       })

       .addCase(showShippingAddressThunk.pending , (state)=>{
        state.loading = true
        state.error = null
       })

       .addCase(showShippingAddressThunk.fulfilled ,(state , action)=>{
        state.loading = false 
        state.address = action.payload
       })

       .addCase(showShippingAddressThunk.rejected ,(state , payload)=>{
        state.loading = false
        state.error = action.payload
       })


    }
})


export default shippingSlice.reducer