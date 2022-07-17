import { render, screen } from "@testing-library/react";
import { Product } from "../../../entity/Product";
import { MyCart } from "../../../modules/cart/MyCart";
import { renderWithProviders } from "../../redux/test_utils";
import user from "@testing-library/user-event";
import { CartProduct } from "../../../entity/CartProduct";

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
    renderWithProviders(<MyCart />);
    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
  });
  // it("renders product name, quantity and total price", () => {
  //   renderWithProviders(<MyCart />);
  //   expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
  //   user.click(screen.getByRole("button", { name: /add item/i }));
  //   expect(screen.getByText(/batman action figure/i)).toBeInTheDocument();
  // });
  it("renders product name from initial state", () => {
    const initialItems: CartProduct[] = [
      {
        productId: 1,
        productName: "Batman Action Figure",
        quantity: 1,
        totalPrice: 1200,
        productPrice: 1200,
      },
    ];
    const { getByText } = renderWithProviders(<MyCart />, {
      preloadedState: {
        cart: {
          items: initialItems,
          totalItems: 0,
        },
      },
    });

    expect(getByText(/batman action figure/i)).toBeInTheDocument();
  });
});
