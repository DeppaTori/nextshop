import { Link } from "react-router-dom";
import { ProductsPage } from "../products/ProductsPage";
import { Product } from "../../entity/Product";
import { useEffect, useState } from "react";
import { API_URL } from "../../helpers/constant";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const response = await fetch(`${API_URL}/products`);
      const json = await response.json();
      setProducts(json.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>Welcome to NextShop</h1>
      <Link to="/my-cart">
        <Button variant="contained">View My Cart</Button>
      </Link>
      {isLoading ? (
        <p>loading products...</p>
      ) : (
        <ProductsPage products={products} />
      )}
    </Container>
  );
};
