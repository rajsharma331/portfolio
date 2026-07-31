import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
    const API_URL = import.meta.env.VITE_API_URL;

    fetch(`${API_URL}/visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        screen: `${window.screen.width} x ${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || "Direct",
      }),
    }).catch(console.error);
  }, []);

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;