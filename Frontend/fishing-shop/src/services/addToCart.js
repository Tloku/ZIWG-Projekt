import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    addToCart: (state, id) => {
      state.data.push(id.payload);
    },
    removeFromCart: (state, action) => {
      state = state.data.filter((id) => id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
