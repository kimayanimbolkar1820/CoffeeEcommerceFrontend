import api from "./axiosInstance";

export const  getAllProducts = async ()=>{
    const response = await api.get("/all-products");
    return response.data
};

export const getProduct = async (slug)=>{
    const response = await api.get(`/get-product/${slug}`)
    return response.data
}