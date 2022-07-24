import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@mui/material";
import { MAP_TEST_ID } from "../../../constants";
import { CartProduct } from "../../../entity/CartProduct";
import { IDRFormatCurrency } from "../../../helpers/mixin";

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
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No.</TableCell>
            <TableCell>Item Name</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, i) => (
            <TableRow key={i}>
              <TableCell>{i + 1}</TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell align="center">
                <Button
                  data-testid={MAP_TEST_ID.CART_INCREASE_QUANTITY_BTN}
                  onClick={() =>
                    increaseOnClick(product.productId, product.quantity)
                  }
                >
                  +
                </Button>
                <input
                  placeholder="quantity"
                  onChange={() => {}}
                  value={product.quantity}
                />
                <Button
                  data-testid={MAP_TEST_ID.CART_DECREASE_QUANTITY_BTN}
                  onClick={() =>
                    decreaseOnClick(product.productId, product.quantity)
                  }
                >
                  -
                </Button>
              </TableCell>
              <TableCell align="right">
                {IDRFormatCurrency(product.productPrice)}
              </TableCell>
              <TableCell align="right">
                {IDRFormatCurrency(product.totalPrice)}
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4} align="right">
              Total
            </TableCell>
            <TableCell align="right">
              {IDRFormatCurrency(products[0].totalPrice)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
