import { useForm, type SubmitHandler } from "react-hook-form";
import Input from "../shared/input";
import type { PayWithPaypal } from "@/store/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
export default function PayWithPayPal() {
  const navigate = useNavigate();
  const [focusStates, setFocusStates] = useState({
    payPalEmail: false,
  });
  const [inputValues, setInputValues] = useState({
    payPalEmail: "",
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PayWithPaypal>();
  const onSubmit: SubmitHandler<PayWithPaypal> = () => {
    navigate("/", { state: { clearCart: true } });
  };
  return (
    <form
      method="post"
      className="w-full p-10 flex items-center justify-between gap-4 max-sm:flex-wrap"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        focusState={focusStates.payPalEmail}
        inputValue={inputValues.payPalEmail}
        name="Paypal email"
        label="payPalEmail"
        register={register}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleChange={handleChange}
        error={errors.payPalEmail?.message}
      />
      <Button variant={"outline"} type="submit">
        Submit
      </Button>
    </form>
  );
}
