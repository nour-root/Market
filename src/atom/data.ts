import { atom } from "jotai";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: object;
};
export const DataAtom = atom<Product[]>([]);
