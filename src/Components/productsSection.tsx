import { useAtomValue } from "jotai";
import { DataAtom } from "@/store/data";
import Card from "./card";
export default function ProductsSection() {
  const products = useAtomValue(DataAtom);
  return (
    <div className="p-10 text-black ">
      <div className="space-y-4 w-full">
        <h1 className="text-[32px] text-head font-bold capitalize">
          just for you
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((item) => (
            <Card product={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
