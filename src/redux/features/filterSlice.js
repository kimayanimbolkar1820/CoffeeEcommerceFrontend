import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryLevel1: "",
  categoryLevel2: "",
  categoryLevel3: "",
 
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryLevel1: (state, action) => {
      state.categoryLevel1 = action.payload;
    },

    setCategoryLevel2: (state, action) => {
      state.categoryLevel2 = action.payload;
      state.categoryLevel3 = ""; // ✅ VERY IMPORTANT (dependency fix)
    },

    setCategoryLevel3: (state, action) => {
      state.categoryLevel3 = action.payload;
    },

    

  
    resetFilters: () => initialState,
  },
});

export const {
  setCategoryLevel1,
  setCategoryLevel2,
  setCategoryLevel3,
  setRoastLevel,
  setRoastColor,
  resetFilters, // ✅ NOW EXISTS
} = filterSlice.actions;

export default filterSlice.reducer;
