import GetAllProductById from "@/data/getAllProductById";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import type { Product } from "@/store/types";
import GetAllProducts from "@/data/getAllProducts";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
export default function Product() {
  const [product, setProduct] = useState<Product | null>(null);
  const { title } = useParams<{ title: string | undefined }>();
  const productTitle = title ? decodeURIComponent(title) : "";

  function handleClickImage(e: React.MouseEvent<HTMLDivElement>) {
    const image = e.target as HTMLElement;
    const div = e.currentTarget.children as HTMLCollectionOf<HTMLElement>;
    if (image.classList.contains("img-notActive")) {
      Array.from(div).forEach((img) => {
        if (img.classList.contains("img-active")) {
          img.classList.remove("img-active");
          img.classList.add("img-notActive");
        }
      });

      image.classList.remove("img-notActive");
      image.classList.add("img-active");
    }
  }
  useEffect(() => {
    GetAllProducts()
      .then((data) => {
        const p: Product | undefined = data.find(
          (x: Product) => x.title === productTitle
        );
        if (p?.id) {
          GetAllProductById(p.id)
            .then((p) => {
              NProgress.start();
              setProduct(p);
            })
            .catch((error) => console.error(error))
            .finally(() => NProgress.done());
        } else {
          setProduct(null);
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="py-10 px-4 max-lg:relative max-lg:-z-10 bg-backGround text-[#2B3445] grid gap-10 max-lg:grid-cols-1 grid-cols-2">
      <div className="flex flex-col space-y-10">
        <div className="border border-[#e3e9ef] rounded-[24px] h-[300px] py-5">
          <img src={product?.image} className="h-full mx-auto" alt="" />
        </div>
        <div
          className="flex justify-center items-center gap-4"
          onClick={handleClickImage}
        >
          <div className="relative before:absolute border img-active rounded-[12px] w-fit h-fit px-5 py-5">
            <img
              src={product?.image}
              className="w-[64px] h-[64px] mx-auto"
              alt=""
            />
          </div>
          <div className="relative border border-[#e3e9ef] rounded-[12px] w-fit h-fit px-5 py-5 before:absolute img-notActive">
            <img
              src={product?.image}
              className="w-[64px] h-[64px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <h1 className="text-[#2B3445] font-semibold text-3xl">
          {product?.title}
        </h1>
        <div className="flex items-center gap-2">
          <p>Rated:</p>
          {product && (
            <div className="flex items-center gap-1">
              <Star key={product.id} p={product} />
            </div>
          )}
          <span>({product?.rating.rate})</span>
        </div>
        <p>{product?.description}</p>
        <div className="space-y-3">
          <p>Option</p>
          <div className="flex items-center gap-3 text-sm">
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              option 1
            </button>
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              option 1
            </button>
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              option 1
            </button>
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              option 1
            </button>
          </div>
        </div>
        <div className="space-y-3">
          <p>Type</p>
          <div className="flex items-center gap-3 text-sm">
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              type 1
            </button>
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              type 2
            </button>
            <button className="border border-[#e3e9ef] hover:bg-[#4b566b0a] px-3 py-1 rounded-lg">
              type 3
            </button>
          </div>
        </div>
        <div>
          <p className="text-primary font-semibold text-2xl">
            ${product?.price}
          </p>
          <p className="text-sm">Stock Available</p>
        </div>
      </div>
    </div>
  );
}
const Star = ({ p }: { p: Product }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const diff = p.rating.rate - i + 1;

    let fill = 0;
    if (diff >= 1) fill = 100;
    else if (diff > 0) fill = Math.round(diff * 100);
    else fill = 0;
    const id = Math.random().toString(36).substring(2, 9);
    stars.push(
      <svg viewBox="0 0 24 24" width="20" height="20" className="shrink-0">
        <defs>
          <linearGradient id={`grad-${id}`}>
            <stop offset={`${fill}%`} stopColor="#facc15" />
            <stop offset={`${fill}%`} stopColor="#e5e7eb" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#grad-${id})`}
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    );
  }
  return stars;
};
