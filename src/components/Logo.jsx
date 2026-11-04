import React from 'react';

export const Logo = ({ height = 36, showSlogan = false, slogan = 'Rotina leve. Resultado real.' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
    <img
      src="/logo-fitlady.svg"
      alt="FitLady"
      style={{ height, width: 'auto', display: 'block' }}
    />
    {showSlogan && (
      <span
        style={{
          fontSize: '0.68rem',
          letterSpacing: '0.06em',
          color: 'var(--secondary-lime)',
          fontWeight: '600',
          textTransform: 'uppercase'
        }}
      >
        {slogan}
      </span>
    )}
  </div>
);

export const FITLADY_SLOGAN = 'Rotina leve. Resultado real.';
