"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamFeatures = [
  {
    title: "Expert AI Engineers",
    description: "Building intelligent solutions with cutting-edge ML technologies",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Developers",
    description: "End-to-end development from database to pixel-perfect UI",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "UI/UX Designers",
    description: "Crafting intuitive experiences that users love",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: "Product Strategists",
    description: "Turning vision into roadmaps that drive success",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // More dramatic scroll transforms
  const visualY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="about" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Section Divider - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div
          className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[150px]"
          style={{ scale: backgroundScale }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px]"
          style={{ scale: backgroundScale }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-20 py-20 lg:py-28"
        style={{ opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left - Visual */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ y: visualY, rotate: rotateZ }}
          >
            <div className="relative max-w-lg mx-auto">
              {/* Glow Effect Behind Image */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-3xl blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Main Image with Floating Animation */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/about-visual.png"
                  alt="About WelBuilt AI"
                  width={500}
                  height={500}
                  className="w-full h-auto drop-shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Decorative floating element */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1, y: [0, -8, 0] } : {}}
                transition={{
                  opacity: { delay: 0.5, duration: 0.5 },
                  scale: { delay: 0.5, duration: 0.5, type: "spring" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>

              {/* Second decorative floating element */}
              <motion.div
                className="absolute -bottom-2 -left-2 w-12 h-12 glass rounded-xl flex items-center justify-center shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1, y: [0, 10, 0] } : {}}
                transition={{
                  opacity: { delay: 0.7, duration: 0.5 },
                  scale: { delay: 0.7, duration: 0.5, type: "spring" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
              >
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: contentY }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-orange-500 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500" />
              About Us
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-tight text-gray-900 dark:text-white">
              A Team of{" "}
              <span className="gradient-text">Thinkers,</span>
              <br />
              Makers, and
              <br />
              Problem{" "}
              <span className="gradient-text">Solvers</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              At WelBuilt AI Solutions, we&apos;re not just developers – we&apos;re architects of
              digital transformation. Our multidisciplinary team combines deep technical
              expertise with creative innovation to deliver solutions that push boundaries.
            </p>

            {/* Redesigned Feature Cards - Compact */}
            <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl">
              {teamFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative h-full rounded-xl bg-white dark:bg-[#0d0d0d] border border-gray-200 dark:border-gray-800 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -3 }}
                >
                  {/* Card Inner Content */}
                  <div
                    className="h-full flex flex-col"
                    style={{ padding: '20px' }}
                  >
                    {/* Icon Container */}
                    <div
                      className="rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 flex-shrink-0"
                      style={{ width: '44px', height: '44px', marginBottom: '14px' }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {feature.icon.props.children}
                      </svg>
                    </div>

                    {/* Title */}
                    <h4
                      className="font-semibold text-gray-900 dark:text-white font-['Space_Grotesk']"
                      style={{ fontSize: '15px', marginBottom: '8px' }}
                    >
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-gray-600 dark:text-gray-400 flex-grow"
                      style={{ fontSize: '13px', lineHeight: '1.5' }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
