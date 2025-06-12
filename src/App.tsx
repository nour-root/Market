import { useEffect, useState } from "react";
import GetAllProducts from "./data/getAllProducts";
import { DataAtom } from "./store/data.js";
import { RouterProvider } from "react-router";
import useRouter from "./hooks/use-router.js";
import { useAtomValue, useSetAtom } from "jotai";
import Loader from "./Components/shared/loader.js";

function App() {
	const router = useRouter();
	const setProduct = useSetAtom(DataAtom);
	const products = useAtomValue(DataAtom);

	// ! removed the globalization of the loading state no need
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// ! setting loading state should be here
		setLoading(true);

		GetAllProducts()
			.then((p) => {
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (loading) {
		// ! extracting loader as a shared component
		return <Loader />;
	}

	return <RouterProvider router={router} />;
}

export default App;
