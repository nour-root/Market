import Header from "@/Components/header";
import NavBar from "@/Components/navBar";
import Search from "@/Components/searchWindow";
import Footer from "@/Components/shared/footer";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useSetAtom } from "jotai";
import { cart_items } from "@/store/cart_items";

const Layout = () => {
  const location = useLocation();
  const setCartItems = useSetAtom(cart_items);
  useEffect(() => {
    if (location.state?.clearCart) {
      setCartItems([]);
    }

    NProgress.start();
    // nonsense no mean, no use,
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);
    return () => clearTimeout(timeout);
  }, [location.pathname, location.state]);

  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
      <Search />
      {location.pathname === "/mobile-categories" ? <></> : <Footer />}
    </>
  );
};

export default Layout;
