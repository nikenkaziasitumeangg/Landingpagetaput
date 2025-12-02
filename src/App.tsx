import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { NewsSection } from "./components/NewsSection";
import { InfoSection } from "./components/InfoSection";
import { StatsSection } from "./components/StatsSection";
import { EgovSection } from "./components/EgovSection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navigation />
      <Hero />
      <NewsSection />
      <InfoSection />
      <StatsSection />
      <EgovSection />
      <Footer />
    </div>
  );
}
