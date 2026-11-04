import React from 'react';

/**
 * BackgroundDecorations
 * Elementos gráficos de fundo hiper-vibrantes e luminosos.
 * Utiliza as cores secundárias (#ABFE2A Neon Lime, #4FB919 Verde Esportivo e #E5007E Magenta)
 * com filtros de neon laser multicamadas, orbes difusos de luz ambiente e ziguezagues atléticos.
 */
export const BackgroundDecorations = () => {
  return (
    <div className="bg-zigzag-container" aria-hidden="true">
      
      {/* ========================================================
          ORBES DE LUZ AMBIENTE DIFUSA (NEON STAGE LIGHTING)
          ======================================================== */}
      {/* Orbe 1: Topo Esquerdo (Neon Lime) */}
      <div style={{
        position: 'absolute',
        top: '-80px',
        left: '-100px',
        width: '520px',
        height: '520px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(171, 254, 42, 0.22) 0%, rgba(171, 254, 42, 0.05) 50%, transparent 70%)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      {/* Orbe 2: Topo Direito (Magenta Vibrante) */}
      <div style={{
        position: 'absolute',
        top: '60px',
        right: '-120px',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(229, 0, 126, 0.25) 0%, rgba(229, 0, 126, 0.06) 55%, transparent 75%)',
        filter: 'blur(100px)',
        pointerEvents: 'none'
      }} />

      {/* Orbe 3: Meio (Verde Esportivo & Lime) */}
      <div style={{
        position: 'absolute',
        top: '1100px',
        left: '10%',
        width: '580px',
        height: '580px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 185, 25, 0.20) 0%, rgba(171, 254, 42, 0.08) 50%, transparent 75%)',
        filter: 'blur(110px)',
        pointerEvents: 'none'
      }} />

      {/* Orbe 4: Inferior (Magenta & Lime) */}
      <div style={{
        position: 'absolute',
        top: '2100px',
        right: '-60px',
        width: '640px',
        height: '640px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(229, 0, 126, 0.22) 0%, rgba(171, 254, 42, 0.09) 50%, transparent 75%)',
        filter: 'blur(110px)',
        pointerEvents: 'none'
      }} />

      {/* ========================================================
          TRAÇOS E ZIGUEZAGUES GEOMÉTRICOS HIPER-LUMINOSOS
          ======================================================== */}

      {/* 1. TOPO ESQUERDA - Ziguezague Neon Laser duplo Lime & Verde */}
      <div 
        className="zigzag-float-1" 
        style={{
          position: 'absolute',
          top: '110px',
          left: '-30px',
          width: '350px',
          opacity: 0.95
        }}
      >
        <svg viewBox="0 0 350 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <linearGradient id="neonLimeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FB919" />
              <stop offset="50%" stopColor="#ABFE2A" />
              <stop offset="100%" stopColor="#ABFE2A" />
            </linearGradient>
            <filter id="laserGlowLime" x="-20%" y="-40%" width="140%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#ABFE2A" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="0" stdDeviation="16" floodColor="#ABFE2A" floodOpacity="0.6" />
              <feDropShadow dx="0" dy="0" stdDeviation="30" floodColor="#ABFE2A" floodOpacity="0.3" />
            </filter>
            <filter id="laserGlowGreen" x="-20%" y="-40%" width="140%" height="180%">
              <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#4FB919" floodOpacity="0.85" />
              <feDropShadow dx="0" dy="0" stdDeviation="18" floodColor="#4FB919" floodOpacity="0.5" />
            </filter>
          </defs>

          {/* Linha principal: Neon Lime com multi-glow */}
          <path 
            d="M 10 50 L 40 14 L 70 86 L 100 14 L 130 86 L 160 14 L 190 86 L 220 14 L 250 86 L 280 14 L 310 86 L 340 50" 
            stroke="url(#neonLimeGrad)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowLime)"
          />
          {/* Linha de eco: Verde Esportivo vibrante */}
          <path 
            d="M 18 64 L 48 28 L 78 98 L 108 28 L 138 98 L 168 28 L 198 98 L 228 28 L 258 98 L 288 28 L 318 98 L 344 68" 
            stroke="#4FB919" 
            strokeWidth="2.6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            opacity="0.8"
            filter="url(#laserGlowGreen)"
          />
        </svg>
      </div>

      {/* 2. TOPO DIREITA - Speed Chevrons em cascata (Lime, Pink, Green) */}
      <div 
        className="zigzag-float-2" 
        style={{
          position: 'absolute',
          top: '200px',
          right: '-15px',
          width: '230px',
          opacity: 0.95
        }}
      >
        <svg viewBox="0 0 230 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <filter id="laserGlowPink" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="8" floodColor="#E5007E" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="0" stdDeviation="20" floodColor="#E5007E" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Chevron 1: Neon Lime */}
          <path 
            d="M 30 20 L 95 100 L 30 180" 
            stroke="#ABFE2A" 
            strokeWidth="4.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowLime)"
          />
          {/* Chevron 2: Verde Esportivo */}
          <path 
            d="M 75 20 L 140 100 L 75 180" 
            stroke="#4FB919" 
            strokeWidth="3.8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowGreen)"
          />
          {/* Chevron 3: Magenta Secundário */}
          <path 
            d="M 120 20 L 185 100 L 120 180" 
            stroke="#E5007E" 
            strokeWidth="3.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowPink)"
          />
        </svg>
      </div>

      {/* 3. MEIO DO SITE (SEÇÃO DE METODOLOGIA) - Linha de Pulso Fisiológico / Cardio Hiper-Luminosa */}
      <div 
        className="zigzag-pulse" 
        style={{
          position: 'absolute',
          top: '920px',
          left: '2%',
          width: '420px',
          opacity: 0.95
        }}
      >
        <svg viewBox="0 0 420 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <linearGradient id="pulseDuoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4FB919" />
              <stop offset="35%" stopColor="#ABFE2A" />
              <stop offset="70%" stopColor="#E5007E" />
              <stop offset="100%" stopColor="#ABFE2A" />
            </linearGradient>
          </defs>

          {/* Linha principal com pulso esportivo */}
          <path 
            d="M 0 60 L 85 60 L 105 20 L 125 105 L 148 10 L 170 90 L 188 60 L 245 60 L 262 38 L 280 82 L 298 60 L 420 60" 
            stroke="url(#pulseDuoGrad)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowLime)"
          />
          {/* Sublinha Verde Esportivo */}
          <path 
            d="M 0 70 L 85 70 L 105 30 L 125 115 L 148 20 L 170 100 L 188 70 L 245 70 L 262 48 L 280 92 L 298 70 L 420 70" 
            stroke="#4FB919" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            opacity="0.85"
            filter="url(#laserGlowGreen)"
          />

          {/* Pontos de pico luminosos */}
          <circle cx="148" cy="10" r="5" fill="#ffffff" filter="url(#laserGlowLime)" />
          <circle cx="262" cy="38" r="4" fill="#ABFE2A" filter="url(#laserGlowLime)" />
        </svg>
      </div>

      {/* 4. MEIO DIREITA (WEARABLES & PARCERIAS) - Ziguezague Vertical com Faixa Técnica */}
      <div 
        className="zigzag-float-1" 
        style={{
          position: 'absolute',
          top: '1580px',
          right: '1.5%',
          width: '150px',
          opacity: 0.95
        }}
      >
        <svg viewBox="0 0 150 360" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <path 
            d="M 35 15 L 105 55 L 35 95 L 105 135 L 35 175 L 105 215 L 35 255 L 105 295 L 35 335" 
            stroke="#4FB919" 
            strokeWidth="3.8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowGreen)"
          />
          <path 
            d="M 58 25 L 128 65 L 58 105 L 128 145 L 58 185 L 128 225 L 58 265 L 128 305" 
            stroke="#ABFE2A" 
            strokeWidth="2.8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="8 6"
            filter="url(#laserGlowLime)"
          />
        </svg>
      </div>

      {/* 5. INFERIOR ESQUERDA (PLANOS & INVESTIMENTO) - Ziguezague de Alta Potência Magenta & Lime */}
      <div 
        className="zigzag-float-2" 
        style={{
          position: 'absolute',
          top: '2250px',
          left: '-25px',
          width: '330px',
          opacity: 0.95
        }}
      >
        <svg viewBox="0 0 330 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <defs>
            <linearGradient id="neonPinkLimeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E5007E" />
              <stop offset="60%" stopColor="#ff2a98" />
              <stop offset="100%" stopColor="#ABFE2A" />
            </linearGradient>
          </defs>

          <path 
            d="M 15 55 L 50 18 L 85 92 L 120 18 L 155 92 L 190 18 L 225 92 L 260 18 L 295 92 L 325 55" 
            stroke="url(#neonPinkLimeGrad)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowPink)"
          />
          <path 
            d="M 25 68 L 60 31 L 95 105 L 130 31 L 165 105 L 200 31 L 235 105 L 270 31 L 305 105 L 328 72" 
            stroke="#ABFE2A" 
            strokeWidth="2.8" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowLime)"
          />
        </svg>
      </div>

      {/* 6. PRÓXIMO AO FOOTER - Traço de Chegada / Velocidade Esportiva */}
      <div 
        className="zigzag-pulse" 
        style={{
          position: 'absolute',
          top: '2950px',
          right: '4%',
          width: '360px',
          opacity: 0.92
        }}
      >
        <svg viewBox="0 0 360 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
          <path 
            d="M 10 45 L 45 12 L 80 78 L 115 12 L 150 78 L 185 12 L 220 78 L 255 12 L 290 78 L 325 12 L 350 45" 
            stroke="#4FB919" 
            strokeWidth="3.6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeDasharray="10 6"
            filter="url(#laserGlowGreen)"
          />
          <path 
            d="M 20 55 L 55 22 L 90 88 L 125 22 L 160 88 L 195 22 L 230 88 L 265 22 L 300 88 L 335 22 L 355 55" 
            stroke="#ABFE2A" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            filter="url(#laserGlowLime)"
          />
        </svg>
      </div>

    </div>
  );
};
