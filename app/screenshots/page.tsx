'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Smartphone, TrendingUp, Award, BarChart3, Zap, Bell, Layout, Target, TrendingUp as TrendingIcon } from 'lucide-react';

const screenshots = [
  {
    title: 'Main Dashboard',
    description: 'Full overview of your portfolio',
    icon: TrendingUp,
    image: '/screenshots/dashboard.jpg',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Real-Time Trading',
    description: 'Execute orders instantly',
    icon: Zap,
    image: '/screenshots/trading.jpg',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'AI Analysis',
    description: 'Smart signals and predictions',
    icon: BarChart3,
    image: '/screenshots/ai-analysis.jpg',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Performance',
    description: 'Track your detailed results',
    icon: Award,
    image: '/screenshots/performance.jpg',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Custom Alerts',
    description: 'Smart notifications tailored to you',
    icon: Bell,
    image: '/screenshots/alerts.jpg',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Custom Overlays',
    description: 'Create your own visual indicators',
    icon: Layout,
    image: '/screenshots/overlays.jpg',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Progress Map',
    description: 'Visualize your growth',
    icon: TrendingIcon,
    image: '/screenshots/progression.jpg',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Advanced Strategies',
    description: 'Backtesting and optimization',
    icon: Target,
    image: '/screenshots/strategies.jpg',
    gradient: 'from-amber-500 to-yellow-500',
  },
];

export default function Screenshots() {
  return (
    <div className="bg-black font-sans antialiased text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Screenshots</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Discover
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  RWAMS Traders
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                An intuitive, powerful interface to master trading. Explore the features that make RWAMS the best platform.
              </p>
            </motion.div>

            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  {/* Title & Icon */}
                  <div className="mb-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${screenshot.gradient} mb-4`}>
                      <screenshot.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {screenshot.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {screenshot.description}
                    </p>
                  </div>

                  {/* Phone Mockup */}
                  <div className="relative">
                    {/* Phone frame */}
                    <div className="relative bg-slate-900 rounded-[3rem] p-3 border-4 border-slate-800 shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-800 rounded-b-3xl z-10"></div>
                      
                      {/* Screen */}
                      <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                        {/* Screen glow */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-20`}></div>
                        
                        {/* Actual screenshot image (visible by default) */}
                        <img 
                          src={screenshot.image}
                          alt={screenshot.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={{ 
                            filter: 'brightness(0.9) contrast(1.1)',
                          }}
                          onError={(e) => {
                            // Si l'image n'existe pas, affiche le placeholder
                            e.currentTarget.style.display = 'none';
                            const placeholder = e.currentTarget.nextElementSibling;
                            if (placeholder) placeholder.classList.remove('hidden');
                          }}
                        />
                        
                        {/* Screenshot placeholder (caché si image existe) */}
                        <div className="hidden">
                          <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-40`}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <screenshot.icon className="w-24 h-24 text-white/30" strokeWidth={1} />
                          </div>
                        </div>
                        
                        {/* Status bar */}
                        <div className="absolute top-0 left-0 right-0 px-6 py-2 flex items-center justify-between text-white text-xs z-20">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="w-4 h-3 border border-white rounded-sm"></div>
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                        </div>

                        {/* Bottom indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                      </div>

                      {/* Phone buttons */}
                      <div className="absolute right-0 top-20 w-1 h-12 bg-slate-700 rounded-l-lg"></div>
                      <div className="absolute right-0 top-36 w-1 h-16 bg-slate-700 rounded-l-lg"></div>
                      <div className="absolute left-0 top-24 w-1 h-8 bg-slate-700 rounded-r-lg"></div>
                    </div>

                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${screenshot.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300 -z-10`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Features Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-32 text-center"
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  And so much more...
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                {[
                  { label: 'Advanced dashboard', icon: '📊' },
                  { label: 'Custom overlay builder', icon: '🎨' },
                  { label: 'Personalized price alerts', icon: '🔔' },
                  { label: 'Progress tracking board', icon: '📈' },
                  { label: 'AI trading strategies', icon: '🤖' },
                  { label: 'Real-time backtesting', icon: '⚡' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <p className="text-gray-300 font-medium">{feature.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-16"
              >
                <a
                  href="/"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <Smartphone className="w-6 h-6" />
                  Download the App
                </a>
              </motion.div>
            </motion.div>

          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
