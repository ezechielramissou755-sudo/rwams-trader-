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
import ParticlesBackground from '@/components/effects/ParticlesBackground';
import FloatingParticles from '@/components/effects/FloatingParticles';
import ScrollProgress from '@/components/effects/ScrollProgress';


export default function Home() {
  return (
    <div className="bg-black font-sans antialiased text-white overflow-x-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.05),transparent_50%)]"></div>
      </div>

      {/* Visual Effects */}
      <ParticlesBackground />
      <FloatingParticles />
      <ScrollProgress />

      <div className="relative z-10">
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
      
      {/* Modern animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
        }
        
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-30px); filter: blur(5px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0px); }
        }
        
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(30px); filter: blur(5px); }
          100% { opacity: 1; transform: translateX(0); filter: blur(0px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .glass {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gradient-border {
          position: relative;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(6, 182, 212, 0.3));
          padding: 1px;
        }
      `}</style>
    </div>
  );
}
