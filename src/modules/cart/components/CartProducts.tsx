import { MAP_TEST_ID } from "../../../constants";
import { CartProduct } from "../../../entity/CartProduct";

interface CartProductProps {
  products: CartProduct[];
  increaseOnClick: Function;
  decreaseOnClick: Function;
}

export const CartProducts = ({
  products,
  increaseOnClick,
  decreaseOnClick,
}: CartProductProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>No.</th>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>{product.productName}</td>
            <td>
              <button
                data-testid={MAP_TEST_ID.CART_INCREASE_QUANTITY_BTN}
                onClick={() =>
                  increaseOnClick(product.productId, product.quantity)
                }
              >
                +
              </button>
              <input
                placeholder="quantity"
                onChange={() => {}}
                value={product.quantity}
              />
              <button
                data-testid={MAP_TEST_ID.CART_DECREASE_QUANTITY_BTN}
                onClick={() =>
                  decreaseOnClick(product.productId, product.quantity)
                }
              >
                -
              </button>
            </td>
            <td>{product.productPrice}</td>
            <td>{product.totalPrice}</td>
          </tr>
        ))}
        <tr>
          <td>Total</td>
          <td>{products[0].totalPrice}</td>
        </tr>
      </tbody>
    </table>
  );
};
