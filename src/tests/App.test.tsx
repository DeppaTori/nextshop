import React from "react";
import { render, screen } from "@testing-library/react";
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
});
