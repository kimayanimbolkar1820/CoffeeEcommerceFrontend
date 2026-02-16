import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlansThunk = createAsyncThunk(
  "subscription/fetchPlans",
  async (productId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `/api/subscription/plans?product_id=${productId}`
      );
      return res.data.plans;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch plans"
      );
    }
  }
);

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    plans: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlansThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlansThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.plans = action.payload || [];
      })
      .addCase(fetchPlansThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriptionSlice.reducer;
