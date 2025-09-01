import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CompaniesSection from "@/components/CompaniesSection";
import Features from "@/components/Features";
import TrustedBy from "@/components/TrustedBy";
import PricingSection from "@/components/PricingSection";
import SectionVertical from "@/components/SectionVertical";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black  overflow-hidden">
      <Navbar />

      <div className="hidden md:block absolute top-[90px] bottom-0 left-[10%] w-px bg-gray-600/50"></div>
      <div className="hidden md:block absolute top-[90px] bottom-0 left-[20%] w-px bg-gray-600/50"></div>
      <div className="hidden md:block absolute top-[90px] bottom-0 right-[25%] w-px bg-gray-600/50"></div>
      <div className="hidden md:block absolute top-[90px] bottom-0 right-[15%] w-px bg-gray-600/50"></div>

      <section id="hero"><Hero /></section>
      <section id="features"><Features /></section>
      <section id="companies"><CompaniesSection /></section>
      <section id="trusted"><TrustedBy /></section>
      <section id="section-vertical"><SectionVertical /></section>
      <section id="pricing"><PricingSection /></section>
      <Footer />
    </main>
  );
}
