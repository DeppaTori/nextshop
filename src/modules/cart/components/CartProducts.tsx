import { CartProduct } from "../../../entity/CartProduct";

interface CartProductProps {
  products: CartProduct[];
}

export const CartProducts = ({ products }: CartProductProps) => {
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
            <td>{product.quantity}</td>
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
