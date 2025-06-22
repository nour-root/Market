import type { UseFormRegister } from "react-hook-form";
import type { ShippingFormFields } from "@/store/types";
interface InputProps {
  handleFocus: (field: string) => void;
  handleBlur: (field: string) => void;
  handleChange: (field: string, value: string) => void;
  focusState: boolean;
  inputValue: string;
  label: keyof ShippingFormFields;
  name: string;
  type?: string;
  register?: UseFormRegister<ShippingFormFields>;
  error?: string;
}
export default function Input({
  handleFocus,
  handleBlur,
  handleChange,
  focusState,
  inputValue,
  type,
  label,
  name,
  register,
  error,
}: InputProps) {
  const optionalFields = ["company", "address2", "Voucher"];
  const validationRules = !optionalFields.includes(label)
    ? { required: `${name} is required` }
    : { require: false };
  return (
    <div className="space-y-2 flex flex-col justify-center">
      <div
        className={`w-full flex items-center px-6 relative group space-y-6 rounded-lg border hover:border-head focus-within:outline focus-within:border-0 focus-within:outline-primary ${
          error ? "outline outline-primary border-0" : "outline-0 border"
        }`}
        onFocus={() => handleFocus(label)}
        onBlur={() => {
          setTimeout(() => handleBlur(label), 0);
        }}
      >
        <label
          className={`absolute z-10 transition-all duration-200 ${
            error ? "text-primary" : "text-head"
          }  w-auto text-center h-fit left-5 text-head capitalize bg-white text-sm ${
            focusState || inputValue
              ? "-top-2 left-0 text-xs text-primary px-1"
              : "top-3 left-6"
          }`}
        >
          {name}
        </label>
        {register && (
          <input
            {...register(`${label}`, validationRules)}
            type={type}
            value={inputValue || ""}
            onChange={(e) => handleChange(label, e.target.value)}
            placeholder={name}
            className="relative capitalize py-3 top-0 outline-0 w-full h-full px-3 text-sm placeholder:text-white group-focus-within:placeholder:text-gray-400"
            autoComplete="off"
          />
        )}
      </div>
      {error && <p className="text-primary text-sm">{error}</p>}
    </div>
  );
}
