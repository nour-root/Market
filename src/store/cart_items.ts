import { atom } from "jotai";
import type { cartItem } from "./types";
export const cart_items = atom<cartItem[]>([]);
