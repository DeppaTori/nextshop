import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct } from "../entity/CartProduct";
import { RootState } from "./store";

interface CartState {
  items: CartProduct[];
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setTotalItems: (state, action: PayloadAction<number>) => {
      state.totalItems += action.payload;
    },
  },
});

export const selectItems = (state: RootState) => state.cart.items;
export const getTotalItems = (state: RootState) => state.cart.totalItems;

export const { setTotalItems } = cartSlice.actions;

export default cartSlice.reducer;
