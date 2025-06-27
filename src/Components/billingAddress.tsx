import Input from "./shared/input";
import { useState } from "react";
import InputCountry from "./inputCountry";
import type { BillingFormFields } from "@/store/types";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
interface BillingAddressProps {
  register: UseFormRegister<BillingFormFields>;
  formState: FieldErrors<BillingFormFields>;
}
export default function BillingAddress({ register }: BillingAddressProps) {
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
    <div className="py-6 px-4 space-y-4 bg-white border rounded-lg">
      <h3 className="capitalize">Billing Address</h3>
      <div className="flex items-start gap-3">
        <Checkbox
          id="terms-2"
          onCheckedChange={() =>
            document.querySelector(".Billing")?.classList.toggle("hidden")
          }
        />
        <div className="grid gap-2">
          <Label htmlFor="terms-2">Same as shipping address</Label>
        </div>
      </div>
      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-5 Billing">
        <Input<BillingFormFields>
          focusState={focusStates.fullName}
          inputValue={inputValues.fullName}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"fullName"}
          name={"Full Name"}
          register={register}
        />
        <Input<BillingFormFields>
          focusState={focusStates.phoneNumber}
          inputValue={inputValues.phoneNumber}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"phoneNumber"}
          name={"Phone number"}
          register={register}
        />
        <Input<BillingFormFields>
          focusState={focusStates.email}
          inputValue={inputValues.email}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"email"}
          label={"email"}
          name={"Email Address"}
          register={register}
        />
        <Input<BillingFormFields>
          focusState={focusStates.company}
          inputValue={inputValues.company}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"company"}
          name={"company"}
          register={register}
        />
        <Input<BillingFormFields>
          focusState={focusStates.address1}
          inputValue={inputValues.address1}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"address1"}
          name={"address 1"}
          register={register}
        />
        <Input<BillingFormFields>
          focusState={focusStates.address2}
          inputValue={inputValues.address2}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"address2"}
          name={"address 2"}
          register={register}
        />
        <InputCountry />
        <Input<BillingFormFields>
          focusState={focusStates.zipCode}
          inputValue={inputValues.zipCode}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"zipCode"}
          name={"zip Code"}
          register={register}
        />
      </div>
    </div>
  );
}
