import { useState } from "react";
import { Button } from "./ui/button";
import BillingAddress from "./billingAddress";
import ShippingAddress from "./shippingAddress";
import Input from "./input";
import { useForm } from "react-hook-form";
import type { ShippingFormFields } from "@/store/types";
export default function Checkout({
  onStepClick,
}: {
  onStepClick: (index: number) => void;
}) {
  const {
    trigger,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormFields>();

  const onSubmit = async () => {
    const validate = await trigger();
    console.log(validate);
    if (!validate) return;
    onStepClick(2);
  };
  const [focusStates, setFocusStates] = useState({
    fullName: false,
    phoneNumber: false,
    email: false,
    company: false,
    address1: false,
    address2: false,
    zipCode: false,
    Voucher: false,
  });
  const [inputValues, setInputValues] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    company: "",
    address1: "",
    address2: "",
    zipCode: "",
    Voucher: "",
  });
  const handleFocus = (field: string) => {
    setFocusStates((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string) => {
    setTimeout(() => {
      setFocusStates((prev) => ({ ...prev, [field]: false }));
    }, 0);
  };
  const handleChange = (field: string, value: string) => {
    setInputValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex max-lg:flex-col gap-5 h-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-full"
      >
        <ShippingAddress register={register} formState={errors} />
        <BillingAddress register={register} formState={errors} />
        <div className="w-full flex gap-4">
          <Button
            variant={"outline"}
            className="w-1/2 capitalize"
            onClick={() => {
              onStepClick(0);
            }}
          >
            back to cart
          </Button>
          <Button
            type="submit"
            variant={"default"}
            className="w-1/2 capitalize"
          >
            proceed to payment
          </Button>
        </div>
      </form>
      <div className="w-1/2 h-fit bg-white py-6 px-5 border rounded-lg">
        <div className="text-[#7d879c] text-sm space-y-3">
          <div className="flex items-center justify-between">
            <p>Subtotal:</p>
            <p className="text-head font-semibold">$400.00</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Shipping:</p>
            <p className="text-head font-semibold">-</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Tax:</p>
            <p className="text-head font-semibold">-</p>
          </div>
          <div className="flex items-center justify-between">
            <p>Discount:</p>
            <p className="text-head font-semibold">-</p>
          </div>
        </div>
        <hr className="my-4" />
        <div className="space-y-3">
          <p className="text-2xl font-semibold">$400.00</p>
          <form className="space-y-4">
            <Input
              focusState={focusStates.Voucher}
              inputValue={inputValues.Voucher}
              handleFocus={handleFocus}
              handleBlur={handleBlur}
              handleChange={handleChange}
              type={"text"}
              label={"Voucher"}
              name={"voucher"}
              register={register}
            ></Input>
            <Button
              variant={"outline"}
              className="transition-all py-4 duration-300 hover:text-primary hover:border-primary w-full text-primary"
            >
              Apply Voucher
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
