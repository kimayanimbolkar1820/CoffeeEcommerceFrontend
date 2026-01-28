import  { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {  signup ,login ,verifyOtp , resendOtp ,forgetPassword } from '@/api/authApi'
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
            console.log(res)
          if (res.success) {
        return res.user; // only return the user
      } else {
        return rejectWithValue(res.message); // reject on failure
      }
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

export const resendThunk = createAsyncThunk(
    "auth/resendOtp",
    async (resendotp ,{rejectWithValue})=>{
        try {
            const res = await resendOtp(resendotp)
            return  res
        } catch (error) {
            return rejectWithValue(
                error.response?.data?.message || "OTP not send"
            )
        }
    }
)

export const forgotpassThunk = createAsyncThunk(
    "auth/forgotPassword",
    async (forgetpass ,{rejectWithValue })=>{
        try {
            const res = await forgetPassword(forgetpass)
            return res
            
        } catch (error) {
            return rejectWithValue(
            error.response?.data?.message || "Password not forgot"
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
             toast.success("login successfully")
         })

          .addCase(loginThunk.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload
            toast.error(action.payload)
         })

         .addCase(otpThunk.pending , (state)=>{
              state.loading = true
              state.error = null
         })

         .addCase(otpThunk.fulfilled ,(state ,action)=>{
             state.loading =false
             state.otpVerified = true 

             toast.success("accout created successfully")
         })

          .addCase(otpThunk.rejected , (state , action)=>{
            state.loading = false
            state.error = action.payload
            toast.error(action.payload)
         })

         .addCase(resendThunk.pending ,(state)=>{
            state.loading = true 
            state.error = null
         })

         .addCase(resendThunk.fulfilled , (state)=>{
            state.loading =false
            state.otpSent = true
            toast.success("OTP sent successfully")
         })

         .addCase(resendThunk.rejected ,(state , action)=>{
             state.loading = false 
             state.error = action.payload
             toast.error(action.payload)
         })

         .addCase(forgotpassThunk.pending , (state)=>{
            state.loading = true 
            state.error =null
         })

         .addCase(forgotpassThunk.fulfilled , (state)=>{
            state.loading =false
         })

    }
    

})

export default auth.reducer