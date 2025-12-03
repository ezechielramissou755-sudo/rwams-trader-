'use client';

import React, { useState } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  Check, 
  Crown, 
  TrendingUp, 
  Brain,
  BarChart3,
  Zap,
  Shield,
  Mic,
  GitCompare,
  ScanLine
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const featureCategories = [
  {
    title: '🤖 ADVANCED AI TOOLS',
    icon: Brain,
    features: [
      {
        name: 'AI Signals - AI trading signals',
        details: [
          'Generate BUY/SELL/WAIT signals',
          'Automated technical analysis (RSI, MACD, volume)',
          'Confidence score 0-100%',
          'Price predictions (short/mid/long term)',
          'Calculated risk level',
          'Automatic alert creation'
        ]
      },
      {
        name: 'Personalized AI - Custom AI assistant',
        details: [
          'AI assistant tailored to your profile',
          'Personalized recommendations',
          'Analysis of your trading style'
        ]
      },
      {
        name: 'AI Backtesting - Strategy testing',
        details: [
          'Automatic strategy backtesting',
          'Historical performance analysis',
          'Parameter optimization',
          'Metrics: win rate, profit factor, drawdown'
        ]
      },
      {
        name: 'Stress Test - Resilience testing',
        details: [
          'Simulate extreme scenarios',
          'Test your portfolio in crisis conditions',
          'Risk analysis'
        ]
      },
      {
        name: 'Sentiment Analysis - Market sentiment',
        details: [
          'Market sentiment analysis',
          'Detect social trends',
          'Positive/negative sentiment score'
        ]
      },
      {
        name: 'What-If Analysis - Scenario planning',
        details: [
          '“What if” simulations',
          'Predict impact of changes',
          'Test different trading scenarios'
        ]
      },
      {
        name: 'Voice Trading - Voice commands',
        details: [
          'Trade with voice commands',
          '“Buy 0.5 BTC”',
          '“Sell all my ETH”'
        ]
      },
      {
        name: 'Correlation Analysis - Asset correlations',
        details: [
          'Correlation analysis between assets',
          'Detect similar movement patterns',
          'Portfolio optimization'
        ]
      },
      {
        name: 'Dark Pool Simulator - Dark pool trading',
        details: [
          'Dark pool trading simulation',
          'Hidden liquidity analysis',
          'Detection of massive orders'
        ]
      }
    ]
  },
  {
    title: '📈 TECHNICAL ANALYSIS TOOLS',
    icon: BarChart3,
    features: [
      {
        name: 'Scanner - Market scanner',
        details: [
          'Real-time scan across all assets',
          'Customizable filters',
          'Opportunity detection'
        ]
      },
      {
        name: 'AI Screener - Intelligent filtering',
        details: [
          'Filter by asset type (Crypto, Forex, Stocks)',
          'Filter by sentiment (Bullish, Bearish, Neutral)',
          'Volatility (Low, Medium, High)',
          'Trend (Uptrend, Downtrend, Sideways)',
          'Momentum, volume, market cap',
          'Risk level',
          'AI score (0-100)'
        ]
      },
      {
        name: 'Indicator Models - Indicator packs',
        details: [
          '50+ prebuilt combinations',
          'Scalping (RSI, VWAP, Force Index)',
          'Day trading (EMA, MACD, Volume)',
          'Swing trading (EMA 50/200, Bollinger)',
          'Trend, momentum, volatility',
          'RSI divergence, MACD crossover',
          'Support/resistance'
        ]
      },
      {
        name: 'Multi-Asset Comparison - Compare assets',
        details: [
          'Compare up to 4 assets simultaneously',
          'Overlay charts',
          'Compare performance'
        ]
      },
      {
        name: 'Pattern Detection - Chart patterns',
        details: [
          'Automatic chart pattern detection',
          'Head & Shoulders, Triangles, Flags, Wedges',
          'Confirmation signals'
        ]
      },
      {
        name: 'Chart Indicators Panel - Indicator panel',
        details: [
          'RSI with mini chart',
          'MACD (histogram + lines)',
          'EMA 20/50',
          '24h volume',
          'TradingView-style interface'
        ]
      }
    ]
  }
];

export default function Pricing() {
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribeClick = () => {
    setSubscribeMessage('Toutes les fonctionnalités RWAMS Traders sont actuellement gratuites. Profitez-en dès maintenant !');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <AnimatedBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
              <Crown className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Premium plan</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                RWAMS Traders
              </span>
              <br />
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Premium
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Unlock every advanced AI and technical analysis tool to become a professional trader.
            </p>

            {/* Price Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-sm mx-auto"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-violet-500/50 rounded-3xl p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Crown className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    $14.99
                  </div>
                  <div className="text-gray-400 mb-6">per month</div>
                  <Button
                    className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105"
                    onClick={handleSubscribeClick}
                  >
                    Subscribe now
                  </Button>
                  {subscribeMessage && (
                    <p className="mt-4 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl px-4 py-3">
                      {subscribeMessage}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Features Categories */}
          <div className="mt-20 space-y-12">
            {featureCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              >
                <div className="mb-8 flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all group"
                    >
                      <h3 className="text-lg font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                        {feature.name}
                      </h3>
                      <ul className="space-y-2">
                        {feature.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 text-center"
          >
            <div className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-3xl p-12">
              <Crown className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to become a professional trader?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Join thousands of traders who rely on our AI tools to boost their performance.
              </p>
              <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Get started now
                <span className="ml-2">→</span>
              </Button>
            </div>
          </motion.div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
}
