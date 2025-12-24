"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "Starter",
    price: "$700",
    period: "/project",
    description: "Perfect for small projects and MVPs",
    features: [
      "Single page website",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,200",
    period: "/project",
    description: "Ideal for growing businesses",
    features: [
      "Multi-page website (up to 10)",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration",
      "Analytics dashboard",
      "3 months support",
      "Performance optimization",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$700",
    period: "/month",
    description: "For large-scale applications",
    features: [
      "Unlimited pages",
      "Custom web application",
      "AI/ML integration",
      "Dedicated team",
      "24/7 priority support",
      "Continuous updates",
      "Custom API development",
    ],
    popular: false,
  },
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section id="pricing" ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[150px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-orange-400 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Pricing
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk']">
            <span className="gradient-text">Flexible Plans</span> That
            <br />
            Fit Your <span className="gradient-text">Vision</span>
          </h2>

          <p className="mt-6 text-lg text-gray-400">
            Choose the perfect plan for your project. All plans include our premium
            quality standards and dedicated support.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              onMouseEnter={() => setHoveredPlan(plan.name)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-semibold rounded-full">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div
                className={`relative h-full p-8 rounded-2xl overflow-hidden ${
                  plan.popular
                    ? "bg-gradient-to-b from-orange-500/10 to-transparent border-2 border-orange-500/50"
                    : "glass"
                }`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow Effect for Popular */}
                {plan.popular && (
                  <motion.div
                    className="absolute inset-0 bg-orange-500/5"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                )}

                <div className="relative z-10">
                  {/* Plan Name */}
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <span className="text-5xl font-bold font-['Space_Grotesk'] text-white">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.05 }}
                      >
                        <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                          <svg
                            className="w-3 h-3 text-orange-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                        : "border border-white/20 text-white hover:bg-white/5"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredPlan === plan.name ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <p className="text-gray-400">
            Need a custom solution?{" "}
            <a href="#contact" className="text-orange-500 hover:text-orange-400 font-medium">
              Contact us for a tailored quote
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
