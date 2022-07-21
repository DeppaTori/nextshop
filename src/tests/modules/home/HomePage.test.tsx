import { HomePage } from "../../../modules/home/HomePage";
import {
  renderWithProviders,
  renderWithProvidersAndRouter,
} from "../../redux/test_utils";
import { screen, waitForElementToBeRemoved } from "@testing-library/react";

describe("HomePage", () => {
  it("renders welcome and view my cart button", () => {
    renderWithProvidersAndRouter(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /welcome to nextShop/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /view my cart/i })
    ).toBeInTheDocument();
  });

  it("renders one product", async () => {
    const loadingText = "loading products...";
    renderWithProvidersAndRouter(<HomePage />);
    expect(screen.getByText(loadingText)).toBeInTheDocument();
    expect(
      await screen.findByText(/minion action figure/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/yellow action figure/i)).toBeInTheDocument();
    expect(screen.getByText(/12000/i)).toBeInTheDocument();
    expect(screen.queryByText(loadingText)).not.toBeInTheDocument();
  });
});
