import "./App.css";
import { useEffect, useState } from "react";
import GetAllProducts from "./data/getAllProducts";
import { DataAtom } from "./store/data.js";
import { useAtomValue, useSetAtom } from "jotai";
import { AiOutlineLoading } from "react-icons/ai";
import { RouterProvider } from "react-router";
import useRouter from "./hooks/use-router.js";

function App() {
	const router = useRouter();

	const setProduct = useSetAtom(DataAtom);
	const products = useAtomValue(DataAtom);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
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
		// ! before you were refetching all products on each location change wrong
	}, []);

	return (
		<>
			{loading ? (
				<AiOutlineLoading className="text-primary relative left-1/2 text-5xl transform -translate-x-1/2 animate-spin  top-80" />
			) : (
				<RouterProvider router={router} />
			)}
		</>
	);
}

export default App;
