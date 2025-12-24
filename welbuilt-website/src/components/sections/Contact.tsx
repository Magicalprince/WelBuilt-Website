"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  additionalValues?: string[];
}

const contactInfo: ContactItem[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "welbuilt@gmail.com",
    href: "mailto:welbuilt@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 93453 64408",
    href: "tel:+919345364408",
    additionalValues: ["+91 91502 72441", "+91 63811 42016"],
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Location",
    value: "Chennai, India",
    href: "#",
  },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  // Enhanced scroll-based parallax effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // More dramatic transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.3, 0.8]);
  const headerY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const leftColumnY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rightColumnY = useTransform(scrollYProgress, [0, 1], [200, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" ref={containerRef} className="relative py-32 lg:py-48 overflow-hidden">
      {/* Section Divider - Top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent" />
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <motion.div
          className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px]"
          style={{ scale: backgroundScale }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]"
          style={{ scale: backgroundScale }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-20"
        style={{ opacity }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ y: headerY }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-orange-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-500" />
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-['Space_Grotesk'] text-gray-900 dark:text-white">
            We&apos;re Here To
            <br />
            Help You Move <span className="gradient-text">Forward</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ y: leftColumnY }}
          >
            <div className="glass rounded-2xl border border-gray-200/50 dark:border-white/5 overflow-hidden">
              {/* Inner content wrapper with proper padding */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold font-['Space_Grotesk'] text-gray-900 dark:text-white mb-4 lg:mb-6">
                  Let&apos;s Start a Conversation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 lg:mb-8 text-sm lg:text-base leading-relaxed">
                  Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s
                  create something amazing together.
                </p>

                <div className="space-y-4 lg:space-y-5">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="flex items-start gap-4 p-4 rounded-xl bg-gray-50/50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                        <a
                          href={item.href}
                          className="text-gray-900 dark:text-white font-medium hover:text-orange-500 transition-colors block"
                        >
                          {item.value}
                        </a>
                        {item.additionalValues && item.additionalValues.map((val, i) => (
                          <p key={i} className="text-gray-700 dark:text-gray-300 text-sm mt-1">{val}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className=""
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y: rightColumnY }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl border border-gray-200/50 dark:border-white/5 overflow-hidden">
              {/* Form content wrapper with proper padding */}
              <div className="p-6 lg:p-8">
              <div className="grid md:grid-cols-2 gap-5 lg:gap-6 mb-5 lg:mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors duration-300"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-5 lg:mb-6">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Project Type
                </label>
                <select
                  value={formState.project}
                  onChange={(e) => setFormState({ ...formState, project: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:border-orange-500/50 transition-colors duration-300 appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-white dark:bg-[#1a1a1a]">Select a project type</option>
                  <option value="website" className="bg-white dark:bg-[#1a1a1a]">Website Development</option>
                  <option value="mobile" className="bg-white dark:bg-[#1a1a1a]">Mobile App</option>
                  <option value="saas" className="bg-white dark:bg-[#1a1a1a]">SaaS Product</option>
                  <option value="ai" className="bg-white dark:bg-[#1a1a1a]">AI/ML Solution</option>
                  <option value="other" className="bg-white dark:bg-[#1a1a1a]">Other</option>
                </select>
              </div>

              <div className="mb-6 lg:mb-8">
                <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                  Tell us about your project
                </label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-orange-500/50 transition-colors duration-300 resize-none"
                  placeholder="Describe your project, goals, and timeline..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl overflow-hidden relative group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
