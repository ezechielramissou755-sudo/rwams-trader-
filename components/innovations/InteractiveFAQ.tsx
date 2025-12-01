'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "RWAMS Traders est-il vraiment sans risque ?",
    answer: "Oui, absolument ! Vous tradez avec de l'argent virtuel. Aucun risque pour votre capital réel. C'est parfait pour apprendre et pratiquer."
  },
  {
    question: "Combien coûte l'abonnement ?",
    answer: "Seulement $14.99/mois avec accès illimité à tous les 9 outils IA, formation gratuite, et support 24/7. Aucun frais caché !"
  },
  {
    question: "Les outils IA fonctionnent-ils vraiment ?",
    answer: "Nos outils IA sont alimentés par des algorithmes avancés d'apprentissage automatique. Ils analysent des millions de données en temps réel pour générer des signaux précis."
  },
  {
    question: "Puis-je utiliser RWAMS sur mobile ?",
    answer: "Oui ! Notre application Android (100 MB) est disponible en téléchargement. Version iOS en développement."
  },
  {
    question: "Y a-t-il une garantie de remboursement ?",
    answer: "Oui, satisfaction garantie 30 jours. Si vous n'êtes pas satisfait, nous vous remboursons intégralement, sans question."
  },
  {
    question: "Combien de temps faut-il pour apprendre ?",
    answer: "La plupart de nos utilisateurs maîtrisent les bases en 2-3 semaines. Avec nos outils IA, vous progressez 10x plus vite qu'avec les méthodes traditionnelles."
  },
  {
    question: "RWAMS est-il adapté aux débutants ?",
    answer: "Absolument ! Notre IA personnalisée s'adapte à votre niveau. Que vous soyez débutant ou expert, vous avez un parcours sur mesure."
  },
  {
    question: "Puis-je annuler mon abonnement à tout moment ?",
    answer: "Oui, vous pouvez annuler à tout moment en un clic. Aucun engagement à long terme, aucune pénalité."
  }
];

export default function InteractiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-gray-300">Questions fréquentes</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Vous avez des
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Questions ?
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-left hover:border-violet-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-violet-400" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-400 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Vous ne trouvez pas la réponse à votre question ?
          </p>
          <a
            href="mailto:contact@rwams-traders.com"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Contactez notre support
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
