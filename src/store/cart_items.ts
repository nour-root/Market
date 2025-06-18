import { atomWithStorage } from "jotai/utils";
import type { cartItem } from "./types";
export const cart_items = atomWithStorage<cartItem[]>("cart", []);
