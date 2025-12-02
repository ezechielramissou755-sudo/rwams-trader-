'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              {/* Votre logo personnalisé */}
              <Image
                src="/logo.png"
                alt="RWAMS Traders Logo"
                width={48}
                height={48}
                className="rounded-xl"
              />
              
              <span className="text-xl font-bold text-white">RWAMS Traders</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              The most advanced trading simulation platform. Learn, practice, and master trading without risking capital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/screenshots" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Screenshots
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-cyan-500" />
                contact@rwams-traders.com
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-cyan-500" />
                +225 05 46 10 09 20
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-500" />
                Global presence
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 RWAMS Traders. All rights reserved.
          </p>
          <Link href="/privacy" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
