'use client';

import React from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Shield, 
  Heart, 
  GitCompare,
  Mic,
  Network,
  Database
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Brain,
    title: 'AI Signals',
    description: 'Automatic BUY/SELL/WAIT alerts with 0-100% confidence score plus RSI, MACD and volume insights.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Target,
    title: 'Personalized AI',
    description: 'Assistant tailored to your trader profile with adaptive recommendations and style analysis.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'AI Backtesting',
    description: 'Run historical performance tests and parameter optimization on every strategy in minutes.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Stress Testing',
    description: 'Simulate extreme market scenarios and evaluate portfolio resilience with full risk analytics.',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Heart,
    title: 'Sentiment Analysis',
    description: 'Real-time market sentiment feed powered by social signals and positive/negative scoring.',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    icon: GitCompare,
    title: 'What-If Simulator',
    description: 'Experiment with “what if” scenarios to predict impact and validate multiple trading paths.',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Mic,
    title: 'Voice Trading',
    description: 'Hands-free commands such as “Buy 0.5 BTC” or “Sell all my ETH” executed by the AI assistant.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Network,
    title: 'Correlation Radar',
    description: 'Spot asset correlations, similar movement patterns, and balance your portfolio instantly.',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Dark Pool Simulator',
    description: 'Model institutional-scale orders, hidden liquidity, and dark pool flows before going live.',
    gradient: 'from-slate-600 to-gray-700'
  }
];

export default function FeaturesSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Advanced{' '}
            </span>
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              AI Toolkit
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Access nine powerful AI capabilities to analyze, predict, and optimize every single trading decision.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full hover:border-violet-500/30 transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-bl-full`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
