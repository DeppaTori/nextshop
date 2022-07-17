import { render, screen } from "@testing-library/react";
import { ProductsPage } from "../../../modules/products/ProductsPage";
import { Product } from "../../../entity/Product";
import user from "@testing-library/user-event";

describe("ProductsPage", () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Batman Action Figure",
      description: "This is an action figure",
      price: 65000,
    },
  ];

  it("renders Welkom To NextShop header", () => {
    render(<ProductsPage />);
    expect(
      screen.getByRole("heading", { name: "Welcome to NextShop" })
    ).toBeInTheDocument();
  });
  it("renders one product", () => {
    render(<ProductsPage products={products} />);
    expect(screen.getByText(products[0].name)).toBeInTheDocument();
    expect(screen.getByText(products[0].description)).toBeInTheDocument();
    expect(screen.getByText(products[0].price)).toBeInTheDocument();
  });

  it("renders text Items in Cart and it quantity", () => {
    render(<ProductsPage />);
    expect(screen.getByText("Items In Cart: 0")).toBeInTheDocument();
  });

  it("renders add to cart button", () => {
    render(<ProductsPage products={products} />);
    expect(
      screen.getByRole("button", { name: "Add to Cart" })
    ).toBeInTheDocument();
  });

  it("updates the item quantity in cart when add to cart button is clicked", () => {
    render(<ProductsPage products={products} />);
    expect(screen.getByText("Items In Cart: 0")).toBeInTheDocument();
    user.click(screen.getByRole("button", { name: "Add to Cart" }));
    expect(screen.queryByText("Items In Cart: 1")).toBeInTheDocument();
  });

  it("renders remove from cart button if item already in cart", () => {
    let removeFromCartBtn: HTMLElement | null;
    render(<ProductsPage products={products} />);
    removeFromCartBtn = screen.queryByRole("button", {
      name: "Remove from Cart",
    });
    expect(removeFromCartBtn).not.toBeInTheDocument();
    user.click(screen.getByRole("button", { name: "Add to Cart" }));
    removeFromCartBtn = screen.queryByRole("button", {
      name: "Remove from Cart",
    });
    expect(removeFromCartBtn).toBeInTheDocument();
  });

  it("updates item quantity to zero when remove from cart is clicked", () => {
    let removeFromCartBtn: HTMLElement | null;
    render(<ProductsPage products={products} />);
    user.click(screen.getByRole("button", { name: "Add to Cart" }));
    removeFromCartBtn = screen.getByRole("button", {
      name: "Remove from Cart",
    });
    user.click(removeFromCartBtn);
    expect(screen.getByText("Items In Cart: 0")).toBeInTheDocument();
  });

  it("renders My Cart button", () => {
    render(<ProductsPage />);
    expect(screen.getByRole("button", { name: "My Cart" })).toBeInTheDocument();
  });

  it.skip("renders My Cart page when my cart button is clicked", () => {
    render(<ProductsPage />);

    user.click(screen.getByRole("button", { name: "My Cart" }));

    expect(
      screen.getByRole("heading", { name: "My Cart" })
    ).toBeInTheDocument();
  });
});
