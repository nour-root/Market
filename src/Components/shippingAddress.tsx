import { useState } from "react";
import InputCountry from "./inputCountry";
import Input from "./shared/input";
import type { UseFormRegister, FieldErrors } from "react-hook-form";
import type { ShippingFormFields } from "@/store/types";
interface ShippingAddressProps {
  register: UseFormRegister<ShippingFormFields>;
  formState: FieldErrors<ShippingFormFields>;
}

export default function ShippingAddress({
  register,
  formState,
}: ShippingAddressProps) {
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
      <h3 className="capitalize">Shipping Address</h3>
      <div className="grid max-lg:grid-cols-1 grid-cols-2 gap-5">
        <Input
          focusState={focusStates.fullName}
          inputValue={inputValues.fullName}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"fullName"}
          name="Full Name"
          register={register}
          error={formState.fullName?.message}
        ></Input>
        <Input
          focusState={focusStates.phoneNumber}
          inputValue={inputValues.phoneNumber}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label="phoneNumber"
          name="phone Number"
          register={register}
          error={formState.phoneNumber?.message}
        ></Input>
        <Input
          focusState={focusStates.email}
          inputValue={inputValues.email}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"email"}
          label={"email"}
          name={"email address"}
          register={register}
          error={formState.email?.message}
        ></Input>
        <Input
          focusState={focusStates.company}
          inputValue={inputValues.company}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"company"}
          name={"company"}
          register={register}
        ></Input>
        <Input
          focusState={focusStates.address1}
          inputValue={inputValues.address1}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"address1"}
          name={"address 1"}
          register={register}
          error={formState.address1?.message}
        ></Input>
        <Input
          focusState={focusStates.address2}
          inputValue={inputValues.address2}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"address2"}
          name={"address 2"}
          register={register}
        ></Input>
        <InputCountry />
        <Input
          focusState={focusStates.zipCode}
          inputValue={inputValues.zipCode}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
          handleChange={handleChange}
          type={"text"}
          label={"zipCode"}
          name={"zip code"}
          register={register}
          error={formState.zipCode?.message}
        ></Input>
      </div>
    </div>
  );
}
