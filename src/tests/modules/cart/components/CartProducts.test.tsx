import { render, screen } from "@testing-library/react";
import { CartProduct } from "../../../../entity/CartProduct";
import { CartProducts } from "../../../../modules/cart/components/CartProducts";

describe("CartProducts", () => {
  const products: CartProduct[] = [
    {
      productId: 1,
      productPrice: 1200,
      quantity: 10,
      productName: "Action Figure",
      totalPrice: 12000,
    },
  ];
  it("shows table header", () => {
    render(<CartProducts products={products} />);

    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getAllByRole("row")).toHaveLength(3);
    expect(
      screen.getByRole("columnheader", { name: /no./i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /item name/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Price" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /quantity/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: /total price/i })
    ).toBeInTheDocument();
  });
  it("show one product in cart", () => {
    render(<CartProducts products={products} />);
    expect(screen.getAllByRole("row")).toHaveLength(3);
    expect(screen.getByRole("cell", { name: "1" })).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: products[0].productName })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: products[0].productPrice.toString() })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("cell", { name: products[0].quantity.toString() })
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("cell", { name: products[0].totalPrice.toString() })
    ).toHaveLength(2);
    expect(screen.getByRole("cell", { name: "Total" })).toBeInTheDocument();
  });
});
