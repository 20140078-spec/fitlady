import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      background: '#07050e',
      borderTop: '1px solid var(--glass-border)',
      paddingTop: '60px',
      paddingBottom: '30px',
      marginTop: '80px',
      color: 'var(--text-muted)'
    }}>
      <div className="container">
        
        {/* Top Grid: Info & Partners */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          
          {/* Column 1: Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Sparkles size={22} color="var(--primary-pink)" />
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff' }}>
                Fit<span style={{ color: 'var(--primary-pink)' }}>Lady</span>
              </span>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Empoderando mulheres através da saúde integral, nutrição personalizada e treinos de alta performance perfeitamente adequados à sua rotina.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <span className="badge badge-pink"><Heart size={14} /> Saúde Feminina</span>
              <span className="badge badge-gold"><Award size={14} /> Excelência</span>
            </div>
          </div>

          {/* Column 2: Partners & Gym Networks */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '18px', fontWeight: '700' }}>
              Rede de Parceiros
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--primary-pink)" />
                Smart Fit (Descontos VIP Pacote Avançado)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--primary-pink)" />
                Iron Berg (Descontos exclusivos)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="var(--primary-pink)" />
                Bio Ritmo Fitness Center
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                Strava & Garmin Integration
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" />
                Apple Health & Apple Watch Sync
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '18px', fontWeight: '700' }}>
              Informações de Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={18} color="var(--primary-pink)" />
                <span>contato@fitlady.com.br</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={18} color="var(--primary-pink)" />
                <span>(11) 98765-4321 / (11) 3344-5566</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={20} color="var(--primary-pink)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  <strong>Endereço de Operações:</strong><br />
                  Av. Paulista, 1000 - Bela Vista<br />
                  São Paulo - SP, CEP 01310-100
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '25px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          fontSize: '0.85rem'
        }}>
          <div>
            © {new Date().getFullYear()} FitLady. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Termos de Uso</span>
            <span>Política de Privacidade</span>
            <span>Segurança Firebase</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
