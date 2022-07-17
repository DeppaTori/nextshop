import { render, screen } from "@testing-library/react";
import { Product } from "../../../entity/Product";
import { MyCart } from "../../../modules/cart/MyCart";
import { renderWithProviders } from "../../redux/test_utils";
import user from "@testing-library/user-event";

describe("CartPage", () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Batman Action Figure",
      description: "This is an action figure",
      price: 65000,
    },
  ];

  it("renders My Cart heading", () => {
    render(<MyCart />);
    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
  });
  it.only("renders product name, quantity and total price", () => {
    renderWithProviders(<MyCart />);
    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
    user.click(screen.getByRole("button", { name: /add item/i }));
    expect(screen.getByText(/ada item/i)).toBeInTheDocument();
  });
});
