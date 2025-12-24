"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Effects
import LoadingScreen from "@/components/effects/LoadingScreen";
import ParticleField from "@/components/effects/ParticleField";

// Sections
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Context
import { ThemeProvider } from "@/context/ThemeContext";

// Hooks
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

function HomeContent() {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize smooth scrolling
  useSmoothScroll();

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!isLoading && (
        <main className="relative min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
          {/* Particle Background - Only in dark mode */}
          <div className="dark:block hidden">
            <ParticleField />
          </div>

          {/* Header */}
          <Header />

          {/* Page Sections */}
          <Hero />
          <About />
          <Services />
          <CTA />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}
