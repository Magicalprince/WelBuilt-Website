"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
          isScrolled
            ? "py-3 glass-strong shadow-lg"
            : "py-6 bg-transparent"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="container mx-auto px-8 lg:px-16 xl:px-20">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="relative group flex-shrink-0">
              <motion.div
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/logo-icon.png"
                    alt="WelBuilt AI"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="hidden sm:flex items-center whitespace-nowrap">
                  <span className="text-xl font-bold font-['Space_Grotesk'] text-gray-900 dark:text-white">
                    WelBuilt
                  </span>
                  <span className="text-xl font-bold font-['Space_Grotesk'] gradient-text ml-1">
                    AI
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-all duration-300 group whitespace-nowrap",
                      activeSection === item.href.replace("#", "")
                        ? "text-orange-500"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    )}
                  >
                    <span className="relative z-10">{item.name}</span>

                    {activeSection === item.href.replace("#", "") && (
                      <motion.span
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-orange-500 rounded-full"
                        layoutId="activeIndicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Theme Toggle & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className="relative w-11 h-11 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-orange-500 transition-colors flex-shrink-0"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle theme"
              >
                {!mounted ? (
                  <div className="w-5 h-5" />
                ) : theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                className="relative px-8 py-3.5 text-sm font-semibold text-white rounded-full group flex-shrink-0 bg-gradient-to-r from-orange-500 to-orange-600 shadow-lg shadow-orange-500/25"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="flex items-center justify-center gap-3 whitespace-nowrap">
                  Get Started
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <motion.button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-400"
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle theme"
              >
                {!mounted ? (
                  <div className="w-5 h-5" />
                ) : theme === "light" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </motion.button>

              <motion.button
                className="relative w-10 h-10 flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <motion.span
                    className="w-full h-0.5 bg-gray-900 dark:bg-white rounded-full origin-left"
                    animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-gray-900 dark:bg-white rounded-full"
                    animate={{ opacity: isMobileMenuOpen ? 0 : 1, x: isMobileMenuOpen ? -20 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="w-full h-0.5 bg-gray-900 dark:bg-white rounded-full origin-left"
                    animate={{ rotate: isMobileMenuOpen ? -45 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[99] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.nav
              className="absolute top-20 left-6 right-6 glass-strong rounded-2xl p-6 overflow-hidden"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "block px-4 py-3 text-lg font-medium rounded-xl transition-all duration-300",
                        activeSection === item.href.replace("#", "")
                          ? "text-orange-500 bg-orange-500/10"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button className="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Get Started
                </button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
