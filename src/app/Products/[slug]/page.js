"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductBySlug } from "@/redux/features/productSlice";
import Image from "next/image";
import { getValidImage } from "@/utils/getValidImage";

export default function Page() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { currentProduct, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    if (slug) {
      dispatch(fetchProductBySlug(slug));
    }
  }, [dispatch, slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!currentProduct) return <p>No product found</p>;

  const Product  = currentProduct.product

  return (
    <div style={{ marginTop: "100px" }}>
      <Image src={getValidImage(Product.images)} alt={Product.name} height={200} width={200}/>
      <h1 className="text-white">{Product.name}</h1>
      <p>{Product.description}</p>
      <p>Price: ${Product.price}</p>
      <p>{Product.quantity} </p>
    </div>
  );
}
