import { render, screen } from "@testing-library/react";
import { Product } from "../../../entity/Product";
import { MyCart } from "../../../modules/cart/MyCart";
import { renderWithProviders } from "../../redux/test_utils";
import user from "@testing-library/user-event";
import { CartProduct } from "../../../entity/CartProduct";
import { MAP_TEST_ID } from "../../../constants";

describe("CartPage", () => {
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Batman Action Figure",
  //     description: "This is an action figure",
  //     price: 65000,
  //   },
  // ];

  const setupRender = (quantity: number) => {
    const initialItems: CartProduct[] = [
      {
        productId: 1,
        productName: "Batman Action Figure",
        quantity: quantity,
        totalPrice: 1200,
        productPrice: 1200,
      },
    ];
    renderWithProviders(<MyCart />, {
      preloadedState: {
        cart: {
          items: initialItems,
          totalItems: 0,
        },
      },
    });
  };

  it("renders My Cart heading", () => {
    renderWithProviders(<MyCart />);
    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
  });

  // it("renders product name from initial state", () => {
  //   const initialItems: CartProduct[] = [
  //     {
  //       productId: 1,
  //       productName: "Batman Action Figure",
  //       quantity: 1,
  //       totalPrice: 1200,
  //       productPrice: 1200,
  //     },
  //   ];
  //   const { getByText } = renderWithProviders(<MyCart />, {
  //     preloadedState: {
  //       cart: {
  //         items: initialItems,
  //         totalItems: 0,
  //       },
  //     },
  //   });

  //   expect(getByText(/batman action figure/i)).toBeInTheDocument();
  // });

  it("updates product quantity in cart when increaase button is clicked", () => {
    setupRender(1);
    expect(screen.getByDisplayValue(/1/i)).toBeInTheDocument();
    user.click(screen.getByTestId(MAP_TEST_ID.CART_INCREASE_QUANTITY_BTN));
    expect(screen.getByDisplayValue(/2/i)).toBeInTheDocument();
  });

  it("updates product quantity in cart when decrease button is clicked", () => {
    setupRender(2);
    expect(screen.getByDisplayValue(/2/i)).toBeInTheDocument();
    user.click(screen.getByTestId(MAP_TEST_ID.CART_DECREASE_QUANTITY_BTN));
    expect(screen.getByDisplayValue(/1/i)).toBeInTheDocument();
    user.click(screen.getByTestId(MAP_TEST_ID.CART_DECREASE_QUANTITY_BTN));
    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
  });
});
