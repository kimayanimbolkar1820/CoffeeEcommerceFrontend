import api from "@/api/axiosInstance";

export const addToCart = async (productData)=>{
    const response = await  api.post("/cart/addcart" , productData )
    return response.data
}

export const showCart = async (cartProducts)=>{
    const response = await api.get("/cart/getcart",cartProducts)
    return response.data
}

export const updateCart = async (updateQty)=>{
    const response = await api.put("/cart/updatecartitem/:itemId",updateQty)
    return response.data
}

export const deleteCart = async (cart_item_id)=>{
    const response = await api.delete(`/cart/removefromcart/${cart_item_id}`)
    return response.data
}