'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface TeamMember {
  name: string;
  title: string;
  role: string;
  image: string;
  description: string;
}

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-violet-500/30 transition-all duration-500">
        {/* Image */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          {/* Role badge */}
          <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {member.role}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-bold text-white mb-1">
            {member.name}
          </h3>
          <p className="text-cyan-400 font-medium mb-4">
            {member.title}
          </p>
          <p className="text-gray-400 leading-relaxed">
            {member.description}
          </p>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-br-full" />
      </div>
    </motion.div>
  );
}
