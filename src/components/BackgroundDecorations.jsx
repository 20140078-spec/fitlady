import React from 'react';

/** Traços sutis nas cores secundárias FitLady — fundo claro */
export const BackgroundDecorations = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -left-8 top-[28%] w-[280px] opacity-40"
        viewBox="0 0 280 80"
        fill="none"
      >
        <path
          d="M10 40 L40 12 L70 68 L100 12 L130 68 L160 12 L190 68 L220 12 L250 68 L270 40"
          stroke="#ABFE2A"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 52 L48 24 L78 80 L108 24 L138 80 L168 24 L198 80 L228 24 L258 80"
          stroke="#4FB919"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
        />
      </svg>

      <svg
        className="absolute -right-4 top-[55%] w-[180px] opacity-35"
        viewBox="0 0 180 160"
        fill="none"
      >
        <path d="M30 20 L90 80 L30 140" stroke="#E5007E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M60 20 L120 80 L60 140" stroke="#ABFE2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M90 20 L150 80 L90 140" stroke="#4FB919" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};
