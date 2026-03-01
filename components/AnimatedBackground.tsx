'use client';

import React from 'react';

export default function AnimatedBackground() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            'radial-gradient(760px 520px at 32% 38%, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0.06) 32%, rgba(0,0,0,0) 68%)',
            'radial-gradient(900px 700px at 50% 78%, rgba(168,85,247,0.34) 0%, rgba(168,85,247,0.12) 32%, rgba(0,0,0,0) 70%)',
            'radial-gradient(720px 520px at 80% 22%, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0.06) 35%, rgba(0,0,0,0) 72%)',
            'radial-gradient(900px 700px at 78% 72%, rgba(59,130,246,0.12) 0%, rgba(0,0,0,0) 65%)',
            'radial-gradient(1200px 900px at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 55%)'
          ].join(', ')
        }}
      />

      <div className="pointer-events-none absolute inset-0 opacity-90">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="wave1" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(168,85,247,0)" />
              <stop offset="0.35" stopColor="rgba(168,85,247,0.75)" />
              <stop offset="0.65" stopColor="rgba(34,211,238,0.70)" />
              <stop offset="1" stopColor="rgba(34,211,238,0)" />
            </linearGradient>
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 14 -6"
                result="glow"
              />
              <feMerge>
                <feMergeNode in="glow" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <linearGradient id="wave2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(168,85,247,0)" />
              <stop offset="0.4" stopColor="rgba(168,85,247,0.35)" />
              <stop offset="0.7" stopColor="rgba(34,211,238,0.35)" />
              <stop offset="1" stopColor="rgba(34,211,238,0)" />
            </linearGradient>
            <mask id="rightFade">
              <rect x="0" y="0" width="1200" height="700" fill="black" />
              <rect x="560" y="0" width="640" height="700" fill="white" />
              <rect x="500" y="0" width="120" height="700" fill="url(#maskGrad)" />
            </mask>
            <linearGradient id="maskGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="black" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>

          <g mask="url(#rightFade)">
            <g filter="url(#glow)" fill="none" stroke="url(#wave1)" strokeWidth="2">
              <path d="M760,70 C920,10 1040,80 1200,25" opacity="0.55" />
              <path d="M730,130 C910,40 1060,150 1200,95" opacity="0.65" />
              <path d="M705,200 C900,95 1070,235 1200,175" opacity="0.70" />
              <path d="M690,275 C900,160 1070,320 1200,260" opacity="0.72" />
              <path d="M690,355 C910,230 1070,410 1200,345" opacity="0.62" />
              <path d="M705,445 C930,315 1080,500 1200,435" opacity="0.50" />
              <path d="M740,545 C970,410 1100,580 1200,525" opacity="0.40" />
            </g>

            <g filter="url(#glow)" fill="none" stroke="url(#wave2)" strokeWidth="1">
              <path d="M780,95 C940,35 1055,105 1200,55" opacity="0.35" />
              <path d="M745,160 C925,70 1065,170 1200,125" opacity="0.40" />
              <path d="M720,235 C920,125 1080,260 1200,210" opacity="0.42" />
              <path d="M710,315 C930,190 1090,350 1200,300" opacity="0.38" />
              <path d="M720,395 C950,270 1100,440 1200,385" opacity="0.34" />
              <path d="M745,485 C980,355 1120,530 1200,480" opacity="0.28" />
            </g>
          </g>
        </svg>
      </div>

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(1200px 900px at 50% 45%, rgba(0,0,0,0) 42%, rgba(0,0,0,0.72) 78%, rgba(0,0,0,0.94) 100%)'
        }}
      />

      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, rgba(255,255,255,0) 2px, rgba(255,255,255,0) 4px)'
        }}
      />
    </div>
  );
}
