import { useState, useEffect } from "react";
import { Receiver, ShippingInfo } from "../../entity/ShippingInfo";
import { API_URL } from "../../helpers/constant";

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
        <div>
          <p>Informasi Pengiriman</p>
          <p>Nama Penerima : {shippingInfo?.receiver.name}</p>
          <p>Alamat Penerima : {shippingInfo?.receiver.address}</p>
          <p>Metode Pembayaran : ATM Transfer</p>
          <div>
            <button>Payment</button>
            <button>Continue Shopping</button>
          </div>
        </div>
      )}
    </>
  );
};
