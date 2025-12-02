'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamCard from '@/components/team/TeamCard';
import { motion } from 'framer-motion';
import { Users, Target, Rocket } from 'lucide-react';


const teamMembers = [
  {
    name: 'Ezechiel Ramissou',
    title: 'CEO & Founder',
    role: 'Leadership',
    image: 'https://ui-avatars.com/api/?name=Ezechiel+Ramissou&size=400&background=8b5cf6&color=fff&bold=true',
    description: 'Visionary leader steering RWAMS Traders with a clear mission to democratize trading education.'
  },
  {
    name: 'Prince Nonka',
    title: 'COO',
    role: 'Operations',
    image: 'https://ui-avatars.com/api/?name=Prince+Nonka&size=400&background=06b6d4&color=fff&bold=true',
    description: 'Prince oversees daily operations and ensures outstanding service for our community.'
  },
  {
    name: 'Samakassi Zoumana',
    title: 'General Secretary',
    role: 'Administration',
    image: 'https://ui-avatars.com/api/?name=Samakassi+Zoumana&size=400&background=a855f7&color=fff&bold=true',
    description: 'Zoumana coordinates administrative activities and keeps the organization running smoothly.'
  },
  {
    name: 'Trabi Ange',
    title: 'Product Director',
    role: 'Product',
    image: 'https://ui-avatars.com/api/?name=Trabi+Ange&size=400&background=22d3ee&color=fff&bold=true',
    description: 'Ange continuously designs and enhances the user experience of our simulator platform.'
  },
  {
    name: 'Kouame Junior',
    title: 'Technical Director',
    role: 'Technology',
    image: 'https://ui-avatars.com/api/?name=Kouame+Junior&size=400&background=7c3aed&color=fff&bold=true',
    description: 'Kouame Junior leads the engineering team and architects the innovative solutions powering RWAMS Traders.'
  },
  {
    name: 'Kouame Tresor',
    title: 'Department Director',
    role: 'Marketing',
    image: 'https://ui-avatars.com/api/?name=Kouame+Tresor&size=400&background=0891b2&color=fff&bold=true',
    description: 'Kouame Tresor drives marketing strategy and builds RWAMS Traders’ global brand awareness.'
  }
];


const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'Make trading accessible to everyone with a realistic, educational simulation platform.'
  },
  {
    icon: Rocket,
    title: 'Our Vision',
    description: 'Become the global benchmark for trading education and simulation.'
  },
  {
    icon: Users,
    title: 'Our Values',
    description: 'Innovation, excellence, integrity, and commitment to our trading community.'
  }
];


export default function Team() {
  return (
    <div className="bg-black font-sans antialiased text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full px-6 py-2 mb-6">
              <Users className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">The team behind RWAMS</span>
            </div>


            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our
              </span>{' '}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate professionals working every day to deliver the best simulated trading experience.
            </p>
          </motion.div>


          {/* Values section */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>


          {/* Team grid */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Meet the team
            </span>
          </motion.h2>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      </div>
    </div>
  );
}
