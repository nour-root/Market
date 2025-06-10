import { atom } from "jotai";
import type { Product } from "./types";
export const DataAtom = atom<Product[]>([]);
