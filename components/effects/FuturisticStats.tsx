'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Target, Award, Globe, Download, Shield, Zap } from 'lucide-react';

type Stat = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  displayText?: string;
  color: string;
  glowColor: string;
};

const stats: Stat[] = [
  {
    icon: Download,
    label: "Taille de l'APK",
    displayText: '70 Mo',
    color: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6, 182, 212, 0.5)',
  },
  {
    icon: Target,
    label: 'Accès actuel',
    displayText: 'Toutes les fonctionnalités sont gratuites',
    color: 'from-violet-500 to-purple-500',
    glowColor: 'rgba(139, 92, 246, 0.5)',
  },
  {
    icon: Award,
    label: 'Version actuelle',
    displayText: 'Android 1.0.0 (70 MB)',
    color: 'from-pink-500 to-rose-500',
    glowColor: 'rgba(236, 72, 153, 0.5)',
  },
  {
    icon: Globe,
    label: 'Support officiel',
    displayText: 'contact@rwams-trader.world',
    color: 'from-indigo-500 to-purple-500',
    glowColor: 'rgba(99, 102, 241, 0.5)',
  },
  {
    icon: Shield,
    label: 'WhatsApp assistance',
    displayText: '+225 05 46 10 09 20',
    color: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245, 158, 11, 0.5)',
  },
];

export default function FuturisticStats() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayValue, setDisplayValue] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const currentStat = stats[currentIndex];

  // Prevent hydration mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Rotate through stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % stats.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate counter
  useEffect(() => {
    if (currentStat.displayText || typeof currentStat.value === 'undefined') {
      return;
    }

    setDisplayValue(0);
    const duration = 1500;
    const steps = 60;
    const increment = (currentStat.value || 0) / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= (currentStat.value || 0)) {
        setDisplayValue(currentStat.value || 0);
        clearInterval(timer);
      } else {
        setDisplayValue(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [currentIndex, currentStat]);

  if (!isMounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 right-8 z-50"
    >
      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            key="expanded"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="relative"
          >
            {/* Main container */}
            <div className="relative bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl min-w-[280px]">
              
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-3xl blur-xl opacity-50"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${currentStat.glowColor}, transparent 70%)`,
                }}
              />

              {/* Content */}
              <div className="relative">
                {/* Header with icon */}
                <motion.div
                  key={currentIndex}
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3 mb-4"
                >
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentStat.color} shadow-lg`}>
                    <currentStat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{currentStat.label}</p>
                  </div>
                  <button
                    onClick={() => setIsMinimized(true)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 12H5" />
                    </svg>
                  </button>
                </motion.div>

                {/* Animated value */}
                <motion.div
                  key={`value-${currentIndex}`}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="mb-4"
                >
                  {currentStat.displayText ? (
                    <div className={`text-2xl font-semibold text-white`}>{currentStat.displayText}</div>
                  ) : (
                    <div className={`text-5xl font-bold bg-gradient-to-r ${currentStat.color} bg-clip-text text-transparent`}>
                      {currentStat.prefix}
                      {displayValue.toLocaleString('en-US', {
                        maximumFractionDigits: currentStat.value && currentStat.value % 1 !== 0 ? 1 : 0,
                      })}
                      {currentStat.suffix}
                    </div>
                  )}
                </motion.div>

                {/* Progress dots */}
                <div className="flex gap-2 justify-center">
                  {stats.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'w-8 bg-gradient-to-r ' + currentStat.color : 'w-1.5 bg-gray-600'
                      }`}
                      animate={{
                        scale: index === currentIndex ? 1 : 0.8,
                      }}
                    />
                  ))}
                </div>

                {/* Animated particles (reduced for performance) */}
                {isMounted && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${currentStat.color}`}
                        animate={{
                          x: [
                            Math.random() * 280,
                            Math.random() * 280,
                          ],
                          y: [
                            Math.random() * 200,
                            Math.random() * 200,
                          ],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Decorative lines */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                  <svg className="w-full h-full opacity-10">
                    <motion.path
                      d="M 0 50 Q 70 30, 140 50 T 280 50"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating ring animation */}
            <motion.div
              className="absolute -inset-4 border-2 border-violet-500/30 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: 360,
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.div>
        ) : (
          // Minimized state
          <motion.button
            key="minimized"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setIsMinimized(false)}
            className="relative p-4 bg-gradient-to-br from-violet-600 to-cyan-600 rounded-full shadow-2xl hover:shadow-violet-500/50 transition-shadow"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-violet-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
