import  { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {  signup ,login ,verifyOtp } from '@/api/authApi'
import { toast } from "react-toastify";

export const singupThunk = createAsyncThunk(
    "auth/signup",
     async (userData ,{rejectWithValue})=>{
      try {
         const res = await signup(userData)
        return {
            otpSent : true ,
            tempUser : res.data
        }
      } catch (error) {
        return rejectWithValue(
            error.response?.data?.message || "Signup failed"
        )
      }
     }
)

export const loginThunk = createAsyncThunk(
    "auth/login",
    async (userData,{rejectWithValue})=>{
        try {
            const res = await login(userData)
        return res.data
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "login failed"
            )
        }
    }
)

export const otpThunk = createAsyncThunk(
    "auth/verifyOtp",
    async (data , {rejectWithValue})=>{
        try {
            const res = await verifyOtp(data)
            return res
        } catch (error) {
           return rejectWithValue(
                error.response?.data?.message || "verification failed"
            ) 
        }
    }
)



const auth = createSlice({
    name:"auth",
    initialState :{
        user : null,
        loading:false,
        error:null,
        otpSent : false,
        otpVerified : false,
        tempUser :null
    },
    reducers:{
        resetOtpState : (state)=>{
            state.otpSent = false;
            state.tempUser = null
            state.otpVerified=false
        },
        setUser :(state,action)=>{
            state.user = action.payload
        }
    },
    extraReducers:(builder)=>{
         builder
         .addCase(singupThunk.pending ,(state)=>{
            state.loading = true
            state.error = null
         })

         .addCase(singupThunk.fulfilled,(state , action)=>{
            state.loading =false
            state.otpSent = true
            state.tempUser = action.payload.tempUser

            toast.success("OTP send successfully")
         })
         .addCase(singupThunk.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload

            toast.error(action.payload)
         })

         .addCase(loginThunk.pending , (state)=>{
              state.loading = true
              state.error = null
         })

         .addCase(loginThunk.fulfilled ,(state ,action)=>{
             state.loading =false
             state.user = action.payload
         })

          .addCase(loginThunk.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload
         })

         .addCase(otpThunk.pending , (state)=>{
              state.loading = true
              state.error = null
         })

         .addCase(otpThunk.fulfilled ,(state ,action)=>{
             state.loading =false
             state.otpVerified = true 
             state.otpSent =false

             toast.success("accout created successfully")
         })

          .addCase(otpThunk.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload
            toast.error(action.payload)
         })
    }
    

})

export default auth.reducer