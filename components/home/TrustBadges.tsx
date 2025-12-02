'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, TrendingUp, Users } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    { icon: Shield, label: 'Secured', description: 'Encrypted data' },
    { icon: Award, label: 'Investor-Ready', description: 'Certified startup' },
    { icon: TrendingUp, label: 'Fast growth', description: 'Rapid scaling' },
    { icon: Users, label: '100M+ Goal', description: 'Global vision' },
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 border border-violet-500/30 rounded-2xl flex items-center justify-center mb-3">
                <badge.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-sm font-semibold text-white">{badge.label}</div>
              <div className="text-xs text-gray-400">{badge.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
