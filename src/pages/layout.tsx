import Header from "@/Components/header";
import NavBar from "@/Components/navBar";
import Search from "@/Components/searchWindow";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const Layout = () => {
	const location = useLocation();

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
		</>
	);
};

export default Layout;
