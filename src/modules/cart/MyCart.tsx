import { Container } from "@mui/material";
import { CartProduct } from "../../entity/CartProduct";
import { Product } from "../../entity/Product";
import { getAllItems, addItem, getTotalItems } from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface cartProductsProps {
  cproducts: CartProduct[];
}

export const MyCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(getAllItems);
  const totalItems = useAppSelector(getTotalItems);

  const product: Product = {
    id: 1,
    name: "Batman Action Figure",
    description: "",
    price: 65000,
  };

  const CartProducts = ({ cproducts }: cartProductsProps) => {
    if (cproducts.length > 0) {
      return <div>{cproducts[0].productName}</div>;
    }
    return null;
  };

  return (
    <Container>
      <h1>My Cart</h1>
      {items.length > 0 ? (
        <CartProducts cproducts={items} />
      ) : (
        <p>No items in cart</p>
      )}
    </Container>
  );
};
