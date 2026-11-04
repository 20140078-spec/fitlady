import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FITLADY_SLOGAN } from './Logo';

export const Footer = () => (
  <footer style={{
    background: '#FAFAF8',
    borderTop: '1px solid rgba(0,0,0,0.06)',
    padding: '4.5rem 0 2rem',
    color: '#6F6F6F'
  }}>
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '2.5rem',
        marginBottom: '3rem'
      }}>
        <div>
          <div style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '2rem',
            color: '#000',
            letterSpacing: '-0.02em',
            marginBottom: '0.5rem'
          }}>
            Fit<span style={{ color: '#E5007E' }}>Lady</span>
            <sup style={{ fontSize: '0.55rem', color: '#E5007E' }}>®</sup>
          </div>
          <p style={{ color: '#E5007E', fontSize: '0.9rem', fontWeight: 500, marginBottom: '0.75rem' }}>
            {FITLADY_SLOGAN}
          </p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '260px' }}>
            Treino, nutrição e parcerias para mulheres que querem resultados com praticidade.
          </p>
        </div>

        <div>
          <h4 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '1.35rem',
            color: '#000',
            marginBottom: '1rem'
          }}>
            Parceiros
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
            <li>Smart Fit</li>
            <li>Iron Berg</li>
            <li>Strava</li>
            <li>Apple Watch / Garmin</li>
          </ul>
        </div>

        <div>
          <h4 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '1.35rem',
            color: '#000',
            marginBottom: '1rem'
          }}>
            Contato
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail size={15} color="#E5007E" /> contato@fitlady.com.br
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone size={15} color="#E5007E" /> (11) 98765-4321
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <MapPin size={15} color="#E5007E" style={{ marginTop: 2, flexShrink: 0 }} />
              <span>Av. Paulista, 1000 — São Paulo, SP</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(0,0,0,0.06)',
        paddingTop: '1.5rem',
        fontSize: '0.8rem'
      }}>
        © {new Date().getFullYear()} FitLady. Todos os direitos reservados.
      </div>
    </div>
  </footer>
);
