"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Enhanced scroll-based effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // More dramatic 3D transforms
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);

  return (
    <section ref={containerRef} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Section Divider - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />
      <div className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-20" style={{ perspective: "1000px" }}>
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ scale, rotateX, y, opacity }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600" />

          {/* Animated Pattern */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-30 30v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
              animate={{
                backgroundPosition: ["0px 0px", "60px 60px"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Floating orbs */}
          <motion.div
            className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 py-16 sm:px-10 md:px-16 md:py-20 lg:py-24 text-center">
            <motion.span
              className="inline-block px-4 py-2 bg-white/20 rounded-full text-white/90 text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Let&apos;s Build Something Amazing
            </motion.span>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-['Space_Grotesk'] text-white leading-tight max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Ready To Build
              <br />
              Something{" "}
              <span className="relative inline-block">
                Extraordinary
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  <motion.path
                    d="M2 8 Q 50 2, 100 8 T 198 6"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.5"
                  />
                </motion.svg>
              </span>
              ?
            </motion.h2>

            <motion.p
              className="mt-6 text-lg text-white/80 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Transform your ideas into reality with our expert team. Let&apos;s discuss
              your project and create something that makes a difference.
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.button
                className="group relative px-8 py-4 bg-white text-orange-600 font-semibold rounded-full overflow-hidden min-w-[200px] shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Start Your Project
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-orange-100"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-full hover:bg-white/10 transition-colors duration-300 min-w-[200px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Schedule a Call
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
