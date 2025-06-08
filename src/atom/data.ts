import { atom } from "jotai";
type Product = {
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
export const DataAtom = atom<Product[]>([]);
