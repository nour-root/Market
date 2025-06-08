import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { IoIosSearch } from "react-icons/io";
export default function FieldForm() {
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });

    setTimeout(() => setRipple(null), 600);
  };

  return (
    <form
      className={`flex pointer-events-auto justify-between items-center bg-[#f3f5f9] rounded-lg w-[670px] max-lg:hidden border transition-colors duration-300
        hover:border-head`}
    >
      <button className="px-4 border-r border-head/20 mr-3">
        <IoIosSearch className="text-dark-gray text-2xl" />
      </button>
      <input
        type="text"
        placeholder="Searching for.."
        className="text-gray-600 py-3 bg-transparent w-full focus-visible:outline-0 border-r border-r-head/20"
      />
      <div className="relative w-[200px] h-12 overflow-hidden">
        <AnimatePresence>
          {ripple && (
            <motion.span
              className="absolute -left-3 top-0 h-full bg-head/40 opacity-50 rounded-full"
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                transformOrigin: `${ripple.x}px ${ripple.y}px`,
                width: "100%",
              }}
            />
          )}
        </AnimatePresence>
        <Select>
          <SelectTrigger
            onClick={handleClick}
            className="btn w-full data-[size=default]:h-full ring-0 shadow-none rounded-l-none  rounded-r text-dark-gray bg-transparent focus-visible:ring-0 not-focus-visible:border-none  focus-visible:border-0"
          >
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent className="mt-1 w-[190px]  text-head">
            <SelectGroup>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="apple">Clothes</SelectItem>
              <SelectItem value="banana">Electronics</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </form>
  );
}
