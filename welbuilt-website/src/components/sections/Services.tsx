"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Stunning, responsive websites built with cutting-edge technologies. From landing pages to complex web applications.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "#3B82F6",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "#A855F7",
  },
  {
    id: 3,
    title: "AI Solutions",
    description: "Custom AI/ML solutions including chatbots, automation, predictive analytics, and intelligent process optimization.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#F97316",
  },
  {
    id: 4,
    title: "SaaS Development",
    description: "End-to-end SaaS product development with scalable architecture, multi-tenancy, and subscription management.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    color: "#22C55E",
  },
  {
    id: 5,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality. Creating intuitive interfaces that users love.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    color: "#EAB308",
  },
  {
    id: 6,
    title: "DevOps & Cloud",
    description: "Cloud infrastructure setup, CI/CD pipelines, containerization, and automated deployment solutions.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    color: "#6366F1",
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Enhanced scroll-based parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // More dramatic transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1, 1.5]);
  const headerY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const gridY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="services" ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden bg-gray-50/50 dark:bg-white/[0.02]">
      {/* Section Divider - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

      {/* Section Divider - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />

      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent dark:via-orange-500/5"
          style={{ scale: backgroundScale }}
        />
        <motion.div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px]"
          style={{ scale: backgroundScale }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]"
          style={{ scale: backgroundScale }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-20 py-20 lg:py-28"
        style={{ opacity, scale }}
      >
        {/* Section Header with parallax */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y: headerY }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-orange-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            What We Build
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-gray-900 dark:text-white">
            <span className="gradient-text">Crafted</span> With Precision,
            <br />
            Delivered With <span className="gradient-text">Purpose</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            We specialize in building digital products that transform businesses.
            From concept to launch, we deliver excellence at every step.
          </p>
        </motion.div>

        {/* Services Grid with scroll effect */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          style={{ y: gridY }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <motion.div
                className="relative h-full glass rounded-xl overflow-hidden cursor-pointer border border-gray-200 dark:border-gray-800"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Hover glow */}
                {hoveredId === service.id && (
                  <motion.div
                    className="absolute inset-0 opacity-10"
                    style={{ backgroundColor: service.color }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                {/* Content wrapper with padding */}
                <div className="relative z-10 h-full p-6">
                  <div className="h-full flex flex-col">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mb-4"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                        border: `1px solid ${service.color}30`
                      }}
                    >
                      <div className="text-gray-800 dark:text-white">
                        {service.icon}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold font-['Space_Grotesk'] text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow mb-4">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      className="flex items-center gap-2 text-orange-500 text-sm font-medium"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: hoveredId === service.id ? 1 : 0, x: hoveredId === service.id ? 0 : -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span>Learn More</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.button
            className="group relative px-8 py-4 bg-transparent border-2 border-orange-500/50 text-orange-500 font-semibold rounded-full overflow-hidden hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              View All Services
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
