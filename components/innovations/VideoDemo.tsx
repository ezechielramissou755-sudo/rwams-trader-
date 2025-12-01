'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Découvrez RWAMS
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              En Action
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            Regardez comment notre plateforme transforme le trading simulé
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Video Container */}
          <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden border border-white/10">
            {!isPlaying ? (
              <>
                {/* Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-900/50 to-cyan-900/50 flex items-center justify-center">
                  {/* Play Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                    className="w-24 h-24 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 hover:shadow-violet-500/80 transition-shadow"
                  >
                    <Play className="w-10 h-10 text-white ml-2" fill="white" />
                  </motion.button>

                  {/* Floating elements */}
                  <div className="absolute top-8 left-8 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-2">
                    <div className="text-sm text-white font-semibold">Démo 2:30</div>
                  </div>

                  <div className="absolute bottom-8 right-8 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 rounded-2xl px-4 py-2">
                    <div className="text-sm text-emerald-400 font-semibold">
                      ⚡ Aperçu des fonctionnalités IA
                    </div>
                  </div>
                </div>

                {/* Animated gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-cyan-500 to-violet-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>
              </>
            ) : (
              <>
                {/* Embedded video or placeholder */}
                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 border-4 border-violet-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Chargement de la vidéo...</p>
                    <p className="text-xs text-gray-500 mt-2">
                      (Intégrez votre vidéo YouTube/Vimeo ici)
                    </p>
                  </div>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center z-10 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </>
            )}
          </div>

          {/* Stats below video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-6 mt-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                2:30
              </div>
              <div className="text-sm text-gray-400">Durée de la démo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                9+
              </div>
              <div className="text-sm text-gray-400">Outils présentés</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <div className="text-sm text-gray-400">Sans risque</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
