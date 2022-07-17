import { Link } from "react-router-dom";
import { ProductsPage } from "../products/ProductsPage";
import { Product } from "../../entity/Product";

const products: Product[] = [
  {
    id: 1,
    name: "Batman Action Figure",
    description: "An action figure with gray color",
    price: 100000,
  },
];

export const HomePage = () => {
  return (
    <>
      <h1>Welcome to NextShop</h1>
      <Link to="/my-cart">
        <button>View My Cart</button>
      </Link>
      <ProductsPage products={products} />
    </>
  );
};
