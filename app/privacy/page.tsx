'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Database, TrendingUp, Users, AlertCircle, Mail } from 'lucide-react';

const sections = [
  {
    icon: Shield,
    title: '1. Introduction',
    content: 'RWams Trader est un simulateur de trading éducatif. Cette politique explique comment nous collectons, utilisons et protégeons vos informations.'
  },
  {
    icon: TrendingUp,
    title: '2. Type d\'Application',
    content: 'RWams Trader est un SIMULATEUR DE TRADING. Aucune transaction réelle n\'est effectuée et aucun argent réel n\'est impliqué.',
    highlight: true
  },
  {
    icon: Database,
    title: '3. Données Collectées',
    content: 'Nous pouvons collecter les données suivantes :',
    list: [
      'Informations de profil (nom, email)',
      'Préférences d\'application (thème, langue)',
      'Données biométriques (empreinte digitale) utilisées uniquement pour la sécurité — stockées localement sur votre appareil',
      'Données de marché récupérées auprès de services tiers (voir section 6)'
    ]
  },
  {
    icon: Eye,
    title: '4. Utilisation des Données',
    content: 'Les données collectées servent à :',
    list: [
      'Fournir les fonctionnalités de l\'application',
      'Personnaliser votre expérience',
      'Améliorer l\'application',
      'Sécuriser l\'accès à l\'application'
    ]
  },
  {
    icon: Lock,
    title: '5. Sécurité',
    content: 'Mesures de sécurité mises en place :',
    list: [
      'Vos données personnelles (profil, préférences) sont stockées localement et/ou sur des serveurs sécurisés',
      'L\'application communique avec des API tierces pour récupérer des données de marché en temps réel (voir section 6)',
      'Les données biométriques restent exclusivement sur votre appareil'
    ]
  },
  {
    icon: TrendingUp,
    title: '6. Données de Trading',
    content: 'Important à savoir concernant les opérations :',
    list: [
      'Toutes les opérations de trading sont simulées et n\'impliquent aucun argent réel',
      'Les données de marché (prix, graphiques) sont fournies par des services tiers tels que CoinGecko et Finnhub pour garantir un réalisme maximal',
      'L\'application ne se connecte jamais à vos comptes de courtage personnels'
    ]
  },
  {
    icon: Users,
    title: '7. Partage de Données',
    content: 'Nous ne partageons aucune donnée personnelle avec des tiers.'
  },
  {
    icon: FileText,
    title: '8. Vos Droits',
    content: 'En utilisant RWams Trader, vous disposez des droits suivants :',
    list: [
      'Accéder à vos données',
      'Modifier vos informations',
      'Supprimer votre compte',
      'Désactiver les fonctionnalités biométriques'
    ]
  },
  {
    icon: Mail,
    title: '9. Contact',
    content: 'Pour toute question concernant cette politique :',
    contact: 'support@rwamstrader.com'
  }
];

export default function Privacy() {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
              <Shield className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Vos données en sécurité</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Politique de
              </span>{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Confidentialité
              </span>
            </h1>
            
            <p className="text-xl text-gray-400">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </motion.div>

          {/* Content sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`backdrop-blur-sm border rounded-2xl p-8 ${
                  section.highlight 
                    ? 'bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border-violet-500/30' 
                    : 'bg-slate-900/50 border-white/10'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    section.highlight
                      ? 'bg-gradient-to-br from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50'
                      : 'bg-gradient-to-br from-violet-500 to-cyan-500'
                  }`}>
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className={`text-2xl font-bold mb-4 ${
                      section.highlight ? 'text-white' : 'text-white'
                    }`}>
                      {section.title}
                    </h2>
                    <p className={`leading-relaxed mb-3 ${
                      section.highlight ? 'text-gray-200 font-medium' : 'text-gray-400'
                    }`}>
                      {section.content}
                    </p>
                    
                    {section.list && (
                      <ul className="space-y-2 mt-4">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-cyan-400 mt-1 font-bold">•</span>
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {section.contact && (
                      <div className="mt-4">
                        <a
                          href={`mailto:${section.contact}`}
                          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                        >
                          {section.contact}
                          <span>→</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Educational Simulator Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/40 rounded-3xl p-10 text-center"
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-green-500/10 animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-6 shadow-lg shadow-green-500/50">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ✅ SIMULATEUR ÉDUCATIF
              </h2>
              
              <div className="max-w-3xl mx-auto">
                <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed">
                  RWams Trader est conçu <span className="text-green-400 font-bold">uniquement à des fins d&apos;apprentissage et de formation</span>. 
                </p>
                <p className="text-lg md:text-xl text-gray-200 font-medium leading-relaxed mt-3">
                  Aucune fonctionnalité ne permet d&apos;investir ou de perdre de l&apos;argent réel.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                  <span className="text-green-400">✓</span>
                  <span>100% Simulé</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                  <span className="text-green-400">✓</span>
                  <span>Aucun Risque Financier</span>
                </div>
                <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full">
                  <span className="text-green-400">✓</span>
                  <span>Formation Sécurisée</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">
              Des questions concernant notre politique de confidentialité ?
            </p>
            <div className="flex flex-col gap-3 items-center">
              <a
                href="mailto:support@rwamstrader.com"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                support@rwamstrader.com
                <span>→</span>
              </a>
              <a
                href="tel:+2250502250473"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                +225 05 02 25 04 73
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
      </div>
    </div>
  );
}
