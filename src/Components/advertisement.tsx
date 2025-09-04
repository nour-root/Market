import { Button } from "./ui/button";

export default function Advertisement() {
  return (
    <div className="p-10 text-black grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="relative z-10 overflow-hidden rounded-xl group">
        <img
          src="/promo-1.webp"
          className="object-cover w-full transform transition-all duration-500 group-hover:scale-110"
          alt=""
        />
        <div className="absolute z-20 top-0 left-0 h-full p-5 md:p-8 flex flex-col justify-between">
          <div className="text-head space-y-1 md:space-y-2 md:w-3/4">
            <h2 className="text-2xl font-bold capitalize">summer collection</h2>
            <p className="text-sm md:text-lg">
              Save up to 50% on summer essentials including swimwear, dresses,
              sandals, and accessories
            </p>
          </div>
          <Button className="font-medium text-[16px] py-5 px-7 rounded-xl">
            shop now
          </Button>
        </div>
      </div>
      <div className="relative z-10 overflow-hidden rounded-xl group">
        <img
          src="/promo-2.webp"
          className="w-full transform transition-all duration-500 group-hover:scale-110"
          alt=""
        />
        <div className="absolute z-20 top-0 left-0 h-full p-5 md:p-8 flex flex-col justify-between">
          <div className="text-head space-y-1 md:space-y-2 md:w-3/4">
            <h2 className="text-2xl font-bold capitalize">Spring Essentials</h2>
            <p className="text-sm md:text-lg">
              Save up to 50% on spring essentials including jackets, rain boots,
              and seasonal accessories
            </p>
          </div>
          <Button className="font-medium text-[16px] py-5 px-7 rounded-xl">
            shop now
          </Button>
        </div>
      </div>
    </div>
  );
}
