import FlashDeals from "@/components/flashDeals";
import LandingPage from "@/components/landing";
import TopCategories from "@/components/topCategoriesSection";

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
