import { FiPlus } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { LuMinus } from "react-icons/lu";
import { Button } from "./ui/button";
import { useAtomValue, useSetAtom } from "jotai";
import { dropdownAtom } from "../atom/dropDownAtom.js";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import FieldForm from "./fieldForm.js";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../Components/ui/dropdown-menu.js";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu.js";
import { useState } from "react";
export default function Header() {
  const state = useAtomValue(dropdownAtom);
  const setState = useSetAtom(dropdownAtom);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const button = e.currentTarget;
    console.log(button);
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${
      e.clientX - button.getBoundingClientRect().left - radius
    }px`;
    circle.style.top = `${
      e.clientY - button.getBoundingClientRect().top - radius
    }px`;
    circle.className = "ripple"; //

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };
  const handleClickShadow = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });

    setTimeout(() => setRipple(null), 0);
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="max-lg:border-0 border-b border-head/10 bg-white">
      <div className="bg-head flex justify-between flex-wrap px-6 py-1 gap-2">
        <div className="flex w-full justify-between items-center lg:w-fit">
          <div className="flex items-center space-x-2">
            <h1 className="bg-primary px-3 py-[2px] rounded-xl uppercase text-[13px]">
              Hot
            </h1>
            <p className="text-xs">Free Express Shipping</p>
          </div>
          <div className="lg:hidden ">
            {state ? (
              <LuMinus className="text-xl" onClick={() => setState(false)} />
            ) : (
              <FiPlus className="text-xl" onClick={() => setState(true)} />
            )}
          </div>
        </div>
        <AnimatePresence>
          {state && (
            <motion.div
              initial={{ scaleY: 0, height: 0, opacity: 0 }}
              animate={{ scaleY: 1, height: "auto", opacity: 1 }}
              exit={{ scaleY: 0, height: 0, opacity: 0 }}
              transition={{ duration: 0.11 }}
              className={`menu transform origin-top w-full flex items-center lg:h-auto lg:opacity-100  lg:hidden`}
            >
              <DropdownMenu>
                <DropdownMenuTrigger
                  asChild
                  className="bg-head h-fit hover:bg-head hover:text-white focus-visible:ring-0"
                >
                  <Button variant={"ghost"}>English</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                  <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="English">
                      English
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Arabic">
                      Arabic
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
                <MdKeyboardArrowDown className="-ml-3" />
              </DropdownMenu>
              <FaTwitter className="ml-3" />
              <ImFacebook2 className="ml-3" />
              <FaInstagram className="ml-3" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={`menu w-fit flex items-center max-lg:hidden`}>
          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-head h-fit hover:bg-head hover:text-white focus-visible:ring-0"
            >
              <Button variant={"ghost"}>English</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value="English">
                  English
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Arabic">
                  Arabic
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
            <MdKeyboardArrowDown className="-ml-3" />
          </DropdownMenu>
          <FaTwitter className="ml-3" />
          <ImFacebook2 className="ml-3" />
          <FaInstagram className="ml-3" />
        </div>
      </div>
      <div className="px-6 py-4 flex items-center justify-between">
        <LuMenu className="text-icons-light-gray text-2xl lg:hidden" />
        <img src="/logo2.svg" className="max-lg:hidden" alt="" />
        <img
          src="/src/assets/bazaar-black-sm.svg"
          className="lg:hidden -mr-10"
          alt=""
        />
        <FieldForm />
        <div className="flex gap-3 items-center">
          <div
            onClick={(e) => handleClick(e)}
            className="relative overflow-hidden inline-flex items-center justify-center w-10 h-10 rounded-full  cursor-pointer"
          >
            <IoIosSearch className="search text-icons-light-gray text-2xl lg:hidden relative overflow-hidden" />
          </div>
          <MdOutlineShoppingBag className="text-icons-light-gray text-2xl" />
        </div>
      </div>
      <div className="flex justify-between max-lg:hidden px-6 lg:py-4">
        <div className="w-[278px]">
          <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenuTrigger
              onPointerDown={(e) => {
                handleClickShadow(e);
                setIsOpen(true);
              }}
              asChild
              className="focus-visible:outline-0"
            >
              <button
                type="button"
                className="relative overflow-hidden flex items-center w-full bg-light-gray px-2 py-[5px] rounded-xl"
              >
                <div className="flex w-full items-center space-x-2">
                  <svg
                    className="fill-primary"
                    focusable="false"
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
                  </svg>
                  <h6 className="text-head text-sm">Categories</h6>
                </div>
                <IoIosArrowForward
                  className={`text-lg text-[#7d879c] transform transition-transform duration-200 ${
                    isOpen ? "rotate-90" : "rotate-0"
                  }`}
                />
                <AnimatePresence>
                  {ripple && (
                    <motion.span
                      className="absolute -left-3 top-0 h-10 bg-head/40 opacity-50 rounded-full"
                      initial={{ scale: 0, opacity: 0.5 }}
                      animate={{ scale: 6, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 100,
                        height: 100,
                        transform: "translate(-50%, -50%)",
                        pointerEvents: "none",
                      }}
                    />
                  )}
                </AnimatePresence>
              </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent asChild align="start">
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="origin-top w-[278px] rounded-xl bg-popover text-head shadow-md overflow-hidden transform"
              >
                <DropdownMenuGroup className="space-y-2">
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="capitalize focus:text-primary data-[state=open]:text-primary data-[state=open]:bg-head/3 focus:bg-head/3">
                      fashion
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-3 text-head">
                        <DropdownMenuItem>clothes</DropdownMenuItem>
                        <DropdownMenuItem>shoes</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger className="capitalize focus:text-primary data-[state=open]:text-primary data-[state=open]:bg-head/3 focus:bg-head/3">
                      electronics
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="ml-3 text-head">
                        <DropdownMenuItem>mobiles</DropdownMenuItem>
                        <DropdownMenuItem>ipads</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </DropdownMenuGroup>
              </motion.div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
