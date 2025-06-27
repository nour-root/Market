import Input from "../shared/input";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { PayWithCreditCard } from "@/store/types";
import { useState } from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
export default function PayWithCreditCard() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PayWithCreditCard>();
  const onSubmit: SubmitHandler<PayWithCreditCard> = () =>
    navigate("/", { state: { clearCart: true } });
  const [focusStates, setFocusStates] = useState({
    cardNumber: false,
    expoDate: false,
  });
  const [inputValues, setInputValues] = useState({
    cardNumber: "",
    expoDate: "",
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
    <form
      method="post"
      className="grid grid-cols-2 gap-4 p-10 w-full max-sm:grid-cols-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input<PayWithCreditCard>
        focusState={focusStates.cardNumber}
        inputValue={inputValues.cardNumber}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleChange={handleChange}
        type={"text"}
        label={"cardNumber"}
        name="card number"
        register={register}
        error={errors.cardNumber?.message}
      />
      <Input<PayWithCreditCard>
        focusState={focusStates.expoDate}
        inputValue={inputValues.expoDate}
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        handleChange={handleChange}
        type={"text"}
        label={"expoDate"}
        name="MM/YY"
        register={register}
        error={errors.expoDate?.message}
      />
      <Button variant={"outline"}>Submit</Button>
    </form>
  );
}
