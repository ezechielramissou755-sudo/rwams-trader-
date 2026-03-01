import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import TrustBadges from '@/components/home/TrustBadges';
import FeaturesSection from '@/components/home/FeaturesSection';
import GlobeSection from '@/components/home/GlobeSection';
import DownloadSection from '@/components/home/DownloadSection';
import FuturisticStats from '@/components/effects/FuturisticStats';
import InteractiveFAQ from '@/components/innovations/InteractiveFAQ';


export default function Home() {
  return (
    <div className="relative z-10 text-white overflow-x-hidden">
      <Navbar />

      <main>
        <HeroSection />
        <TrustBadges />
        <FeaturesSection />
        <GlobeSection />
        <InteractiveFAQ />
        <DownloadSection />
      </main>

      <Footer />

      {/* Floating Elements */}
      <FuturisticStats />
    </div>
  );
}
