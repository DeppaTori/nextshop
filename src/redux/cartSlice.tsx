import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  value: number;
}

export const initialState: CartState = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state: CartState) => {
      state.value += 1;
    },
    decrement: (state: CartState) => {
      state.value -= 1;
    },
    incrementByAmount: (state: CartState, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;
export default cartSlice.reducer;
