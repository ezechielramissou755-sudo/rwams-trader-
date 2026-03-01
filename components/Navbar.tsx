'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

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
    { name: 'Pricing', href: '/pricing' },
    { name: 'Team', href: '/team' },
    { name: 'Privacy', href: '/privacy' },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "supports-[backdrop-filter]:backdrop-blur-xl",
        isScrolled ? "bg-black/55 border-b border-white/14 shadow-[0_10px_40px_-18px_rgba(0,0,0,0.9)]" : "bg-black/30 border-b border-white/10"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <Image
                src="/logo-rwams.png"
                alt="RWAMS Traders Logo"
                width={48}
                height={48}
                priority
                className="relative w-12 h-12 rounded-xl transform group-hover:scale-110 transition-transform duration-300 object-cover"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-display tracking-tight">
              RWAMS Traders
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group font-medium"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute inset-x-[-10px] inset-y-[-8px] rounded-xl bg-white/0 group-hover:bg-white/6 transition-colors" />
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <a
              href="/app-release.apk"
              download
              className="group relative inline-flex items-center justify-center rounded-full px-6 py-2 font-semibold text-white transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-violet-500/25"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 opacity-100 group-hover:opacity-95" />
              <span className="absolute -inset-px rounded-full bg-gradient-to-r from-violet-500/40 to-cyan-500/40 blur opacity-70" />
              <span className="relative">Télécharger</span>
            </a>
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
        <div className="md:hidden bg-slate-900/80 supports-[backdrop-filter]:backdrop-blur-xl border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-300 hover:text-white py-2 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/app-release.apk"
              download
              className="block text-center w-full bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white border-0 rounded-full py-3 font-semibold shadow-lg shadow-violet-500/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Télécharger l'APK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
