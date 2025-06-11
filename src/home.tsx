import { useEffect, useState } from "react";
import FlashDeals from "./Components/flashDeals";
import Header from "./Components/header";
import LandingPage from "./Components/landing";
import GetAllProducts from "./data/getAllProducts";
import { DataAtom } from "./store/data.js";
import { useAtomValue, useSetAtom } from "jotai";
import { AiOutlineLoading } from "react-icons/ai";
import NavBar from "./Components/navBar.js";
import Search from "./Components/searchWindow.js";
import TopCategories from "./Components/topCategoriesSection.js";
import { Routes, Route } from "react-router";
import Product from "./Components/product.js";
import Cart from "./Components/cart.js";
import { useLocation } from "react-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
export default function Home() {
  const setProduct = useSetAtom(DataAtom);
  const products = useAtomValue(DataAtom);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    NProgress.start();
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);
    GetAllProducts()
      .then((p) => {
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
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <AiOutlineLoading className="text-primary relative left-1/2 text-5xl transform -translate-x-1/2 animate-spin  top-80" />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <main className="bg-backGround max-lg:relative">
                    <LandingPage />
                    <FlashDeals />
                    <TopCategories />
                    <NavBar />
                    <Search />
                  </main>
                }
              />
              <Route
                path="products/:title"
                element={
                  <>
                    <Product />
                    <Search />
                    <NavBar />
                  </>
                }
              />
              <Route
                path="/cart"
                element={
                  <>
                    <Search />
                    <Cart />
                    <NavBar />
                  </>
                }
              />
            </Route>
          </Routes>
        </>
      )}
    </>
  );
}
