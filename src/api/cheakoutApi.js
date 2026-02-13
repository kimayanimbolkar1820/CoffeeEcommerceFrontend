import api from "@/api/axiosInstance"

export const cheakout = async( cheakoutData)=>{
    const response = await api.post("/checkout/preview" ,cheakoutData)
    return response.data
}