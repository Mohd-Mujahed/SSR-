import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shopDetails: {},
};

const shopDetailsSlice = createSlice({
  name: "shopDetails",
  initialState,
  reducers: {
    STORE_SHOP_DETAILS: (state, action) => {
      state.shopDetails = action.payload;
    },
  },
});

export const { STORE_SHOP_DETAILS } = shopDetailsSlice.actions;

export default shopDetailsSlice.reducer;
