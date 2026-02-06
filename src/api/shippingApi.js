import api from "@/api/axiosInstance"

export const addAddress = async (shipAddress)=>{
    const response = await api.post("/shipping-address/add",shipAddress)
    return response.data
}

export const showAddress = async()=>{
    const response = await api.get("/shipping-address/getAdd")
    return response.data
}