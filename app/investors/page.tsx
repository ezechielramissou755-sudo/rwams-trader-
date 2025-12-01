'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Users, 
  Globe, 
  Rocket,
  Download,
  Mail,
  Shield,
  Award,
  BarChart3,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const metrics = [
  { label: 'Marché Adressable (TAM)', value: '$50B', description: 'Marché mondial du trading' },
  { label: 'Marché Ciblé (SAM)', value: '$5B', description: 'Trading simulé & éducation' },
  { label: 'Objectif 2026', value: '$10M', description: 'Revenus annuels récurrents' },
  { label: 'Utilisateurs cible', value: '100M+', description: 'Base utilisateurs projetée' },
];

const roadmap = [
  { quarter: 'Q1 2025', title: 'Lancement MVP', status: 'in-progress', items: ['Version 1.0.0', 'Lancement mondial', '1K utilisateurs'] },
  { quarter: 'Q2 2025', title: 'Expansion', status: 'planned', items: ['10+ pays', '50K utilisateurs', 'Partenariats brokers'] },
  { quarter: 'Q3 2025', title: 'Scaling', status: 'planned', items: ['IA avancée', '500K utilisateurs', '$500K MRR'] },
  { quarter: 'Q4 2025', title: 'International', status: 'planned', items: ['100+ pays', '5M utilisateurs', '$5M MRR'] },
];

const advantages = [
  { icon: Target, title: 'First Mover Advantage', description: 'Plateforme de trading simulé avec IA la plus avancée' },
  { icon: DollarSign, title: 'Modèle Récurrent', description: '$14.99/mois par utilisateur = revenus prévisibles' },
  { icon: Users, title: 'Marché Massif', description: '500M+ traders potentiels dans le monde' },
  { icon: Shield, title: 'Barrières à l\'entrée', description: 'Technologie IA propriétaire + dataset unique' },
  { icon: Globe, title: 'Scalabilité', description: 'Coûts marginaux proches de zéro' },
  { icon: Rocket, title: 'Traction Early', description: 'Stratégie go-to-market validée' },
];

const revenueCalculator = [
  { users: '1K', monthly: '$14,990', yearly: '$179,880' },
  { users: '10K', monthly: '$149,900', yearly: '$1,798,800' },
  { users: '100K', monthly: '$1,499,000', yearly: '$17,988,000' },
  { users: '1M', monthly: '$14,990,000', yearly: '$179,880,000' },
];

export default function Investors() {
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
            
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
                <Rocket className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Opportunité d&apos;investissement</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Investissez dans
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  l&apos;Avenir du Trading
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                RWAMS Traders révolutionne l&apos;éducation au trading avec l&apos;IA. 
                Rejoignez-nous dans notre mission de démocratiser le trading pour 100M+ personnes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 px-8 py-6 text-lg rounded-2xl">
                  <Mail className="w-5 h-5 mr-2" />
                  Contactez-nous
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-2xl">
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger Pitch Deck
                </Button>
              </div>
            </motion.div>

            {/* Metrics Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
            >
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-400">{metric.description}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Problem → Solution */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Le Problème & Notre Solution
                </span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-3xl">❌</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Le Problème</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>95% des traders débutants perdent leur argent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Formation coûteuse et inaccessible ($1000+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Manque d&apos;outils IA pour débutants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">•</span>
                      <span>Peur de perdre de l&apos;argent réel</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-8">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <span className="text-3xl">✅</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Notre Solution</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Simulation 100% sans risque avec capital virtuel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Abonnement accessible : seulement $14.99/mois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>9 outils IA avancés pour apprendre rapidement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                      <span>Apprendre sans peur, maîtriser avec confiance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Revenue Calculator */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Potentiel de Revenus
                </span>
              </h2>
              <p className="text-gray-400 text-center mb-12">Modèle d&apos;abonnement récurrent à $14.99/mois</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {revenueCalculator.map((tier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-2xl p-6 hover:border-violet-500/50 transition-all"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{tier.users}</div>
                    <div className="text-sm text-gray-400 mb-4">utilisateurs</div>
                    <div className="border-t border-white/10 pt-4">
                      <div className="text-sm text-gray-400">Revenus mensuels</div>
                      <div className="text-2xl font-bold text-cyan-400">{tier.monthly}</div>
                      <div className="text-sm text-gray-400 mt-3">Revenus annuels</div>
                      <div className="text-xl font-bold text-violet-400">{tier.yearly}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Roadmap */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Roadmap 2025
                </span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {roadmap.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className={`bg-slate-900/50 backdrop-blur-sm border ${phase.status === 'in-progress' ? 'border-emerald-500/50' : 'border-white/10'} rounded-2xl p-6`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${phase.status === 'in-progress' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-500/20 text-gray-400'}`}>
                        {phase.status === 'in-progress' ? '🔄 En cours' : '📍 Planifié'}
                      </div>
                      <div className="text-sm text-cyan-400 mb-2">{phase.quarter}</div>
                      <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-violet-400 mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Competitive Advantages */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Avantages Compétitifs
                </span>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{advantage.title}</h3>
                    <p className="text-gray-400 text-sm">{advantage.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center bg-gradient-to-br from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-3xl p-12"
            >
              <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Prêt à Investir dans RWAMS Traders ?
                </span>
              </h2>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Rejoignez-nous pour révolutionner l&apos;éducation au trading en Afrique et dans le monde.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 px-10 py-6 text-lg rounded-2xl">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@rwams-traders.com
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-2xl">
                  +225 05 02 25 04 73
                </Button>
              </div>
            </motion.div>

          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
}
