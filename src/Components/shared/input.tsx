import type { InputProps } from "@/store/types";
import type { FieldValues } from "react-hook-form";
export default function Input<T extends FieldValues>({
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
}: InputProps<T>) {
  const optionalFields = ["company", "address2", "Voucher"];
  const validationRules = !optionalFields.includes(label)
    ? { required: `${name} is required` }
    : { require: false };
  return (
    <div className="space-y-2 flex flex-col justify-center w-full">
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
          {label}
        </label>
        {register && (
          <input
            {...register(label, validationRules)}
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
