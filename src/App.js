// src/App.js
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
import "./index.css";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <Header />

      <main id="main">
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
      </main>

      <Footer />
    </>
  );
}
