'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, TrendingUp, Zap, Target, Eye, Cpu } from 'lucide-react';

const aiMetrics = [
  {
    icon: Brain,
    title: 'Neural Network',
    value: 94.8,
    suffix: '%',
    label: 'Accuracy',
    color: 'from-violet-500 via-purple-500 to-fuchsia-500',
    particles: 12,
    description: 'Deep learning analysis',
  },
  {
    icon: Target,
    title: 'Smart Predictions',
    value: 87.3,
    suffix: '%',
    label: 'Reliability',
    color: 'from-cyan-500 via-blue-500 to-indigo-500',
    particles: 10,
    description: 'Predictive algorithms',
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    value: 1.2,
    suffix: 'ms',
    label: 'Latency',
    color: 'from-amber-500 via-orange-500 to-red-500',
    particles: 15,
    description: 'Ultra-fast response',
  },
];

export default function AIAnalytics() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0]);

  // Rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % aiMetrics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animate values
  useEffect(() => {
    const timers = aiMetrics.map((metric, index) => {
      let current = 0;
      const target = metric.value;
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = target;
            return newValues;
          });
          clearInterval(timers[index]);
        } else {
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = current;
            return newValues;
          });
        }
      }, duration / steps);
    });

    return () => timers.forEach((timer) => clearInterval(timer));
  }, []);

  return (
    <div className="mt-20 max-w-7xl mx-auto px-4">
      {/* Title Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
          <Cpu className="w-5 h-5 text-violet-400" />
          <span className="text-sm font-medium text-gray-300">Advanced Artificial Intelligence</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Powered by AI
          </span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Cutting-edge technology delivering ultra-precise insights
        </p>
      </motion.div>

      {/* AI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {aiMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
            className="group relative"
            onMouseEnter={() => setActiveIndex(index)}
          >
            {/* Glow Effect */}
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${metric.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-500`}
            />

            {/* Card Container */}
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden">
              {/* Background Animated Mesh */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern
                      id={`grid-${index}`}
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <motion.path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        className={`text-gradient-${index}`}
                        animate={{
                          strokeDashoffset: [0, 80],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-${index})`} />
                </svg>
              </div>

              {/* Icon with Pulse */}
              <div className="relative mb-6">
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center`}
                  animate={{
                    scale: activeIndex === index ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <metric.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Orbiting Particles */}
                <AnimatePresence>
                  {activeIndex === index &&
                    [...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-2 h-2 rounded-full bg-gradient-to-r ${metric.color}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                          x: [0, Math.cos((i * 2 * Math.PI) / 3) * 40],
                          y: [0, Math.sin((i * 2 * Math.PI) / 3) * 40],
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                </AnimatePresence>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
              <p className="text-sm text-gray-400 mb-6">{metric.description}</p>

              {/* Animated Value */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <motion.span
                    className={`text-5xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                    key={animatedValues[index]}
                  >
                    {animatedValues[index].toFixed(1)}
                  </motion.span>
                  <span className={`text-2xl font-semibold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.suffix}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{metric.label}</p>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className={`absolute inset-y-0 left-0 bg-gradient-to-r ${metric.color} rounded-full`}
                  initial={{ width: 0 }}
                  animate={{
                    width: metric.suffix === '%' ? `${animatedValues[index]}%` : '100%',
                  }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                />
              </div>

              {/* Floating Data Points */}
              <div className="mt-6 relative h-16">
                <div className="flex items-end justify-between gap-1 h-full">
                  {[...Array(20)].map((_, i) => {
                    const height = 30 + Math.sin((i + index) * 0.5) * 30 + Math.random() * 20;
                    return (
                      <motion.div
                        key={i}
                        className={`flex-1 bg-gradient-to-t ${metric.color} rounded-t opacity-60 group-hover:opacity-100 transition-opacity`}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.05,
                          ease: 'easeOut',
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Scan Line Effect */}
              <motion.div
                className={`absolute inset-x-0 h-px bg-gradient-to-r ${metric.color} opacity-50`}
                animate={{
                  y: [0, 300, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Status Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-slate-900/50 backdrop-blur-xl border border-emerald-500/30 rounded-full px-6 py-3">
          <div className="relative">
            <div className="w-3 h-3 bg-emerald-500 rounded-full" />
            <motion.div
              className="absolute inset-0 bg-emerald-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
          <span className="text-sm font-medium text-gray-300">
            Système IA Opérationnel • Analyse en Temps Réel
          </span>
          <Eye className="w-4 h-4 text-emerald-400" />
        </div>
      </motion.div>
    </div>
  );
}
