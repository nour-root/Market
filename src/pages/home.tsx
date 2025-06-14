import FlashDeals from "@/Components/flashDeals";
import LandingPage from "@/Components/landing";
import TopCategories from "@/Components/topCategoriesSection";
import FeaturesSection from "@/Components/featuresSection";
const Home = () => {
  return (
    <main className="bg-backGround max-lg:relative">
      <LandingPage />
      <FlashDeals />
      <TopCategories />
      <FeaturesSection />
    </main>
  );
};

export default Home;
