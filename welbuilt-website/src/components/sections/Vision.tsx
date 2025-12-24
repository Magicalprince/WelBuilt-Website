"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const expertiseAreas = [
  { name: "Web Development", percentage: 95 },
  { name: "Mobile Apps", percentage: 90 },
  { name: "AI/ML Solutions", percentage: 88 },
  { name: "Cloud Architecture", percentage: 92 },
  { name: "UI/UX Design", percentage: 94 },
];

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Vision Card */}
          <motion.div
            className="relative"
            style={{ x: x1 }}
          >
            <motion.div
              className="relative p-8 md:p-12 rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              {/* Background Image/Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-orange-600/10 to-transparent" />
              <div className="absolute inset-0 grid-pattern opacity-30" />

              {/* Floating Elements */}
              <motion.div
                className="absolute top-4 right-4 w-20 h-20 bg-orange-500/20 rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-8"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white mb-6">
                  Your <span className="gradient-text">Vision</span>
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  We believe in turning bold visions into digital reality. Every project begins
                  with understanding your unique goals, challenges, and aspirations. Our
                  collaborative approach ensures your vision drives every decision we make.
                </p>

                <div className="flex items-center gap-4">
                  <motion.div
                    className="flex -space-x-3"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-[#0a0a0a] flex items-center justify-center text-xs text-gray-400"
                      >
                        {i}
                      </div>
                    ))}
                  </motion.div>
                  <span className="text-sm text-gray-500">150+ satisfied clients</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Expertise Card */}
          <motion.div
            className="relative"
            style={{ x: x2 }}
          >
            <motion.div
              className="relative p-8 md:p-12 glass rounded-3xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center mb-8"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                >
                  <svg className="w-8 h-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </motion.div>

                <h3 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-white mb-6">
                  Our <span className="gradient-text">Expertise</span>
                </h3>

                <div className="space-y-6">
                  {expertiseAreas.map((area, index) => (
                    <motion.div
                      key={area.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">{area.name}</span>
                        <span className="text-sm text-orange-500">{area.percentage}%</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"
                          initial={{ width: "0%" }}
                          animate={isInView ? { width: `${area.percentage}%` } : {}}
                          transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
