import Header from "@/Components/header";
import NavBar from "@/Components/navBar";
import Search from "@/Components/searchWindow";
import Footer from "@/Components/footer";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { loadingAtom } from "@/store/loading";
import { useAtomValue } from "jotai";
const Layout = () => {
  const location = useLocation();
  const loading = useAtomValue(loadingAtom);
  useEffect(() => {
    NProgress.start();
    // nonsense no mean, no use,
    const timeout = setTimeout(() => {
      NProgress.done();
    }, 500);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
      <Search />
      {!loading && <Footer />}
    </>
  );
};

export default Layout;
