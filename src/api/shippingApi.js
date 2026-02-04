import api from "@/api/axiosInstance"

export const addAddress = async (shipAddress)=>{
    const response = await api.post("/shipping-address/add",shipAddress)
    return response.data
}