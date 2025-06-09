import { FaPlus } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
  };
};
export default function Card({ product }: { product: Product }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const diff = product.rating.rate - i + 1;

    let fill = 0;
    if (diff >= 1) fill = 100;
    else if (diff > 0) fill = Math.round(diff * 100);
    else fill = 0;

    stars.push(<Star key={i} fillPercentage={fill} />);
  }
  return (
    <div className="swiper-slide h-[375px] cursor-pointer rounded-lg border border-head/5 bg-white">
      <div className="overflow-hidden flex flex-col justify-between">
        <div className="relative w-full h-[200px] py-3 group flex justify-center">
          <div className="bg-primary absolute w-fit h-fit text-xs text-white py-1 px-2 top-4 left-3 rounded-lg">
            25% off
          </div>
          <div className="text-icons-light-gray/60 transition-opacity duration-400 group-hover:opacity-100 opacity-0 text-xl absolute top-4 right-5 space-y-1">
            <div className="p-2 hover:bg-title-p/5 rounded-xl">
              <IoEye />
            </div>
            <div className="p-2 hover:bg-title-p/5 rounded-xl">
              <MdFavoriteBorder />
            </div>
          </div>
          <img
            src={product.image}
            className="lg:w-[200px] lg:h-full md:w-1/2 md:h-[80%]  max-sm:w-auto max-sm:h-full transition-transform duration-400 transform group-hover:scale-80"
            alt=""
          />
        </div>
        <div className="border-t h-full border-head/20 py-6 px-4 flex flex-col gap-2">
          <p className="text-sm text-title-p text-ellipsis overflow-hidden text-nowrap">
            {product.title}
          </p>
          <div className="flex items-center gap-2 text-title-p">{stars}</div>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <p className="text-primary text-sm font-semibold">
                {`$` + product.price}
              </p>
              <del className="text-icons-light-gray text-xs font-semibold">
                ${Math.floor(product.price - 0.25)}
              </del>
            </div>
            <button className="border-[.5px] border-primary/50 text-primary rounded-lg p-[5px] transition-all duration-200 hover:outline hover:bg-primary/5 cursor-pointer">
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
const Star = ({ fillPercentage }: { fillPercentage: number }) => {
  const id = Math.random().toString(36).substring(2, 9);
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
      <defs>
        <linearGradient id={`grad-${id}`}>
          <stop offset={`${fillPercentage}%`} stopColor="#facc15" />
          <stop offset={`${fillPercentage}%`} stopColor="#e5e7eb" />
        </linearGradient>
      </defs>
      <path
        fill={`url(#grad-${id})`}
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      />
    </svg>
  );
};
