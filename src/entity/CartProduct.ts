export interface CartProduct {
  productId: number;
  productName: string;
  productPrice: number;
  quantity: number;
  totalPrice: number;
}

export interface CartProductModifier {
  productId: number;
  quantity: number;
}
