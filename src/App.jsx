import React from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import ContactMe from "./components/ContactMe";
import SectionNav from "./components/SectionNav";

export default function App() {
  return (
    <>
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="experience"><Work /></section>
      <section id="contact"><ContactMe /></section>
      <Footer />
      <SectionNav />
    </>
  );
}
