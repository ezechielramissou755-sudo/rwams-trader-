'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const [isMounted, setIsMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
    xAnimation: number;
  }>>([]);
  const [orbs, setOrbs] = useState<Array<{
    id: number;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
  }>>([]);

  useEffect(() => {
    // Initialize particles only on client side
    setParticles(Array.from({ length: 10 }, (_, i) => ({
      id: i,
      size: Math.random() * 8 + 4,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      xAnimation: Math.random() * 20 - 10,
    })));

    setOrbs(Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      width: Math.random() * 150 + 100,
      height: Math.random() * 150 + 100,
      color: i % 2 === 0 ? 'rgba(139, 92, 246, 0.15)' : 'rgba(6, 182, 212, 0.15)',
    })));

    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[2] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: `radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(6, 182, 212, 0.3))`,
            filter: 'blur(1px)',
            willChange: 'transform',
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xAnimation, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Larger glowing orbs */}
      {orbs.map((orb, i) => (
        <motion.div
          key={`orb-${orb.id}`}
          className="absolute rounded-full"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: orb.width,
            height: orb.height,
            background: `radial-gradient(circle, ${orb.color}, transparent)`,
            filter: 'blur(40px)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
