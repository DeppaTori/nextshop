import { Container } from "@mui/material";
import { CartProduct } from "../../entity/CartProduct";
import { Product } from "../../entity/Product";
import {
  getAllItems,
  getTotalItems,
  updateQuantity,
} from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CartProducts } from "./components/CartProducts";

export const MyCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(getAllItems);
  const totalItems = useAppSelector(getTotalItems);

  const increaseQuantityOnClick = (
    productId: number,
    currentQuantity: number
  ) => {
    dispatch(
      updateQuantity({ productId: productId, quantity: currentQuantity + 1 })
    );
  };

  const decreaseQuantityOnClick = (
    productId: number,
    currentQuantity: number
  ) => {
    dispatch(
      updateQuantity({ productId: productId, quantity: currentQuantity - 1 })
    );
  };

  return (
    <Container>
      <h1>My Cart</h1>
      {items.length > 0 ? (
        <CartProducts
          products={items}
          increaseOnClick={increaseQuantityOnClick}
          decreaseOnClick={decreaseQuantityOnClick}
        />
      ) : (
        <p>No items in cart</p>
      )}
    </Container>
  );
};
