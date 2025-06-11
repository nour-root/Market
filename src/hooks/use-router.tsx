import CartPage from "@/pages/cart";
import Home from "@/pages/home";
import Layout from "@/pages/layout";
import ProductPage from "@/pages/product-page";
import { createBrowserRouter } from "react-router";

// ! PAGE MUST BE INSIDE PAGE FOLDER

const useRouter = () => {
	return createBrowserRouter([
		{
			path: "/",
			element: <Layout />,
			children: [
				{
					path: "",
					element: <Home />,
				},
				{
					path: "products/:title",
					element: <ProductPage />,
				},
				{
					path: "cart",
					element: <CartPage />,
				},
			],
		},
	]);
};

export default useRouter;
