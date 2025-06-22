import Cart from "@/pages/cart";
import ErrorPage from "@/pages/errorPage";
import Home from "@/pages/home";
import Layout from "@/pages/layout";
import Product from "@/pages/product";
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
      ],
    },
  ]);
};

export default useRouter;
