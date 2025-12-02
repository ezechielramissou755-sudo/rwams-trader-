'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react';

const DiscordIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.402-.414-.874-.624-1.249a.078.078 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.026C.533 9.045-.32 13.58.099 18.061a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.032.082.082 0 0 0 .088-.03c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.237 13.237 0 0 1-1.885-.9.078.078 0 0 1-.008-.132c.126-.094.252-.19.372-.288a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.098.246.194.372.289a.078.078 0 0 1-.006.132c-.6.35-1.226.648-1.886.899a.076.076 0 0 0-.04.106c.36.699.772 1.364 1.225 1.993a.076.076 0 0 0 .088.03 19.876 19.876 0 0 0 6.002-3.032.076.076 0 0 0 .03-.056c.5-5.177-.838-9.673-3.548-13.666a.061.061 0 0 0-.031-.027ZM8.02 15.3c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.173 1.096 2.156 2.419 0 1.334-.956 2.419-2.156 2.419Zm7.974 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.173 1.096 2.156 2.419 0 1.334-.946 2.419-2.156 2.419Z" />
  </svg>
);

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
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-3">Follow us</p>
              <div className="flex items-center gap-4">
                <a href="https://x.com/RamissouD26326" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://discord.gg/8RB5Jhs8" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                  <DiscordIcon />
                </a>
                <a href="https://www.linkedin.com/in/ramissou-digital-648aa7392" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/channel/UCi9m6WTyfXW1V3cVGMBE4qQ" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-cyan-400 hover:border-cyan-400 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
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
                contact@rwams-trader.world
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
