import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { useSwiper } from "swiper/react";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TopCategories() {
  const [hovered, setHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  const swiper = useSwiper();
  useEffect(() => {
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
  });
  const showButtons = isLargeScreen ? hovered : isScrolled;
  return (
    <section className="p-10 text-black flex flex-col gap-8">
      <div className="flex items-center space-x-2 w-full">
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
        <h1 className="text-[25px] text-head font-semibold capitalize">
          top categories
        </h1>
      </div>

      <div
        className="relative w-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Swiper
          className="w-full"
          modules={[Navigation]}
          navigation={{
            prevEl: ".btn-prev-2",
            nextEl: ".btn-next-2",
          }}
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
        >
          <SwiperSlide>
            <div className="swiper-slide overflow-hidden rounded-[12px] p-4 border border-[#e3e9ef]">
              <img
                src="/egor-myznik-5iQrhv2iT0c-unsplash (1).jpg"
                className="w-full h-[120px] rounded-[12px]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide overflow-hidden rounded-[12px] p-4 border border-[#e3e9ef]">
              <img
                src="/quaritsch-photography-m2zuB8DqwyM-unsplash.jpg"
                className="w-full h-[120px] rounded-[12px]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide overflow-hidden rounded-[12px] p-4 border border-[#e3e9ef]">
              <img
                src="/sheilabox-STx_5wSQTjg-unsplash.jpg"
                className="w-full h-[120px] rounded-[12px]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide overflow-hidden rounded-[12px] p-4 border border-[#e3e9ef]">
              <img
                src="/egor-myznik-5iQrhv2iT0c-unsplash (1).jpg"
                className="w-full h-[120px] rounded-[12px]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide overflow-hidden rounded-[12px] p-4 border border-[#e3e9ef]">
              <img
                src="/quaritsch-photography-m2zuB8DqwyM-unsplash.jpg"
                className="w-full h-[120px] rounded-[12px]"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide overflow-hidden rounded-[12px] p-4 border border-[#e3e9ef]">
              <img
                src="/sheilabox-STx_5wSQTjg-unsplash.jpg"
                className="w-full h-[120px] rounded-[12px]"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <motion.button
          // ref={prevRef}
          onClick={() => swiper.slidePrev()}
          initial={{ opacity: 0, borderRadius: 0, left: "-2px" }}
          animate={{
            opacity: showButtons ? 1 : 0,
            borderRadius: showButtons ? "8px" : "0px",
            left: showButtons ? "10px" : "0px",
          }}
          transition={{ duration: 0.2 }}
          className="btn-prev-2 absolute after:content-['']  top-1/2 left-0  -translate-y-1/2 z-10 bg-dark-blue !w-9 !h-9 p-2 rounded-lg flex items-center justify-center"
        >
          <MdKeyboardDoubleArrowLeft className="text-white" />
        </motion.button>
        <motion.button
          // ref={nextRef}
          onClick={() => swiper.slideNext()}
          initial={{ opacity: 0, borderRadius: 0, right: "-2px" }}
          animate={{
            opacity: showButtons ? 1 : 0,
            borderRadius: showButtons ? "8px" : 0,
            right: showButtons ? "10px" : "0px",
          }}
          transition={{ duration: 0.2 }}
          className="btn-next-2 absolute after:content-[''] top-1/2 right-0 -translate-y-1/2 z-10 bg-dark-blue !w-9 !h-9 p-2 rounded-lg flex items-center justify-center"
        >
          <MdKeyboardDoubleArrowRight className="text-white" />
        </motion.button>
      </div>
    </section>
  );
}
