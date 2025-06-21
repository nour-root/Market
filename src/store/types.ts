export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
};
export type cartItem = {
  id: number;
  quantity: number;
};
export type ShippingFormFields = {
  fullName: string;
  phoneNumber: string;
  email: string;
  company: string;
  address1: string;
  address2: string;
  zipCode: string;
  Voucher: string;
};
