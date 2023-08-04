import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Count from "@/components/Count";
import Features from "@/components/Features";
import Control from "@/components/Control";
import Better from "@/components/Better";
import Testimonials from "@/components/Testimonials";
import Brands from "@/components/Brands";
import Service from "@/components/Service";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg_color">
      <Navbar />
      <Hero />
      <Count />
      <Features />
      <Control />
      <Better />
      <Testimonials />
      <Brands />
      <Service />
      <Footer />
    </div>
  );
}
