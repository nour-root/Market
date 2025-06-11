import FlashDeals from "@/Components/flashDeals";
import LandingPage from "@/Components/landing";
import TopCategories from "@/Components/topCategoriesSection";

const Home = () => {
	return (
		<main className="bg-backGround max-lg:relative">
			<LandingPage />
			<FlashDeals />
			<TopCategories />
		</main>
	);
};

export default Home;
