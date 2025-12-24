"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stats = [
  { value: "50", suffix: "+", label: "Projects Delivered" },
  { value: "10", suffix: "+", label: "AI Solutions" },
  { value: "30", suffix: "+", label: "Interns Trained" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll-based parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16 pb-4"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-orange-500/10 dark:bg-orange-500/20 rounded-full blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-orange-600/5 dark:bg-orange-600/10 rounded-full blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-40" />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-20 py-4 lg:py-8"
        style={{ y, opacity, scale }}
      >
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="text-sm text-gray-600 dark:text-gray-300">AI-Powered Solutions</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-gray-900 dark:text-white">Designing</span>
              <span className="block gradient-text">Digital Impact,</span>
              <span className="block text-gray-900 dark:text-white">Building Brands</span>
              <span className="block text-gray-900 dark:text-white">That{" "}
                <span className="relative inline-block">
                  Matter
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.path
                      d="M2 8 Q 50 2, 100 8 T 198 6"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </motion.svg>
                </span>
                <span className="gradient-text">.</span>
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="mt-4 text-sm lg:text-base text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We craft cutting-edge websites, mobile apps, and SaaS solutions powered by
              artificial intelligence. Transform your vision into digital reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-6 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-orange-500/25 min-w-[180px]"
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
              </motion.button>

              <motion.button
                className="group flex items-center gap-3 px-4 py-3 text-gray-900 dark:text-white font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center justify-center w-12 h-12 rounded-full border border-gray-300 dark:border-white/20 group-hover:border-orange-500/50 transition-colors duration-300">
                  <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  <motion.span
                    className="absolute inset-0 rounded-full border border-orange-500/30"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </span>
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Watch Showreel</span>
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="mt-6 lg:mt-8 grid grid-cols-3 gap-4 lg:gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <motion.div
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] gradient-text"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                    <span className="text-orange-500">{stat.suffix}</span>
                  </motion.div>
                  <p className="mt-0.5 text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Professional Dashboard */}
          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative">
              {/* Subtle Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-3xl blur-2xl" />

              {/* Main Dashboard Card */}
              <motion.div
                className="relative bg-white dark:bg-[#121212] rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Header */}
                <div className="px-5 py-4 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center">
                      <Image
                        src="/images/logo-icon.png"
                        alt="WelBuilt AI"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Project Dashboard</h3>
                      <p className="text-xs text-gray-500">WelBuilt AI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs text-gray-500">Live</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Active", value: "12", color: "text-green-500" },
                      { label: "In Progress", value: "8", color: "text-orange-500" },
                      { label: "Completed", value: "47", color: "text-blue-500" },
                    ].map((stat, i) => (
                      <motion.div
                        key={stat.label}
                        className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                      >
                        <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Progress Section */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Development Progress</span>
                      <span className="text-xs text-orange-500 font-semibold">78%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "78%" }}
                        transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                      />
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="space-y-2">
                    {[
                      { task: "UI/UX Design", status: "done" },
                      { task: "Frontend Development", status: "progress" },
                      { task: "Backend Integration", status: "pending" },
                    ].map((item, i) => (
                      <motion.div
                        key={item.task}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          item.status === "done" ? "bg-green-500" :
                          item.status === "progress" ? "bg-orange-500" : "bg-gray-300 dark:bg-gray-700"
                        }`}>
                          {item.status === "done" && (
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                          {item.status === "progress" && (
                            <motion.div
                              className="w-2 h-2 bg-white rounded-full"
                              animate={{ scale: [1, 0.5, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <span className={`text-sm ${item.status === "done" ? "text-gray-400 line-through" : "text-gray-700 dark:text-gray-300"}`}>
                          {item.task}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Team Avatars */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-7 h-7 rounded-full border-2 border-white dark:border-[#121212] bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1.8 + i * 0.05 }}
                        />
                      ))}
                      <motion.div
                        className="w-7 h-7 rounded-full border-2 border-white dark:border-[#121212] bg-orange-500 flex items-center justify-center text-[10px] font-medium text-white"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2 }}
                      >
                        +5
                      </motion.div>
                    </div>
                    <span className="text-xs text-gray-500">Team Members</span>
                  </div>
                </div>
              </motion.div>

              {/* Floating Notification Card */}
              <motion.div
                className="absolute -top-3 -right-3 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 p-3 w-44"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 1.5, duration: 0.3 },
                  scale: { delay: 1.5, duration: 0.3 },
                  y: { delay: 1.8, duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-start gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-900 dark:text-white">Build Successful</p>
                    <p className="text-[10px] text-gray-500">Just now</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Tech Badge */}
              <motion.div
                className="absolute -bottom-2 -left-2 bg-white dark:bg-[#1a1a1a] rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 px-3 py-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, y: [0, 5, 0] }}
                transition={{
                  opacity: { delay: 1.7, duration: 0.3 },
                  scale: { delay: 1.7, duration: 0.3 },
                  y: { delay: 2, duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    <div className="w-5 h-5 rounded bg-[#61DAFB] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-gray-900">R</span>
                    </div>
                    <div className="w-5 h-5 rounded bg-[#3178C6] flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">TS</span>
                    </div>
                    <div className="w-5 h-5 rounded bg-black flex items-center justify-center">
                      <span className="text-[8px] font-bold text-white">N</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-gray-500 font-medium">Modern Stack</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-gray-400 dark:border-gray-600 flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-2 bg-orange-500 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
