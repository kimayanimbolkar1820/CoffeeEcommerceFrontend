import api from '@/api/axiosInstance'


export const signup = async (userData)=>{
    const response = await api.post("/auth/register",userData)
    return response.data
}

export const login = async (userData)=>{
    const response = await api.post("/auth/login" , userData)
    return response.data
}

export const verifyOtp = async (data)=>{
    const response = await api.post("/auth/verify-otp",data)
    return response.data
}

export const resendOtp = async (resendotp)=>{
    const response = await api.post("/auth/resend-otp", resendotp)
    return response.data
}

export const forgetPassword = async (forgetpass)=>{
    const response = await api.post("/auth/forgot-password",forgetpass)
    return response.data
}