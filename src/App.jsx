import "./App.css";
import BrandSection from "./components/BrandSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServiceSection from "./components/ServiceSection";
import ServiceSectionExtend from "./components/ServiceSectionExtend";
import TestimonialSection from "./components/TestimonialSection";
import TrailSection from "./components/TrailSection";

function App() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Header />
        <HeroSection />
        <BrandSection />
        <ServiceSection />
        <ServiceSectionExtend />
        <TestimonialSection />
        <PricingSection />
        <FAQSection />
        <TrailSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
