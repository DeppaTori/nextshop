import React from "react";
import {
  render,
  screen,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "../App";
import { renderWithProvidersAndRouter } from "./redux/test_utils";
import user from "@testing-library/user-event";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("App", () => {
  it("move to my cart page when my cart button is  clicked", async () => {
    renderWithProvidersAndRouter(<App />);

    expect(screen.getByText(/welcome to nextshop/i)).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /view my cart/i }));

    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
  });

  it("renders home screen when continue shopping is clicked", async () => {
    renderWithProvidersAndRouter(<App />);

    await user.click(
      screen.getByRole("button", { name: /continue shopping/i })
    );
    expect(screen.getByText(/welcome to nextshop/i)).toBeInTheDocument();
  });

  it("renders login page when checkout button is clicked", async () => {
    const loadingText = "loading products...";
    renderWithProvidersAndRouter(<App />);
    await waitForElementToBeRemoved(screen.queryByText(loadingText));
    user.click(screen.getByRole("button", { name: /add to cart/i }));
    await user.click(screen.getByRole("button", { name: /view my cart/i }));
    await user.click(screen.getByRole("button", { name: /checkout/i }));
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
  });
});
