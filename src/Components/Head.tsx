import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
} from "./ui/dropdown-menu";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function Head() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);

  const handleClickShadow = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipple({ x, y });

    setTimeout(() => setRipple(null), 0);
  };
  return (
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
                  <DropdownMenuSubTrigger className="capitalize flex items-center space-x-3 focus:text-primary data-[state=open]:text-primary data-[state=open]:bg-head/3 focus:bg-head/3">
                    <svg
                      className="w-5 h-5"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="ShirtLineIcon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-width="1"
                        d="M5.777 10.296v7.969c0 1.323 0 1.985.449 2.547c.448.562.985.66 2.058.858c.992.182 2.249.33 3.716.33s2.724-.148 3.716-.33c1.073-.198 1.61-.296 2.059-.858c.448-.562.448-1.224.448-2.547v-7.97c0-.683 0-1.025.132-1.326c.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118c.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-1.202 1.897-3.852 1.897-5.054 0a1.6 1.6 0 0 0-.948-.703l-.49-.129a2.05 2.05 0 0 0-1.568.205c-.51.298-1.176.712-1.648 1.09a8 8 0 0 0-.418.362C3.464 4.594 2.996 5.027 3 5.716s.532 1.166 1.588 2.118l.186.167c.493.445.74.668.871.968c.132.3.132.643.132 1.327Z"
                      ></path>
                    </svg>
                    <p>fashion</p>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-3 text-head space-y-3">
                      <div className="flex flex-col items-start pl-3 w-full">
                        <h6>Man</h6>
                        <DropdownMenuItem asChild className="w-full">
                          <Link to="products/category/clothes?gender=men">
                            clothes
                          </Link>
                        </DropdownMenuItem>
                      </div>
                      <div className="flex flex-col items-start pl-3 w-full">
                        <h6>Woman</h6>
                        <DropdownMenuItem asChild className="w-full">
                          <Link to="products/category/clothes?gender=women">
                            clothes
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild className="w-full">
                          <Link to="products/category/jewelery">jewelery</Link>
                        </DropdownMenuItem>
                      </div>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger className="capitalize flex items-center space-x-3 focus:text-primary data-[state=open]:text-primary data-[state=open]:bg-head/3 focus:bg-head/3">
                    <svg
                      className="w-5 h-5"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="LaptopMobileIcon"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" stroke="currentColor" stroke-width="1">
                        <path
                          stroke-linecap="round"
                          d="M22 10c0-3.771 0-5.657-1.172-6.828S17.772 2 14 2S8.343 2 7.172 3.172C6.229 4.115 6.045 5.52 6.009 8M22 14c0 3.771 0 5.657-1.172 6.828S17.772 22 14 22h-2"
                        ></path>
                        <path d="M2 14.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C3.393 11 4.096 11 5.5 11s2.107 0 2.611.337a2 2 0 0 1 .552.552C9 12.393 9 13.096 9 14.5v4c0 1.404 0 2.107-.337 2.611a2 2 0 0 1-.552.552C7.607 22 6.904 22 5.5 22s-2.107 0-2.611-.337a2 2 0 0 1-.552-.552C2 20.607 2 19.904 2 18.5z"></path>
                        <path stroke-linecap="round" d="M17 19h-5"></path>
                      </g>
                    </svg>
                    <p>electronics</p>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-3 text-head">
                      <DropdownMenuItem>
                        <Link to={`products/category/electronics`}>
                          mobiles
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to={`products/category/electronics`}>ipads</Link>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </motion.div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
