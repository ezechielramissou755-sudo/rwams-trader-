'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const predefinedAnswers = [
  { 
    keywords: ['price', 'cost', 'subscription', 'pricing'],
    answer: "Our plan is just $14.99/month with access to every AI tool!"
  },
  {
    keywords: ['features', 'tools', 'capabilities'],
    answer: "We provide 9 AI modules: trading signals, personalized AI, backtesting, stress tests, sentiment analysis, and more!"
  },
  {
    keywords: ['invest', 'investor', 'funding'],
    answer: "Visit our Investors page to explore the growth potential and business model!"
  },
  {
    keywords: ['download', 'app', 'apk'],
    answer: "Our Android app (100 MB, version 1.0.0) is available for download on the home page!"
  },
  {
    keywords: ['contact', 'email', 'phone'],
    answer: "Reach us at contact@rwams-traders.com or +225 05 46 10 09 20"
  },
];

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi there! 👋 I\'m the RWAMS assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { type: 'user', text: input }];
    
    // Find matching answer
    const lowerInput = input.toLowerCase();
    let answer = "Thanks for your question! For more details, email contact@rwams-traders.com";
    
    for (const qa of predefinedAnswers) {
      if (qa.keywords.some(keyword => lowerInput.includes(keyword))) {
        answer = qa.answer;
        break;
      }
    }

    // Add bot response
    setTimeout(() => {
      setMessages([...newMessages, { type: 'bot', text: answer }]);
    }, 500);

    setMessages(newMessages);
    setInput('');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-violet-500/50 transition-shadow"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 left-6 z-50 w-96 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-600 to-cyan-600 p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-white">RWAMS Assistant</div>
                <div className="text-xs text-white/70">Online • Replies instantly</div>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.type === 'user'
                        ? 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white'
                        : 'bg-slate-800 text-gray-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask your question..."
                  className="flex-1 bg-slate-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <button
                  onClick={handleSend}
                  className="w-10 h-10 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
