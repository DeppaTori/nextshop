import { render } from "@testing-library/react";
import { CheckoutPage } from "../../../modules/checkout/CheckoutPage";

describe("CheckoutPage", () => {
  it("renders no enter for guess", () => {
    render(<CheckoutPage />);
  });
});
