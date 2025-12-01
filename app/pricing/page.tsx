'use client';

import React from 'react';
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
    title: '🤖 OUTILS IA AVANCÉS',
    icon: Brain,
    features: [
      {
        name: 'AI Signals - Signaux de trading IA',
        details: [
          'Génération de signaux BUY/SELL/WAIT',
          'Analyse technique automatique (RSI, MACD, volume)',
          'Score de confiance 0-100%',
          'Prédictions de prix (court/moyen/long terme)',
          'Niveau de risque calculé',
          'Création automatique d\'alertes'
        ]
      },
      {
        name: 'Personalized AI - IA personnalisée',
        details: [
          'Assistant IA adapté à votre profil',
          'Recommandations personnalisées',
          'Analyse de votre style de trading'
        ]
      },
      {
        name: 'AI Backtesting - Test de stratégies',
        details: [
          'Backtesting automatique de stratégies',
          'Analyse de performance historique',
          'Optimisation de paramètres',
          'Métriques : Win rate, profit factor, drawdown'
        ]
      },
      {
        name: 'Stress Test - Test de résistance',
        details: [
          'Simulation de scénarios extrêmes',
          'Test de votre portefeuille en conditions de crise',
          'Analyse de risque'
        ]
      },
      {
        name: 'Sentiment Analysis - Analyse de sentiment',
        details: [
          'Analyse du sentiment du marché',
          'Détection de tendances sociales',
          'Score de sentiment positif/négatif'
        ]
      },
      {
        name: 'What-If Analysis - Scénarios',
        details: [
          'Simulation "Et si..."',
          'Prédiction d\'impact de changements',
          'Test de différents scénarios de trading'
        ]
      },
      {
        name: 'Voice Trading - Trading vocal',
        details: [
          'Commandes vocales pour trader',
          '"Acheter 0.5 BTC"',
          '"Vendre tout mon ETH"'
        ]
      },
      {
        name: 'Correlation Analysis - Corrélations',
        details: [
          'Analyse de corrélation entre actifs',
          'Détection de patterns de mouvements similaires',
          'Optimisation de portefeuille'
        ]
      },
      {
        name: 'Dark Pool Simulator - Simulation dark pool',
        details: [
          'Simulation de trading dark pool',
          'Analyse de liquidité cachée',
          'Détection d\'ordres massifs'
        ]
      }
    ]
  },
  {
    title: '📈 OUTILS D\'ANALYSE TECHNIQUE',
    icon: BarChart3,
    features: [
      {
        name: 'Scanner - Scanner de marché',
        details: [
          'Scan en temps réel de tous les actifs',
          'Filtres personnalisables',
          'Détection d\'opportunités'
        ]
      },
      {
        name: 'Screener IA - Filtrage intelligent',
        details: [
          'Filtrage par type d\'actif (Crypto, Forex, Actions)',
          'Filtrage par sentiment (Haussier, Baissier, Neutre)',
          'Volatilité (Faible, Moyenne, Élevée)',
          'Tendance (Haussière, Baissière, Sideways)',
          'Momentum, Volume, Market Cap',
          'Niveau de risque',
          'Score IA (0-100)'
        ]
      },
      {
        name: 'Indicator Models - Modèles d\'indicateurs',
        details: [
          '50+ combinaisons prédéfinies',
          'Scalping (RSI, VWAP, Force Index)',
          'Day Trading (EMA, MACD, Volume)',
          'Swing Trading (EMA 50/200, Bollinger)',
          'Tendance, Momentum, Volatilité',
          'RSI Divergence, MACD Crossover',
          'Support/Resistance'
        ]
      },
      {
        name: 'Multi-Asset Comparison - Comparaison multiple',
        details: [
          'Comparer jusqu\'à 4 actifs simultanément',
          'Graphiques superposés',
          'Analyse comparative de performance'
        ]
      },
      {
        name: 'Pattern Detection - Détection de patterns',
        details: [
          'Détection automatique de patterns graphiques',
          'Head & Shoulders, Triangles, Flags, Wedges',
          'Signaux de confirmation'
        ]
      },
      {
        name: 'Chart Indicators Panel - Panneau d\'indicateurs',
        details: [
          'RSI avec mini-graphique',
          'MACD (histogramme + lignes)',
          'EMA 20/50',
          'Volume 24h',
          'Interface style TradingView'
        ]
      }
    ]
  }
];

export default function Pricing() {
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
              <span className="text-sm text-gray-300">Plan Premium</span>
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
              Accédez à tous les outils IA et d&apos;analyse technique avancés pour devenir un trader professionnel.
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
                  <div className="text-gray-400 mb-6">par mois</div>
                  <Button className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 rounded-full py-6 text-lg font-semibold transition-all duration-300 hover:scale-105">
                    S'abonner maintenant
                  </Button>
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
                Prêt à devenir un trader professionnel ?
              </h2>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Rejoignez des milliers de traders qui utilisent nos outils IA pour améliorer leurs performances.
              </p>
              <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105">
                Commencer maintenant
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
