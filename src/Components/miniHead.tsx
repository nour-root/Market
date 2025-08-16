import { motion, AnimatePresence } from "framer-motion";
import { LuMinus } from "react-icons/lu";
import { FiPlus } from "react-icons/fi";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useAtomValue, useSetAtom } from "jotai";
import { dropdownAtom } from "@/store/dropDownAtom";
export default function MiniHead() {
  const state = useAtomValue(dropdownAtom);
  const setState = useSetAtom(dropdownAtom);
  return (
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
            transition={{ duration: 0.2 }}
            className={`menu transform origin-top w-full flex items-center lg:h-auto lg:opacity-100 lg:hidden`}
          >
            <FaTwitter className="ml-3" />
            <ImFacebook2 className="ml-3" />
            <FaInstagram className="ml-3" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className={`menu w-fit flex items-center max-lg:hidden`}>
        <FaTwitter className="ml-3" />
        <ImFacebook2 className="ml-3" />
        <FaInstagram className="ml-3" />
      </div>
    </div>
  );
}
