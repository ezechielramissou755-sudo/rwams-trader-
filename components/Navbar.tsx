'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Screenshots', href: '/screenshots' },
    { name: 'Investors', href: '/investors' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Team', href: '/team' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-500" style={{ background: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              {/* Effet glow derrière le logo */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              
              {/* Votre logo personnalisé */}
              <img
                src="/logo-rwams.png"
                alt="RWAMS Traders Logo"
                className="relative w-12 h-12 rounded-xl transform group-hover:scale-110 transition-transform duration-300 object-cover"
                onError={(e) => {
                  console.log('❌ Logo load error');
                  e.currentTarget.style.display = 'block';
                }}
                onLoad={() => console.log('✅ Logo RWAMS loaded successfully!')}
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              RWAMS Traders
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Button
              className="bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-violet-500/30"
              onClick={() => window.location.href = '#download'}
            >
              Download
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 rounded-full"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '#download';
              }}
            >
              Download
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
