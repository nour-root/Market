import { DataAtom } from "@/store/data";
import { cart_items } from "@/store/cart_items";
import { useAtomValue } from "jotai";
import PayWithCreditCard from "./payment_elements/payWithCreditCard";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useState } from "react";
import PayWithPayPal from "./payment_elements/PayWithPayPal";
import { Button } from "./ui/button";
export default function Payment({
  onStepClick,
}: {
  onStepClick: (index: number) => void;
}) {
  const [selectedOption, setSelectedOption] = useState<string>("option-one");
  const products = useAtomValue(DataAtom);
  const cartItems = useAtomValue(cart_items);
  const subTotal = cartItems
    .map((x) => {
      const item = products.find((p) => p.id === x.id);
      return item ? item.price * x.quantity : 0;
    })
    .reduce((a, c) => a + c, 0)
    .toFixed(2);

  const discount: number = 40;
  const tax: number = 40;
  const total = parseFloat(subTotal) + tax - discount;
  return (
    <div>
      <div className="flex max-lg:flex-col gap-5 h-full max-sm:flex-col-reverse">
        <div className="flex w-full flex-col gap-6 h-auto p-2 bg-white rounded-lg border">
          <RadioGroup defaultValue="option-one" className="h-fit">
            <div className="flex items-center flex-wrap py-5 px-4 border-b">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="option-one"
                  id="option-one"
                  checked={selectedOption === "option-one"}
                  onClick={() => setSelectedOption("option-one")}
                />
                <Label htmlFor="option-one" className="w-full">
                  Pay with credit card
                </Label>
              </div>
              {selectedOption === "option-one" && (
                <div className="w-full">
                  <PayWithCreditCard />
                </div>
              )}
            </div>
            <div className="flex items-center flex-wrap py-5 px-4 border-b">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="option-two"
                  id="option-two"
                  checked={selectedOption === "option-two"}
                  onClick={() => setSelectedOption("option-two")}
                />
                <Label htmlFor="option-two">Pay with Paypal</Label>
              </div>
              {selectedOption === "option-two" && (
                <div className="w-full">
                  <PayWithPayPal />
                </div>
              )}
            </div>
            <div className="flex items-center flex-wrap py-5 px-4">
              <div className="flex items-center gap-3">
                <RadioGroupItem
                  value="option-three"
                  id="option-three"
                  checked={selectedOption === "option-three"}
                  onClick={() => setSelectedOption("option-three")}
                />
                <Label htmlFor="option-three">Cash On Delivery</Label>
              </div>
              {selectedOption === "option-three" && <div className=""></div>}
            </div>
          </RadioGroup>
        </div>
        <div className="w-1/2 h-fit bg-white py-6 px-5 border rounded-lg max-lg:w-full">
          <div className="text-[#7d879c] text-sm space-y-3">
            <div className="flex items-center justify-between">
              <p>Subtotal:</p>
              <p className="text-head font-semibold">${subTotal}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Shipping:</p>
              <p className="text-head font-semibold">-</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Tax:</p>
              <p className="text-head font-semibold ">${tax}</p>
            </div>
            <div className="flex items-center justify-between">
              <p>Discount:</p>
              <p className="text-head font-semibold ">${discount}</p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="space-y-3 w-full">
            <p className="text-2xl font-semibold text-right">
              ${total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
      <Button
        variant={"outline"}
        className="mt-4 w-1/3 capitalize"
        onClick={() => onStepClick(1)}
      >
        back to Details
      </Button>
    </div>
  );
}
