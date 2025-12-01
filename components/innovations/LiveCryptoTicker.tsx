'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const cryptos = [
  { symbol: 'BTC', name: 'Bitcoin', price: 44084, change: 2.45 },
  { symbol: 'ETH', name: 'Ethereum', price: 1616, change: -1.23 },
  { symbol: 'SOL', name: 'Solana', price: 99.24, change: 5.67 },
  { symbol: 'BNB', name: 'Binance', price: 312.45, change: 3.21 },
  { symbol: 'XRP', name: 'Ripple', price: 0.58, change: -0.89 },
  { symbol: 'ADA', name: 'Cardano', price: 0.42, change: 1.56 },
];

export default function LiveCryptoTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cryptos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const crypto = cryptos[currentIndex];
  const isPositive = crypto.change > 0;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.div
        key={currentIndex}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: -20 }}
        className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl min-w-[200px]"
      >
        <div className="flex items-center justify-between mb-2">
          <div>
            <div className="text-xs text-gray-400">LIVE</div>
            <div className="font-bold text-white">{crypto.symbol}</div>
            <div className="text-xs text-gray-500">{crypto.name}</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-white">
              ${crypto.price.toLocaleString()}
            </div>
            <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              {isPositive ? '+' : ''}{crypto.change}%
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"></div>
      </motion.div>
    </div>
  );
}
