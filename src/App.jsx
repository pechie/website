import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Work from "./components/Work";
import Document from "./components/Document";
import ContactMe from "./components/ContactMe";
import SectionNav from "./components/SectionNav";

export default function App() {
  return (
    <>
      <Navbar />
      <section id="home"><HeroSection /></section>
      <section id="about"><About /></section>
      <section id="experience"><Work /></section>
      <section id="resume"><Document /></section>
      <section id="contact"><ContactMe /></section>
      <Footer />
      <SectionNav />
    </>
  );
}
