"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#about" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Mobile Apps", href: "#services" },
    { name: "AI Solutions", href: "#services" },
    { name: "SaaS Development", href: "#services" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Help Center", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  // Enhanced scroll-based effects
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // More dramatic transforms
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);

  return (
    <footer ref={containerRef} className="relative pt-16 lg:pt-20 pb-8 lg:pb-10 overflow-hidden bg-gray-50 dark:bg-[#0a0a0a]">
      {/* Background with scroll opacity */}
      <motion.div className="absolute inset-0 grid-pattern" style={{ opacity: backgroundOpacity }} />

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

      <motion.div
        className="relative z-10 container mx-auto px-8 lg:px-16 xl:px-20"
        style={{ y: contentY, scale, opacity }}
      >
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-10 pb-12 lg:pb-16 border-b border-gray-200 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Logo & Description */}
          <motion.div
            className="col-span-2 md:col-span-4 lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link href="#home" className="inline-flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-icon.png"
                  alt="WelBuilt AI"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold font-['Space_Grotesk'] text-gray-900 dark:text-white">
                  WelBuilt
                </span>
                <span className="text-xl font-bold font-['Space_Grotesk'] gradient-text ml-1">
                  AI
                </span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Building the future of digital experiences with cutting-edge technology
              and innovative AI solutions.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-500"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-gray-600 dark:text-gray-400">Available for new projects</span>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="text-gray-900 dark:text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 text-sm hover:text-orange-500 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="pt-8 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-gray-200 dark:border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Email */}
          <a href="mailto:welbuilt@gmail.com" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-500">Email</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-orange-500 transition-colors">welbuilt@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-500">Phone</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">+91 93453 64408</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">+91 91502 72441</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">+91 63811 42016</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-500">Location</p>
              <p className="text-sm text-gray-700 dark:text-gray-300">Chennai, India</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-gray-600 dark:text-gray-500 text-sm text-center">
            &copy; {new Date().getFullYear()} WelBuilt AI Solutions Pvt Ltd. All rights reserved.
          </p>
        </motion.div>

        {/* Large Background Text */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          <motion.div
            className="text-[20vw] font-bold font-['Space_Grotesk'] text-gray-900/[0.03] dark:text-white/[0.02] whitespace-nowrap leading-none"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            WELBUILT AI • INNOVATE • CREATE • TRANSFORM •
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
