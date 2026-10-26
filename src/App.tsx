import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import MenuSection from "./components/MenuSection";
import Signatures from "./components/Signatures";
import Escape from "./components/Escape";
import Reviews from "./components/Reviews";
import Visit from "./components/Visit";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  const ready = !loading;

  return (
    <div className="grain relative min-h-screen bg-cream">
      <AnimatePresence>
        {loading && <Loader onDone={() => setLoading(false)} />}
      </AnimatePresence>

      <Navbar ready={ready} />

      <main>
        <Hero ready={ready} />
        <Marquee
          items={[
            "Rose Water Latte",
            "Ethiopia Guji",
            "Honey Cardamom",
            "Slow Bar Pour Over",
            "Pistachio Croissant",
            "Vanilla Cold Brew",
          ]}
        />
        <Story />
        <MenuSection />
        <Signatures />
        <Escape />
        <Reviews />
        <Visit />
      </main>

      <Footer />
    </div>
  );
}
