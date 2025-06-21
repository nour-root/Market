import GetAllProductById from "@/data/getProductById";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { Product } from "@/store/types";
import GetAllProducts from "@/data/getAllProducts";
import { IoIosArrowBack } from "react-icons/io";
import Loader from "@/Components/shared/loader";
import Star from "@/Components/shared/star";
import type { cartItem } from "@/store/types";
import { cart_items } from "@/store/cart_items";
import { useAtomValue, useSetAtom } from "jotai";
export default function Product() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const { title } = useParams<{ title: string | undefined }>();
  const productTitle = title ? decodeURIComponent(title) : "";
  const arr_items = useAtomValue(cart_items);
  const setArr_items = useSetAtom(cart_items);
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
  const AddToCart = (item_id: number | undefined) => {
    const search: cartItem | undefined = arr_items.find(
      (x: cartItem) => x.id === item_id
    );
    if (search !== undefined) return;
    if (item_id) {
      const newItem: cartItem = { id: item_id, quantity: 1 };
      setArr_items((prev): cartItem[] => [...prev, newItem]);
    }
  };
  useEffect(() => {
    // ! here
    setLoading(true);
    GetAllProducts()
      .then((data) => {
        const p: Product | undefined = data.find(
          (x: Product) => x.title === productTitle
        );
        if (p?.id) {
          GetAllProductById(p.id)
            .then((p) => {
              setLoading(true);
              setProduct(p);
            })
            .catch((error) => console.error(error))
            .finally(() => {
              setLoading(false);
            });
        } else {
          setProduct(null);
        }
      })
      .catch((error) => console.error(error));
  }, [productTitle]);

  return (
    <div className="py-5 px-4 max-lg:relative max-lg:z-10 bg-backGround text-[#2B3445] flex flex-col items-center gap-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="w-full h-fit">
            <Link to={`/`}>
              <button className="">
                <IoIosArrowBack className="text-3xl" />
              </button>
            </Link>
          </div>
          <div className="grid gap-10 max-lg:grid-cols-1 grid-cols-2">
            <div className="flex flex-col space-y-10">
              <div className="border border-[#e3e9ef] rounded-[24px] h-[300px] py-5">
                <img src={product?.image} className="h-full mx-auto" alt="" />
              </div>
              <div
                className="flex justify-center items-center gap-4"
                onClick={handleClickImage}
              >
                <div className="relative transition-all duration-500 before:absolute border img-active rounded-[12px] w-fit h-fit px-5 py-5">
                  <img
                    src={product?.image}
                    className="w-[64px] h-[64px] mx-auto"
                    alt=""
                  />
                </div>
                <div className="relative transition-all duration-500 border border-[#e3e9ef] rounded-[12px] w-fit h-fit px-5 py-5 before:absolute img-notActive">
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
              <div>
                <p className="text-primary font-semibold text-2xl">
                  ${product?.price}
                </p>
                <p className="text-sm">Stock Available</p>
              </div>
              <button
                onClick={() => AddToCart(product?.id)}
                className="text-sm text-white capitalize bg-primary px-7 py-2 rounded-[8px]"
              >
                add to cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
