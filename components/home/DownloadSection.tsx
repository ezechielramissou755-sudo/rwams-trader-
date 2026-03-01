'use client';

import React from 'react';
import { Download, Smartphone, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  'Fast and simple installation',
  'Android 8.0+ compatible',
  'Automatic updates',
  '24/7 technical support',
  'Encrypted & secured data'
];

export default function DownloadSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-4 py-2 mb-6">
              <Smartphone className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Android app</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Download
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                RWAMS Traders
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Get the app today and start mastering trading. 100% free, zero risk.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{benefit}</span>
                </motion.li>
              ))}
            </ul>

            {/* Download button */}
            <a
              href="/app-release.apk"
              download
              className="inline-flex items-center bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 px-10 py-7 text-lg rounded-2xl shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 hover:scale-105 group"
            >
              <Download className="w-6 h-6 mr-3" />
              Download APK
            </a>

            <p className="text-gray-500 text-sm mt-4">
              Version 1.0.0 • 70 MB • Android 8.0+
            </p>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-[3rem] blur-3xl opacity-30 scale-110" />
              
              {/* Phone frame */}
              <div className="relative">
                <div className="bg-gradient-to-b from-slate-700 to-slate-900 rounded-[3rem] p-3 border border-white/20 shadow-2xl">
                  <div className="w-72 h-[550px] bg-slate-950 rounded-[2.5rem] overflow-hidden relative">
                    {/* Screen content - Real app screenshot - Crypto prices */}
                    <img
                      src="/phone-crypto.jpg"
                      alt="RWAMS Traders - Prix en temps réel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl px-4 py-2 shadow-lg animate-bounce">
                  <span className="text-white font-bold">+15.3%</span>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl px-4 py-2 shadow-lg animate-pulse">
                  <span className="text-white font-bold">LIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
