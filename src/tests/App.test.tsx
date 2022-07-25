import React from "react";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import App from "../App";
import { renderWithProvidersAndRouter } from "./redux/test_utils";
import user from "@testing-library/user-event";

describe("App", () => {
  const renderAndWaitProducts = async () => {
    const loadingText = "loading products...";
    renderWithProvidersAndRouter(<App />);
    await waitForElementToBeRemoved(screen.queryByText(loadingText));
  };
  const viewCart = async () => {
    await user.click(screen.getByRole("button", { name: /view my cart/i }));
  };
  const addToCart = () => {
    user.click(screen.getByRole("button", { name: /add to cart/i }));
  };
  const gotoCheckout = async () => {
    await user.click(screen.getByRole("button", { name: /checkout/i }));
  };

  it("move to my cart page when my cart button is  clicked", async () => {
    renderWithProvidersAndRouter(<App />);

    expect(screen.getByText(/welcome to nextshop/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /view my cart/i }));

    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
  });

  it("renders home screen when continue shopping is clicked", async () => {
    await renderAndWaitProducts();
    await viewCart();

    await user.click(
      screen.getByRole("button", { name: /continue shopping/i })
    );
    expect(screen.getByText(/welcome to nextshop/i)).toBeInTheDocument();
  });

  it("renders login page when checkout button is clicked", async () => {
    await renderAndWaitProducts();
    addToCart();
    await viewCart();
    await gotoCheckout();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });

  it("renders checkout page when user logged in", async () => {
    await renderAndWaitProducts();
    addToCart();
    await viewCart();
    await gotoCheckout();
    user.type(screen.getByPlaceholderText(/email/i), "valid@user.com");
    user.type(screen.getByPlaceholderText(/password/i), "validpassword");
    user.click(screen.getByRole("button", { name: /login/i }));
    expect(screen.getByText(/metode pembayaran/i)).toBeInTheDocument();
  });
});
