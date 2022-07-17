import { useState } from "react";
import { Product } from "../../entity/Product";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllItems, addItem, removeItem } from "../../redux/cartSlice";
import { CartProduct } from "../../entity/CartProduct";

type ProductsPageProps = {
  products: Product[];
};

type ProductCardProps = {
  product: Product;
};

export const ProductsPage = ({ products }: ProductsPageProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(getAllItems);

  const isProductExistInCart = (id: number) => {
    if (cartItems.findIndex((item) => item.productId === id) > -1) {
      return true;
    }
    return false;
  };

  const Cart = () => <div>Items In Cart: {cartItems.length}</div>;

  const ProductCard = ({ product }: ProductCardProps) => (
    <div>
      <h3>{product.name}</h3>
      <p> {product.description} </p>
      <p> {product.price} </p>
      <p>
        {" "}
        {isProductExistInCart(product.id) ? (
          // <button onClick={() => handleRemoveFromCartClick(product.id)}>
          <button onClick={() => dispatch(removeItem(product.id))}>
            Remove from Cart
          </button>
        ) : (
          <button onClick={() => dispatch(addItem(product))}>
            Add to Cart
          </button>
        )}
      </p>
    </div>
  );

  return (
    <>
      <Cart />
      {products.length > 0 && <ProductCard product={products[0]} />}
    </>
  );
};

ProductsPage.defaultProps = {
  products: [] as Product[],
};
