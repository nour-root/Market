import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
export default function LandingPage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <section className="text-head max-lg:py-10 py-5 px-4 bg-white">
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide space-y-7 w-full lg:flex lg:gap-10 lg:items-center">
            <div className="space-y-10 lg:w-1/2">
              <h1 className="text-head text-3xl lg:leading-15 font-bold lg:text-5xl lg:w-[550px]">
                50% Off For Your First Shopping
              </h1>
              <p className="text-sm w-[85%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit corporis accusantium dicta aliquid.
              </p>
              <Button className="px-10 py-[22px] text-[16px] font-semibold rounded-lg">
                Shop now
              </Button>
            </div>
            <img className="lg:w-1/3" src="/nike-black.png" alt="" />
          </div>
          <div className="embla__slide space-y-7 w-full lg:flex lg:gap-10 lg:items-center">
            <div className="space-y-10 lg:w-1/2">
              <h1 className="text-head text-3xl font-bold lg:text-5xl lg:w-[550px]">
                50% Off For Your First Shopping
              </h1>
              <p className="text-sm w-[85%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit corporis accusantium dicta aliquid.
              </p>
              <Button className="px-10 py-[22px] text-[16px] font-semibold rounded-lg">
                Shop now
              </Button>
            </div>
            <img className="lg:w-1/3" src="/nike-black.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-4 h-2 rounded-full transform transition-colors duration-300 ${
              index === selectedIndex
                ? "bg-primary scale-x-150"
                : "bg-icons-light-gray/30 scale-x-100"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
