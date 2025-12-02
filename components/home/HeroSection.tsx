'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Play, ArrowRight, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AIAnalytics from './AIAnalytics';

const stats = [
  { value: '0', label: 'Users', goal: 'Goal: 100M+' },
  { value: '0', label: 'Simulated trades', goal: 'Goal: 10M+' },
  { value: '🚀', label: 'Launching soon', goal: '' },
];

export default function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-violet-500/20 rounded-full animate-ping"
            style={{
              width: `${400 + i * 200}px`,
              height: `${400 + i * 200}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Version 1.0.0</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Master
            </span>
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
              Trading
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Professional crypto-trading simulator. Learn, practice, and perfect your strategies without exposing real capital.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            id="download"
          >
            <Button
              size="lg"
              className="group bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 px-8 py-6 text-lg rounded-full shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105"
              onClick={() => window.open('https://example.com/rwams-traders.apk', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download APK
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch demo
            </Button>
          </motion.div>

          {/* Investor-Ready Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <Link href="/investors">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-full px-6 py-3 hover:border-emerald-500/50 transition-all cursor-pointer group">
                <TrendingUp className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-emerald-400">Investor-Ready</span>
                <span className="text-xs text-gray-400">→ Discover our potential</span>
              </div>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-20"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 mt-1">{stat.label}</div>
                {stat.goal && (
                  <div className="text-xs text-cyan-400 mt-2">{stat.goal}</div>
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* AI Analytics Section */}
        <AIAnalytics />
      </div>
    </section>
  );
}
