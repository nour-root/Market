import { useEffect, useState } from "react";
import FlashDeals from "./Components/flashDeals";
import Header from "./Components/header";
import LandingPage from "./Components/landing";
import GetAllProducts from "./data/getAllProducts.js";
import { DataAtom } from "./atom/data.js";
import { useAtomValue, useSetAtom } from "jotai";
import { AiOutlineLoading } from "react-icons/ai";

export default function Home() {
  const setProduct = useSetAtom(DataAtom);
  const products = useAtomValue(DataAtom);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetAllProducts()
      .then((p: object[]) => {
        setLoading(true);
        if (products.length === 0) {
          setProduct(p);
        } else {
          setProduct([]);
        }
      })
      .catch((error: unknown) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, [DataAtom]);

  return (
    <>
      {loading ? (
        <AiOutlineLoading className="text-primary relative left-1/2 text-5xl transform -translate-x-1/2 animate-spin  top-80" />
      ) : (
        <>
          <Header />
          <main className="bg-backGround">
            <LandingPage />
            <FlashDeals />
          </main>
        </>
      )}
    </>
  );
}
