import type { FieldValues, UseFormRegister } from "react-hook-form";
import type { Path } from "react-hook-form";
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
export type BillingFormFields = {
  fullName: string;
  phoneNumber: string;
  email: string;
  company: string;
  address1: string;
  address2: string;
  zipCode: string;
  Voucher: string;
};
export type InputProps<T extends FieldValues> = {
  handleFocus: (field: string) => void;
  handleBlur: (field: string) => void;
  handleChange: (field: string, value: string) => void;
  focusState: boolean;
  inputValue: string;
  label: Path<T>;
  name: string;
  type?: string;
  register?: UseFormRegister<T>;
  error?: string;
};

export type PayWithCreditCard = {
  cardNumber: string;
  expoDate: string;
};
export type PayWithPaypal = {
  payPalEmail: string;
};
