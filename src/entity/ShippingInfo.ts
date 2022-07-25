export interface Receiver {
  name: string;
  address: string;
}

export interface ShippingInfo {
  receiver: Receiver;
}
