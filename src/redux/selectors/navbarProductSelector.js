import { createSelector } from "@reduxjs/toolkit";

const normalize = (value) =>
  value?.toLowerCase().replace(/\s+/g, "-");

export const selectNavbarProductsByCategory = (categorySlug) =>
  createSelector(
    // ✅ POINT TO THE REAL ARRAY
    [(state) => state.product.data?.products || []],
    (products) => {
      if (!categorySlug) return [];

      const slug = normalize(categorySlug);

      return products.filter((p) => {
        const level2 = normalize(p.category_level_2);
        const level3 = normalize(p.category_level_3 || "");


        return level2 === slug || level3 === slug;
      });
    }
  );
