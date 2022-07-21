import { Container } from "@mui/material";
import { CartProduct } from "../../entity/CartProduct";
import { Product } from "../../entity/Product";
import { getAllItems, getTotalItems } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CartProducts } from "./components/CartProducts";

export const MyCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(getAllItems);
  const totalItems = useAppSelector(getTotalItems);

  return (
    <Container>
      <h1>My Cart</h1>
      {items.length > 0 ? (
        <CartProducts products={items} />
      ) : (
        <p>No items in cart</p>
      )}
    </Container>
  );
};
