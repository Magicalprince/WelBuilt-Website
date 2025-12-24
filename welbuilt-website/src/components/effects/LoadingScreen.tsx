"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Slower progress for better readability
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          setTimeout(onLoadingComplete, 1000);
          return 100;
        }
        // Slower increment: 3-8 instead of 0-15
        return prev + 3 + Math.random() * 5;
      });
    }, 150); // Slower interval: 150ms instead of 100ms

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Animated Background Grid */}
          <div className="absolute inset-0 grid-pattern opacity-30" />

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-orange-500 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1920),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1080),
                  opacity: 0,
                }}
                animate={{
                  y: [null, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Logo Animation */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Logo Icon SVG */}
            <motion.svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              className="relative z-10"
            >
              {/* Left shape - beige */}
              <motion.path
                d="M20 70 L20 30 Q20 25 25 25 L35 25 Q40 25 40 30 L40 75 Q40 80 35 85 L25 85 Q20 85 20 80 Z"
                fill="#D4A853"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              {/* Middle shape - teal */}
              <motion.path
                d="M42 65 L42 25 Q42 20 47 20 L57 20 Q62 20 62 25 L62 70 Q62 75 57 80 L47 80 Q42 80 42 75 Z"
                fill="#3D5A5B"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              {/* Right shape - orange */}
              <motion.path
                d="M64 60 L64 15 Q64 10 69 10 L79 10 Q84 10 84 15 L84 65 Q84 70 79 75 L69 75 Q64 75 64 70 Z"
                fill="#F5A623"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />
            </motion.svg>
          </motion.div>

          {/* Company Name */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-['Space_Grotesk']">
              <span className="text-white">WelBuilt</span>
              <span className="gradient-text ml-2">AI</span>
            </h1>
            <motion.p
              className="text-gray-500 text-sm mt-2 tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              Solutions Pvt Ltd
            </motion.p>
          </motion.div>

          {/* Progress Bar */}
          <div className="w-64 md:w-80">
            <div className="h-[2px] bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <motion.div
              className="flex justify-between mt-3 text-xs text-gray-500 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>INITIALIZING</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </motion.div>
          </div>

          {/* Loading Text Animation */}
          <motion.div
            className="absolute bottom-12 text-gray-600 text-xs tracking-[0.3em] uppercase font-mono"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Building the future
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
