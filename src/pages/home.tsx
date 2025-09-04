import FlashDeals from "@/Components/flashDeals";
import LandingPage from "@/Components/landing";
import TopCategories from "@/Components/topCategoriesSection";
import FeaturesSection from "@/Components/featuresSection";
import Advertisement from "@/Components/advertisement";
import ProductsSection from "@/Components/productsSection";
const Home = () => {
  return (
    <main className="bg-backGround max-lg:relative">
      <LandingPage />
      <FlashDeals />
      <TopCategories />
      <Advertisement />
      <ProductsSection />
      <FeaturesSection />
    </main>
  );
};

export default Home;
