'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Is RWAMS Traders really risk-free?",
    answer: "Absolutely. You trade with virtual money only—no risk for your real capital. Perfect for learning and practicing."
  },
  {
    question: "How much does the subscription cost?",
    answer: "$14.99/month with unlimited access to all 9 AI tools, included training, and 24/7 support. No hidden fees."
  },
  {
    question: "Do the AI tools actually work?",
    answer: "Our AI stack relies on advanced machine-learning models analyzing millions of data points in real time to deliver precise signals."
  },
  {
    question: "Can I use RWAMS on mobile?",
    answer: "Yes. Our Android app (100 MB) is ready to download today. iOS version is coming soon."
  },
  {
    question: "Is there a refund guarantee?",
    answer: "Yes, 30-day money-back guarantee. If you’re not satisfied, we refund you—no questions asked."
  },
  {
    question: "How long does it take to learn?",
    answer: "Most users master the basics within 2–3 weeks. With our AI tools you progress 10x faster than with traditional methods."
  },
  {
    question: "Is RWAMS good for beginners?",
    answer: "Definitely. Our personalized AI adapts to your level. Beginner or pro, you get a tailored journey."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, cancel in one click whenever you want. No long-term commitment, no penalties."
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
            <span className="text-sm text-gray-300">Frequently asked questions</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Got
            </span>
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Questions?
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
            Didn’t find the answer you need?
          </p>
          <a
            href="mailto:contact@rwams-trader.world"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
          >
            Contact our support team
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
