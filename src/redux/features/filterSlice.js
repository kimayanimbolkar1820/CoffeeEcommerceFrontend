import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categoryLevel1: "All",
  categoryLevel2: "All",
  categoryLevel3: "All",
  roastLevel: "All",
  roastColor: "All",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryLevel1: (state, action) => {
      state.categoryLevel1 = action.payload
      state.categoryLevel2 = "All"
      state.categoryLevel3 = "All"
    },
    setCategoryLevel2: (state, action) => {
      state.categoryLevel2 = action.payload
      state.categoryLevel3 = "All"
    },
    setCategoryLevel3: (state, action) => {
      state.categoryLevel3 = action.payload
    },
    setRoastLevel: (state, action) => {
      state.roastLevel = action.payload
    },
    setRoastColor: (state, action) => {
      state.roastColor = action.payload
    },
  resetFilters: () => ({
      ...initialState,
    }),
  },
})

export const {
  setCategoryLevel1,
  setCategoryLevel2,
  setCategoryLevel3,
  setRoastLevel,
  setRoastColor,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer
