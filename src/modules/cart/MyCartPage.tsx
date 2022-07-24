import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { CartProduct } from "../../entity/CartProduct";
import { Product } from "../../entity/Product";
import {
  getAllItems,
  getTotalItems,
  updateQuantity,
} from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CartProducts } from "./components/CartProducts";
import Button from "@mui/material/Button";

export const MyCartPage = () => {
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
      <p>
        <Link to="/">
          <Button>Continue Shopping</Button>
        </Link>

        {items.length > 0 && (
          <Link to="/checkout">
            <Button>Checkout</Button>
          </Link>
        )}
      </p>
    </Container>
  );
};
