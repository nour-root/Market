import DropDown from "@/Components/DropDown";
import Loader from "@/Components/shared/loader";
import GetAllProducts from "@/data/getAllProducts";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Slider from "@/Components/slider";
import Rating from "@/Components/Rating";
import type { Product } from "@/store/types";
import Card2 from "@/Components/card2";
import Item from "@/Components/Item";
export default function ProductsPage() {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[] | null>(null);
  const [sortOrder, setSortOrder] = useState("price low to high");
  const sortedProducts = products?.slice().sort((a, b) => {
    const priceA = Number(a.price);
    const priceB = Number(b.price);

    return sortOrder === "price low to high"
      ? priceA - priceB
      : priceB - priceA;
  });
  useEffect(() => {
    if (category === "clothes") {
      GetAllProducts()
        .then((data) => {
          setLoading(true);
          const items: Product[] = data.filter((x: Product) =>
            x.category.includes("clothing")
          );
          setProducts(items);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
    if (category === "electronics") {
      GetAllProducts()
        .then((data) => {
          setLoading(true);
          const items: Product[] = data.filter((x: Product) =>
            x.category.includes("electronics")
          );
          setProducts(items);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
    if (category === "jewelery") {
      GetAllProducts()
        .then((data) => {
          setLoading(true);
          const items: Product[] = data.filter((x: Product) =>
            x.category.includes("jewelery")
          );
          setProducts(items);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }
  }, [category]);
  function handleViewCard() {
    const list = document.querySelector(".products-items");
    list?.classList.add("hidden");
    document.querySelector(".products-grid")?.classList.remove("hidden");
    document
      .querySelector(".icon-1")
      ?.classList.replace("fill-dark-gray", "fill-primary");
    document.querySelector(".icon-2")?.classList.remove("text-primary");
  }
  function handleViewItem() {
    const list = document.querySelector(".products-grid");
    list?.classList.add("hidden");
    document.querySelector(".products-items")?.classList.remove("hidden");
    document
      .querySelector(".icon-1")
      ?.classList.replace("fill-primary", "fill-dark-gray");
    document.querySelector(".icon-2")?.classList.add("text-primary");
  }

  return (
    <div className="min-h-dvh py-5 px-4 max-lg:relative max-lg:z-10 bg-white text-[#2B3445]">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="flex items-center">
            <div className="sort w-full p-5">
              <DropDown onChange={setSortOrder} sortedProd={sortOrder} />
            </div>
            <div className=" text-dark-gray flex items-center space-x-4">
              <p>View:</p>
              <svg
                onClick={handleViewCard}
                className="w-5 h-5 icon-1  fill-primary cursor-pointer"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="AppsIcon"
              >
                <path d="M4 8h4V4H4zm6 12h4v-4h-4zm-6 0h4v-4H4zm0-6h4v-4H4zm6 0h4v-4h-4zm6-10v4h4V4zm-6 4h4V4h-4zm6 6h4v-4h-4zm0 6h4v-4h-4z"></path>
              </svg>
              <svg
                onClick={handleViewItem}
                className="cursor-pointer icon-2"
                height="20"
                width="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12ZM4 9q-.425 0-.713-.288T3 8V6q0-.425.288-.713T4 5h2q.425 0 .713.288T7 6v2q0 .425-.288.713T6 9H4Zm5 0q-.425 0-.713-.288T8 8V6q0-.425.288-.713T9 5h11q.425 0 .713.288T21 6v2q0 .425-.288.713T20 9H9Zm0 5q-.425 0-.713-.288T8 13v-2q0-.425.288-.713T9 10h11q.425 0 .713.288T21 11v2q0 .425-.288.713T20 14H9Zm0 5q-.425 0-.713-.288T8 18v-2q0-.425.288-.713T9 15h11q.425 0 .713.288T21 16v2q0 .425-.288.713T20 19H9Zm-5 0q-.425 0-.713-.288T3 18v-2q0-.425.288-.713T4 15h2q.425 0 .713.288T7 16v2q0 .425-.288.713T6 19H4Zm0-5q-.425 0-.713-.288T3 13v-2q0-.425.288-.713T4 10h2q.425 0 .713.288T7 11v2q0 .425-.288.713T6 14H4Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div className="flex items-start gap-6">
            <div className="w-[40%] px-3 space-y-6">
              <p className="font-medium text-sm capitalize">Categories</p>
              <hr />
              <Slider />
              <hr />
              <Rating />
            </div>
            <div className="products-grid w-auto grid grid-cols-3 gap-4">
              {sortedProducts?.map((x) => (
                <Card2 product={x} key={x.id} />
              ))}
            </div>
            <div className="products-items w-full  flex-col space-y-8 hidden">
              {sortedProducts?.map((x) => (
                <Item product={x} key={x.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
