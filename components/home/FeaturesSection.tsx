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
    title: 'AI Signals - Signaux de trading IA',
    description: 'Génération automatique de signaux BUY/SELL/WAIT avec score de confiance 0-100% et analyse technique RSI, MACD, volume.',
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Target,
    title: 'Personalized AI - IA personnalisée',
    description: 'Assistant IA adapté à votre profil de trader avec recommandations personnalisées et analyse de votre style.',
    gradient: 'from-cyan-500 to-blue-500'
  },
  {
    icon: TrendingUp,
    title: 'AI Backtesting - Test de stratégies',
    description: 'Backtesting automatique de vos stratégies avec analyse de performance historique et optimisation de paramètres.',
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    icon: Shield,
    title: 'Stress Test - Test de résistance',
    description: 'Simulation de scénarios extrêmes et test de votre portefeuille en conditions de crise avec analyse de risque complète.',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    icon: Heart,
    title: 'Sentiment Analysis - Analyse de sentiment',
    description: 'Analyse du sentiment du marché en temps réel avec détection de tendances sociales et score positif/négatif.',
    gradient: 'from-emerald-500 to-green-500'
  },
  {
    icon: GitCompare,
    title: 'What-If Analysis - Scénarios',
    description: 'Simulation "Et si..." pour prédire l\'impact de changements et tester différents scénarios de trading.',
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Mic,
    title: 'Voice Trading - Trading vocal',
    description: 'Commandes vocales pour trader: "Acheter 0.5 BTC", "Vendre tout mon ETH". Trading mains libres avec IA.',
    gradient: 'from-red-500 to-pink-500'
  },
  {
    icon: Network,
    title: 'Correlation Analysis - Corrélations',
    description: 'Analyse de corrélation entre actifs, détection de patterns de mouvements similaires et optimisation de portefeuille.',
    gradient: 'from-teal-500 to-cyan-500'
  },
  {
    icon: Database,
    title: 'Dark Pool Simulator - Simulation dark pool',
    description: 'Simulation de trading dark pool avec analyse de liquidité cachée et détection d\'ordres massifs institutionnels.',
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
              Outils IA{' '}
            </span>
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Avancés
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Accédez à 9 outils d'intelligence artificielle puissants pour analyser, 
            prédire et optimiser vos stratégies de trading.
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
