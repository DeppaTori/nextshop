import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { CheckoutPage } from "../../../modules/checkout/CheckoutPage";

describe("CheckoutPage", () => {
  it("renders customer billing address and customer name", async () => {
    render(<CheckoutPage />);
    await waitForElementToBeRemoved(screen.queryByText(/loading.../i));
    expect(screen.getByText(/informasi pengiriman/i)).toBeInTheDocument();
    expect(screen.getByText(/nama penerima :/i)).toBeInTheDocument();
    expect(screen.getByText(/alamat penerima :/i)).toBeInTheDocument();
    expect(screen.getByText(/tiara dewi/i)).toBeInTheDocument();
    expect(screen.getByText(/jakarta/i)).toBeInTheDocument();
    expect(screen.getByText(/metode pembayaran : /i)).toBeInTheDocument();
    expect(screen.getByText(/atm transfer/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /payment/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue shopping/i })
    ).toBeInTheDocument();
  });
});
