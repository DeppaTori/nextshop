import { Product } from "../../entity/Product";
import {
  selectItems,
  setTotalItems,
  getTotalItems,
} from "../../redux/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const MyCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectItems);
  const totalItems = useAppSelector(getTotalItems);

  const product: Product = {
    id: 1,
    name: "Batman Action Figure",
    description: "",
    price: 65000,
  };

  return (
    <div>
      <h1>My Cart</h1>
      {totalItems > 0 ? <p>Ada item</p> : <p>No items in cart</p>}

      <button onClick={() => dispatch(setTotalItems(1))}>Add item</button>
      {/* <p>
        {product.name} | {product.price}
      </p> */}
    </div>
  );
};
