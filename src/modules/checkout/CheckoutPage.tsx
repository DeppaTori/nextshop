import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { Receiver, ShippingInfo } from "../../entity/ShippingInfo";
import { API_URL } from "../../helpers/constant";
import "./CheckoutPage.css";

export const CheckoutPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/user/1`);
        const result = await response.json();
        const customerReceiver: Receiver = {
          name: result.data.firstName.concat(" ").concat(result.data.lastName),
          address: result.data.address,
        };
        const customerShippingInfo: ShippingInfo = {
          receiver: customerReceiver,
        };
        setShippingInfo(customerShippingInfo);
      } catch (e) {
        console.log(e);
      }

      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="Checkout-container">
          <Card>
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Informasi Pengiriman
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Nama Penerima"
                    secondary={shippingInfo?.receiver.name}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Alamat Penerima"
                    secondary={shippingInfo?.receiver.address}
                  />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary="Metode Pembayaran"
                    secondary="ATM Transfer"
                  />
                </ListItem>
              </List>
            </CardContent>
            <CardActions>
              <Button variant="outlined">Continue Shopping</Button>
              <Button variant="contained">Payment</Button>
            </CardActions>
          </Card>
        </div>
      )}
    </>
  );
};
