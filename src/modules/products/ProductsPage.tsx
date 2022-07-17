import { useState } from "react";
import { Product } from "../../entity/Product";

type ProductsPageProps = {
  products: Product[];
};

type ProductCardProps = {
  product: Product;
};

export const ProductsPage = ({ products }: ProductsPageProps) => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const Cart = () => <div>Items In Cart: {cartItems.length}</div>;
  const handleAddToCartClick = (id: number) => {
    if (!cartItems.includes(id)) {
      setCartItems((prev) => prev.concat([id]));
    }
  };

  const handleRemoveFromCartClick = (id: number) => {
    if (cartItems.includes(id)) {
      const tempAr = [...cartItems];
      tempAr.splice(cartItems.indexOf(id), 1);
      setCartItems(tempAr);
    }
  };

  const ProductCard = ({ product }: ProductCardProps) => (
    <div>
      <h3>{product.name}</h3>
      <p> {product.description} </p>
      <p> {product.price} </p>
      <p>
        {" "}
        {cartItems.includes(product.id) ? (
          <button onClick={() => handleRemoveFromCartClick(product.id)}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => handleAddToCartClick(product.id)}>
            Add to Cart
          </button>
        )}
      </p>
    </div>
  );

  return (
    <>
      <h1>Welcome to NextShop</h1>
      <Cart />
      <button>My Cart</button>
      {products.length > 0 && <ProductCard product={products[0]} />}
    </>
  );
};

ProductsPage.defaultProps = {
  products: [] as Product[],
};
