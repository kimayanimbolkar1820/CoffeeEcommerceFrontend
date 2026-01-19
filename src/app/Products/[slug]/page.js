"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductBySlug } from "@/redux/features/productSlice";

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

  return (
    <div style={{ marginTop: "100px" }}>
      <h1>{currentProduct.name}</h1>
      <p>{currentProduct.description}</p>
      <p>Price: ${currentProduct.price}</p>
    </div>
  );
}
