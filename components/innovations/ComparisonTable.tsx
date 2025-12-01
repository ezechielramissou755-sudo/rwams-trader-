'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown } from 'lucide-react';

const features = [
  { name: 'Simulation trading sans risque', rwams: true, others: true },
  { name: 'Outils IA avancés (9+)', rwams: true, others: false },
  { name: 'Prix abordable ($14.99/mois)', rwams: true, others: false },
  { name: 'Support IA personnalisé', rwams: true, others: false },
  { name: 'Backtesting automatique', rwams: true, others: true },
  { name: 'Analyse de sentiment en temps réel', rwams: true, others: false },
  { name: 'Voice Trading (commandes vocales)', rwams: true, others: false },
  { name: 'Dark Pool Simulator', rwams: true, others: false },
  { name: 'Formation gratuite incluse', rwams: true, others: false },
  { name: 'Application mobile', rwams: true, others: true },
  { name: 'Support 24/7', rwams: true, others: false },
  { name: 'Sans publicité', rwams: true, others: false },
];

export default function ComparisonTable() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Pourquoi Choisir
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              RWAMS Traders ?
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Comparez avec les autres plateformes
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
        >
          <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
            <div className="text-gray-400 text-sm font-semibold">Fonctionnalités</div>
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full px-4 py-2">
                <Crown className="w-4 h-4 text-white" />
                <span className="text-white font-bold">RWAMS</span>
              </div>
            </div>
            <div className="text-center text-gray-400 text-sm font-semibold">Autres</div>
          </div>

          <div className="divide-y divide-white/5">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-white/5 transition-colors"
              >
                <div className="text-gray-300 text-sm">{feature.name}</div>
                <div className="flex justify-center">
                  {feature.rwams ? (
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {feature.others ? (
                    <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center opacity-50">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 text-center">
            <p className="text-lg font-bold text-white mb-2">
              RWAMS Traders : La plateforme la plus complète
            </p>
            <p className="text-sm text-gray-400">
              100% des fonctionnalités avancées pour seulement $14.99/mois
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
