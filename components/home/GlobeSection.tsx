'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Target } from 'lucide-react';

export default function GlobeSection() {
  useEffect(() => {
    // Script to load and initialize the 3D globe
    const globeScript = document.createElement('script');
    globeScript.type = 'module';
    globeScript.textContent = `
      import createGlobe from 'https://cdn.skypack.dev/cobe';

      let phi = 0;
      let canvas = document.getElementById("rwams-globe");

      if (canvas && !canvas.getAttribute('data-globe-initialized')) {
        canvas.setAttribute('data-globe-initialized', 'true');
        
        const globe = createGlobe(canvas, {
          devicePixelRatio: 2,
          width: 1000,
          height: 1000,
          phi: 0,
          theta: 0.3,
          dark: 1,
          diffuse: 1.2,
          scale: 1,
          mapSamples: 16000,
          mapBrightness: 6,
          baseColor: [0.3, 0.3, 0.9],
          markerColor: [0.6, 0.3, 1],
          glowColor: [0.4, 0.2, 1],
          offset: [0, 0],
          markers: [
            { location: [48.8566, 2.3522], size: 0.05 },      // Paris
            { location: [40.7128, -74.006], size: 0.08 },     // New York
            { location: [51.5074, -0.1278], size: 0.06 },     // London
            { location: [35.6762, 139.6503], size: 0.07 },    // Tokyo
            { location: [5.3600, -4.0083], size: 0.1 },       // Abidjan (Ivory Coast) - Largest marker
            { location: [-33.8688, 151.2093], size: 0.05 },   // Sydney
            { location: [55.7558, 37.6173], size: 0.05 },     // Moscow
            { location: [-23.5505, -46.6333], size: 0.05 },   // São Paulo
            { location: [1.3521, 103.8198], size: 0.05 },     // Singapore
            { location: [25.2048, 55.2708], size: 0.06 },     // Dubai
          ],
          onRender: (state) => {
            state.phi = phi;
            phi += 0.003;
          },
        });
      }
    `;
    
    document.body.appendChild(globeScript);

    return () => {
      const scripts = document.querySelectorAll('script[type="module"]');
      scripts.forEach(s => {
        if (s.textContent?.includes('rwams-globe')) {
          s.remove();
        }
      });
      const canvas = document.getElementById("rwams-globe");
      if (canvas) {
        canvas.removeAttribute('data-globe-initialized');
      }
    };
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-violet-950/20 to-black"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-8">
              <Target className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Our Global Mission</span>
            </div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="block text-white mb-2">Our Goal:</span>
              <span className="block bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Go global
              </span>
              <span className="block text-white/90 text-4xl mt-2">
                with RWAMS Traders
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              From Africa to the rest of the world, RWAMS Traders is sparking a simulated-trading revolution.
              Be among the first to join the global adventure.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  0
                </div>
                <div className="text-sm text-gray-400">Current traders</div>
                <div className="text-xs text-cyan-400 mt-1">→ Goal: 100M+</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  1
                </div>
                <div className="text-sm text-gray-400">Country (Ivory Coast)</div>
                <div className="text-xs text-cyan-400 mt-1">→ Goal: 100+</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span className="text-gray-400">
                <span className="text-violet-400 font-semibold">Launch incoming</span> – get ready for worldwide expansion
              </span>
            </div>
          </motion.div>

          {/* Globe 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-cyan-500/30 rounded-full blur-3xl scale-110"></div>
              
              {/* Globe Container */}
              <div className="relative h-[500px] w-[500px] mx-auto">
                <canvas
                  id="rwams-globe"
                  style={{ width: '500px', height: '500px' }}
                  width="1000"
                  height="1000"
                  className="relative z-10"
                ></canvas>
              </div>

              {/* Floating info cards */}
              <div className="absolute top-10 -left-10 bg-slate-900/80 backdrop-blur-sm border border-violet-500/30 rounded-2xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-400">Abidjan, CI</div>
                    <div className="text-sm font-semibold text-white">🇨🇮 QG Principal</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-20 -right-10 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-4 animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
                  <div>
                    <div className="text-xs text-gray-400">Worldwide</div>
                    <div className="text-sm font-semibold text-white">🌍 Expansion</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
