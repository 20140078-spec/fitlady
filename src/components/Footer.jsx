import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart, Award, Sparkles } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{
      background: 'var(--bg-main)',
      borderTop: '1px solid var(--border-subtle)',
      paddingTop: '60px',
      paddingBottom: '32px',
      marginTop: '60px',
      color: 'var(--text-secondary)'
    }}>
      <div className="container">
        
        {/* Top Grid: Info & Partners */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>
          
          {/* Column 1: Brand & Philosophy */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={16} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff', letterSpacing: '-0.02em' }}>
                Fit<span style={{ color: 'var(--primary)' }}>Lady</span>
              </span>
            </div>
            <p style={{ fontSize: '0.88rem', lineHeight: '1.7', marginBottom: '18px' }}>
              Ecossistema exclusivo para mulheres que combina ciência do treino, nutrição individualizada e conectividade biomecânica para resultados consistentes e duradouros.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span className="badge badge-pink" style={{ fontSize: '0.75rem' }}><Heart size={12} /> Saúde Feminina</span>
              <span className="badge badge-gold" style={{ fontSize: '0.75rem' }}><Award size={12} /> Suporte Especializado</span>
            </div>
          </div>

          {/* Column 2: Partners & Integrations */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '16px', fontWeight: '700' }}>
              Rede Credenciada
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} color="var(--primary)" />
                Smart Fit (Desconto exclusivo Plano Black)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} color="var(--primary)" />
                Iron Berg (Passe de treino & Avaliações)
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} color="var(--primary)" />
                Bio Ritmo Fitness Center
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} color="var(--secondary-lime)" />
                Apple Health & Garmin Connect
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={15} color="var(--secondary-green)" />
                Strava Club FitLady
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', marginBottom: '16px', fontWeight: '700' }}>
              Atendimento & Contato
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} color="var(--primary)" />
                <span>suporte@fitlady.com.br</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} color="var(--primary)" />
                <span>(11) 98765-4321 • Atendimento WhatsApp</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <MapPin size={18} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>
                  Av. Paulista, 1000 - Cerqueira César<br />
                  São Paulo - SP, CEP 01310-100
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.82rem'
        }}>
          <div>
            © {new Date().getFullYear()} FitLady Performance & Nutrition. Todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', gap: '18px' }}>
            <span>Termos de Serviço</span>
            <span>Privacidade & Dados</span>
            <span>Segurança Certificada</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
