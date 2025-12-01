'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "RWAMS Traders a complètement changé ma façon d'apprendre le trading. L'IA est incroyablement précise !",
    author: "Alpha Diallo",
    role: "Trader, Abidjan",
    rating: 5
  },
  {
    quote: "Enfin une plateforme qui nous permet d'apprendre sans risquer notre capital. Parfait pour débutants.",
    author: "Marie Kouassi",
    role: "Étudiante en Finance",
    rating: 5
  },
  {
    quote: "Les outils IA sont d'un niveau professionnel. C'est le futur de l'éducation au trading.",
    author: "Jean-Baptiste N.",
    role: "Investisseur",
    rating: 5
  }
];

const pressLogos = [
  { name: 'TechCrunch', width: 'w-32' },
  { name: 'Forbes Africa', width: 'w-28' },
  { name: 'Bloomberg', width: 'w-32' },
  { name: 'Financial Times', width: 'w-36' },
];

export default function PressSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Press Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-gray-400 mb-8">Comme vu dans</p>
          <div className="flex flex-wrap items-center justify-center gap-12 opacity-50">
            {pressLogos.map((logo, index) => (
              <div key={index} className={`${logo.width} h-8 bg-gray-700/30 rounded flex items-center justify-center text-xs text-gray-500`}>
                {logo.name}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ce que disent nos
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Premiers Utilisateurs
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
            >
              <Quote className="w-10 h-10 text-violet-400 mb-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
