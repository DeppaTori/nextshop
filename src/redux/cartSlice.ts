import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartProductModifier } from "../entity/CartProduct";
import { RootState } from "./store";
import { Product } from "../entity/Product";

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
    addItem: (state, action: PayloadAction<Product>) => {
      state.items = [
        ...state.items,
        {
          productId: action.payload.id,
          productName: action.payload.name,
          quantity: 1,
          productPrice: action.payload.price,
          totalPrice: action.payload.price,
        } as CartProduct,
      ];
    },
    removeItem: (state: { items: any[] }, action: PayloadAction<number>) => {
      const filterByRemove = state.items.filter(
        (item) => item.productId !== action.payload
      );
      state.items = [...filterByRemove];
    },
    updateQuantity: (
      state: { items: CartProduct[] },
      action: PayloadAction<CartProductModifier>
    ) => {
      state.items = state.items.map((item) => {
        if (item.productId === action.payload.productId) {
          return {
            ...item,
            quantity: action.payload.quantity,
            totalPrice:
              action.payload.quantity *
              item.productPrice *
              action.payload.quantity,
          };
        }
        return item;
      });
    },
  },
});

export const getAllItems = (state: RootState) => state.cart.items;
export const getTotalItems = (state: RootState) => state.cart.totalItems;

export const { setTotalItems, addItem, removeItem, updateQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
