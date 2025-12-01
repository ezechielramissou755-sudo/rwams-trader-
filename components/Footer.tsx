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
              La plateforme de simulation de trading la plus avancée. 
              Apprenez, pratiquez et maîtrisez le trading sans risquer votre capital.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/screenshots" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Captures
                </Link>
              </li>
              <li>
                <Link href="/investors" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Investisseurs
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Notre Équipe
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Confidentialité
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
                +225 05 02 25 04 73
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-cyan-500" />
                Présence mondiale
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 RWAMS Traders. Tous droits réservés.
          </p>
          <Link href="/privacy" className="text-gray-500 hover:text-cyan-400 text-sm transition-colors">
            Politique de confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
