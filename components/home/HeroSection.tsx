'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { ArrowRight, Download, Play, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import AIAnalytics from './AIAnalytics';

const stats = [
  { value: '0', label: 'Users', goal: 'Goal: 100M+' },
  { value: '0', label: 'Simulated trades', goal: 'Goal: 10M+' },
  { value: '0€', label: 'Risque', goal: 'Simulation 100% safe' },
];

export default function HeroSection() {
  const slides = [
    { n: '01', src: '/screenshots/ai-analysis.jpg', alt: 'AI analysis' },
    { n: '02', src: '/screenshots/dashboard.jpg', alt: 'Dashboard' },
    { n: '03', src: '/screenshots/trading.jpg', alt: 'Trading' },
  ] as const;

  const [active, setActive] = React.useState<(typeof slides)[number]>(slides[0]);

  return (
    <section className="relative overflow-hidden pt-28 pb-16">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 border border-white/10 bg-white/5"
            >
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-sm text-gray-200/90">Version 1.0.0</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-8 text-5xl md:text-7xl font-extrabold tracking-tight font-display"
            >
              <span className="text-white">Simulateur de</span>{" "}
              <span className="text-gradient">Trading Crypto</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-6 max-w-xl text-lg md:text-xl text-gray-300/85 leading-relaxed"
            >
              Apprends, teste et maîtrise tes stratégies avec un capital virtuel, sans risquer ton argent.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-10 flex flex-wrap items-center gap-5"
              id="download"
            >
              <a
                href="/app-release.apk"
                download
                className="group inline-flex items-center justify-center rounded-full border border-transparent px-10 py-7 text-lg font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-2xl shadow-violet-500/25 transition-transform hover:scale-[1.03]"
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger l'APK
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#features"
                aria-label="Découvrir"
                className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/18 bg-white/5 hover:bg-white/7 transition-colors"
              >
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 opacity-60 blur" />
                <Play className="relative h-6 w-6 text-white/90 translate-x-[1px]" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.32 }}
              className="mt-10 inline-flex items-center gap-3 rounded-full px-6 py-3 glass-strong"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <ShieldCheck className="w-5 h-5 text-emerald-300" />
              <span className="text-sm font-semibold text-white">100% sans risque</span>
              <span className="text-xs text-gray-300/80">Capital virtuel • Apprends & progresse</span>
            </motion.div>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* image card */}
              <div className="relative rounded-2xl p-[2px] [background:linear-gradient(90deg,rgba(139,92,246,.9),rgba(34,211,238,.9))] shadow-[0_24px_90px_-40px_rgba(139,92,246,0.7)]">
                <div className="rounded-2xl bg-black/70 border border-white/10 p-3">
                  <div className="relative h-44 w-44 sm:h-52 sm:w-52 overflow-hidden rounded-xl">
                    <motion.div
                      key={active.src}
                      initial={{ opacity: 0.2, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={active.src}
                        alt={active.alt}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* slide dots */}
              <div className="absolute -right-16 top-1/2 -translate-y-1/2 flex flex-col gap-6">
                {slides.map((s) => {
                  const isActive = s.n === active.n;
                  return (
                    <button
                      key={s.n}
                      type="button"
                      onClick={() => setActive(s)}
                      className={[
                        "h-14 w-14 rounded-full flex items-center justify-center text-sm font-semibold",
                        "transition-transform hover:scale-[1.03]",
                        "border border-white/12 bg-white/5 text-white/90",
                        isActive
                          ? "[background:linear-gradient(#000,#000)_padding-box,linear-gradient(90deg,rgba(139,92,246,.95),rgba(34,211,238,.95))_border-box] border-transparent"
                          : ""
                      ].join(' ')}
                      aria-label={`Slide ${s.n}`}
                    >
                      {s.n}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* footer line like the mockup */}
        <div className="mt-16 flex items-center justify-between text-sm text-gray-400/80">
          <span>2026 Présentation</span>
          <span className="hidden sm:inline">rwams-trader.world</span>
        </div>

        {/* Keep your existing content below (will be restyled later) */}
        <div id="features" className="mt-14">
          <AIAnalytics />
        </div>
      </div>
    </section>
  );
}
