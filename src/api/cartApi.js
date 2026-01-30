import api from "@/api/axiosInstance";

export const addToCart = async (productData)=>{
    const response = await  api.post("/cart/addcart" , productData )
    return response.data
}