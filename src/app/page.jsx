// Import Components For Home Page
import MiniNavbar from "./components/MiniNavbar/index.jsx";
import MainNavbar from "./components/MainNavbar/index.jsx";
import LandingSection from "./components/LandingSection/index.jsx";
import SubLandingSection from "./components/SubLandingSection/index.jsx";
import AboutUsSection from "./components/AboutUsSection/index.jsx";
import UniqueServiceSection from "./components/UniqueServiceSection/index.jsx";
import FastestFoodDeliverySection from "./components/FastestFoodDeliverySection/index.jsx";
import CustomersReviewSection from "./components/CustomersReviewSection/index.jsx";
import MiniBlogSection from "./components/MiniBlogSection/index.jsx";
import FooterSection from "./components/FooterSection/index.jsx";


export default function Home() {
  return (
    <div>
      <MiniNavbar />
      <MainNavbar />
      <LandingSection />
      <SubLandingSection />
      <AboutUsSection />
      <UniqueServiceSection />
      <FastestFoodDeliverySection />
      <CustomersReviewSection />
      <MiniBlogSection />
      <FooterSection />
    </div>
  );
};