import { useState } from "react";
import { Product } from "../../entity/Product";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getAllItems, addItem, removeItem } from "../../redux/cartSlice";
import { CartProduct } from "../../entity/CartProduct";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://p-id.ipricegroup.com/0421ea148a329760a3970d12f94055b82b0a9611_0.jpg?position=6"
          alt={`image of ${product.name}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Rp. {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isProductExistInCart(product.id) ? (
          <Button
            size="small"
            color="primary"
            role="button"
            onClick={() => dispatch(removeItem(product.id))}
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(addItem(product))}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
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
