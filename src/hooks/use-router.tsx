import Cart from "@/pages/cart";
import Category from "@/pages/category";
import ErrorPage from "@/pages/errorPage";
import Home from "@/pages/home";
import Layout from "@/pages/layout";
import Product from "@/pages/product";
import ProductsPage from "@/pages/ProductsPage";
import { createBrowserRouter } from "react-router";

// ! PAGE MUST BE INSIDE PAGE FOLDER

const useRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "products/:title",
          element: <Product />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "products/category/:category",
          element: <ProductsPage />,
        },
        {
          path: "products/search",
          element: <ProductsPage />,
        },
        {
          path: "products/category/:category/:title",
          element: <Product />,
        },
        { path: "/mobile-categories", element: <Category /> },
      ],
    },
  ]);
};

export default useRouter;
