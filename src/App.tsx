import "./App.css";
import Hero from "./componets/Hero";
import Navbar from "./componets/Navbar";
import WorkSection from "./componets/WorkSection";
import "lenis/dist/lenis.css";
import { ReactLenis } from "lenis/react";
import ServicesSection from "./componets/ServicesSection";

function App() {
  return (
    <>
      <ReactLenis
        root
        options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
      >
        <Navbar />
        <Hero />
        <WorkSection />
        <ServicesSection />
      </ReactLenis>
    </>
  );
}

export default App;
