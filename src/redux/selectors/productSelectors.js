import { createSelector } from "@reduxjs/toolkit"

export const selectFilteredProducts = createSelector(
  [
    (state) => state.product.data.products,
    (state) => state.filter,
  ],
  (products, filter) => {
    if (!products) return []

    return products.filter((p) => {
      if (filter.categoryLevel1 !== "All" &&
          p.category_level_1 !== filter.categoryLevel1) return false

      if (filter.categoryLevel2 !== "All" &&
          p.category_level_2 !== filter.categoryLevel2) return false

      if (filter.categoryLevel3 !== "All" &&
          p.category_level_3 !== filter.categoryLevel3) return false

      if (filter.roastLevel !== "All" &&
          p.roast_level !== filter.roastLevel) return false

      if (filter.roastColor !== "All" &&
          p.roast_color !== filter.roastColor) return false

      return true
    })
  }
)
