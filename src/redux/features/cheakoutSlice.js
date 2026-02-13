import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import { cheakout } from "@/api/cheakoutApi";


export const cheakoutThunk = createAsyncThunk(
    "cheakout/gotoCheakout",
    async(cheakoutData , {rejectWithValue})=>{
       try {
        const res = await cheakout(cheakoutData)
        return res 
       } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || "something went wrong"
        )
       }
    }
)


 const cheakOut = createSlice({
    name:"cheakout",
    initialState:{
        cheakoutProducts :[],
        loading : false ,
        error : null
    },
    reducers : {},
    extraReducers:(builder)=>{
        builder

        .addCase(cheakoutThunk.pending , (state)=>{
            state.loading = true 
            state.error = null
        })

        .addCase(cheakoutThunk.fulfilled , (state ,action)=>{
            state.loading = false 
            state.cheakoutProducts = action.payload
        })

        .addCase(cheakoutThunk.rejected , (state ,action)=>{
            state.loading = false 
            state.error = action.payload
        })
    }
})

export default cheakOut.reducer