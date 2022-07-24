import { render, screen } from "@testing-library/react";
import { Product } from "../../../entity/Product";
import { renderWithProvidersAndRouter } from "../../redux/test_utils";
import user from "@testing-library/user-event";
import { CartProduct } from "../../../entity/CartProduct";
import { MAP_TEST_ID } from "../../../constants";
import { MyCartPage } from "../../../modules/cart/MyCartPage";

describe("CartPage", () => {
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
    renderWithProvidersAndRouter(<MyCartPage />, {
      preloadedState: {
        cart: {
          items: initialItems,
          totalItems: 0,
        },
      },
    });
  };

  it("renders My Cart heading", () => {
    renderWithProvidersAndRouter(<MyCartPage />);
    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
    expect(screen.getByText(/no items in cart/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue shopping/i })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /checkout/i })
    ).not.toBeInTheDocument();
  });

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

  it("renders checkout button where there is a item in cart", () => {
    setupRender(1);
    expect(
      screen.getByRole("button", { name: /checkout/i })
    ).toBeInTheDocument();
  });
});
