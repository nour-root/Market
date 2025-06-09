import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";

import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useAtomValue } from "jotai";
import { DataAtom } from "../atom/data";
import Card from "./card";
export default function FlashDeals() {
  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const products = useAtomValue(DataAtom);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
    // new Swiper(".swiper", {
    //   loop: true,
    //   slidesPerView: 4,
    //   spaceBetween: 20,
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    //   },
    //   breakpoints: {
    //     0: {
    //       slidesPerView: 1,
    //     },
    //     640: {
    //       slidesPerView: 2,
    //     },
    //     768: {
    //       slidesPerView: 3,
    //     },
    //     1024: {
    //       slidesPerView: 4,
    //     },
    //   },
    // });
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    const handleScroll = () => {
      if (!isLargeScreen) {
        setIsScrolled(window.scrollY > 100);
      }
    };
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", updateScreenSize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLargeScreen]);
  const showButtons = isLargeScreen ? hovered : isScrolled;
  return (
    <section className="p-10 text-black flex flex-col gap-8">
      <div className="flex items-center space-x-2 w-full">
        <svg
          className="text-primary w-6 h-6"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="LightIcon"
          fill="currentColor"
        >
          <path d="M19.0765 9.48063H12.1242L15.5905 0L5 14.5194H11.9522L8.48592 24L19.0765 9.48063Z"></path>
        </svg>
        <h1 className="text-[25px] text-head font-semibold">Flash Deals</h1>
      </div>
      <div
        className="relative w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Swiper
          className="w-full h-full"
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation === "object"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={20}
          loop={true}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <Card product={p} key={p.id} />
            </SwiperSlide>
          ))}
        </Swiper>
        <motion.button
          ref={prevRef}
          initial={{ opacity: 0, borderRadius: 0, left: "-2px" }}
          animate={{
            opacity: showButtons ? 1 : 0,
            borderRadius: showButtons ? "8px" : "0px",
            left: showButtons ? "10px" : "0px",
          }}
          transition={{ duration: 0.2 }}
          className="absolute after:content-['']  top-1/2 left-0  -translate-y-1/2 z-10 bg-dark-blue !w-9 !h-9 p-2 rounded-lg flex items-center justify-center"
        >
          <MdKeyboardDoubleArrowLeft className="text-white" />
        </motion.button>
        <motion.button
          ref={nextRef}
          initial={{ opacity: 0, borderRadius: 0, right: "-2px" }}
          animate={{
            opacity: showButtons ? 1 : 0,
            borderRadius: showButtons ? "8px" : 0,
            right: showButtons ? "10px" : "0px",
          }}
          transition={{ duration: 0.2 }}
          className="absolute after:content-[''] top-1/2 right-0 -translate-y-1/2 z-10 bg-dark-blue !w-9 !h-9 p-2 rounded-lg flex items-center justify-center"
        >
          <MdKeyboardDoubleArrowRight className="text-white" />
        </motion.button>
      </div>
    </section>
  );
}
