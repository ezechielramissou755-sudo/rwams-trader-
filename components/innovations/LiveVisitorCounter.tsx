'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Eye, Globe } from 'lucide-react';

export default function LiveVisitorCounter() {
  const [visitors, setVisitors] = useState(1247);
  const [viewing, setViewing] = useState(23);
  const [countries, setCountries] = useState(47);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate real-time updates
      setVisitors(prev => prev + Math.floor(Math.random() * 3));
      setViewing(prev => Math.max(15, prev + Math.floor(Math.random() * 5) - 2));
      if (Math.random() > 0.9) {
        setCountries(prev => Math.min(100, prev + 1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-24 right-6 z-40">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl"
      >
        <div className="text-xs text-gray-400 mb-3 flex items-center gap-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          LIVE STATS
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-violet-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-violet-400" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Total Visiteurs</div>
              <motion.div 
                key={visitors}
                initial={{ scale: 1.2, color: '#22d3ee' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="text-lg font-bold"
              >
                {visitors.toLocaleString()}
              </motion.div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Eye className="w-4 h-4 text-cyan-400" />
            </div>
            <div>
              <div className="text-xs text-gray-400">En ligne maintenant</div>
              <motion.div 
                key={viewing}
                initial={{ scale: 1.2, color: '#22d3ee' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="text-lg font-bold"
              >
                {viewing}
              </motion.div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
              <Globe className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="text-xs text-gray-400">Pays</div>
              <motion.div 
                key={countries}
                initial={{ scale: 1.2, color: '#22d3ee' }}
                animate={{ scale: 1, color: '#ffffff' }}
                className="text-lg font-bold"
              >
                {countries}
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
