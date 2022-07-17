import "./App.css";
import { Product } from "./entity/Product";
import { MyCart } from "./modules/cart/MyCart";
import { ProductsPage } from "./modules/products/ProductsPage";

function App() {
  const products: Product[] = [
    {
      id: 1,
      name: "Batman Action Figure",
      description: "An action figure with gray color",
      price: 100000,
    },
  ];

  return (
    <div className="App">
      {/* <ProductsPage products={products} /> */}
      <MyCart />
    </div>
  );
}

export default App;
