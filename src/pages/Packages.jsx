import React from 'react';
import { Check, Sparkles, Shield, Zap, Award, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Packages = ({ setActiveTab, openAuthModal }) => {
  const { user, purchasePackage } = useAuth();

  const handleSelectPackage = (pkg) => {
    if (!user) {
      openAuthModal();
    } else {
      purchasePackage(pkg);
      setActiveTab('questionario');
    }
  };

  const packageList = [
    {
      id: 'mensal',
      name: 'Plano Mensal Start',
      period: 'mês',
      price: 'R$ 89,90',
      badge: 'Flexível',
      isPopular: false,
      features: [
        'Montagem de Treino A/B Personalizado',
        'Plano Alimentar de Macronutrientes',
        'Acesso à Plataforma Web',
        'Suporte por e-mail (resposta em até 48h)',
        'Cancelamento simples sem fidelidade'
      ]
    },
    {
      id: 'semestral',
      name: 'Plano Semestral Pro',
      period: '6 meses',
      price: 'R$ 69,90',
      priceNote: 'cobrado semestralmente (R$ 419,40)',
      badge: 'Mais Recomendado',
      isPopular: true,
      features: [
        'Tudo do Plano Start +',
        'Montagem de Treino A/B/C/D Completo',
        'Revisão de Dieta & Treino a cada 15 dias',
        'Integração com Apple Watch, Garmin & Strava',
        'Desconto VIP nas academias Smart Fit & Iron Berg',
        'Suporte WhatsApp direto com Nutricionista'
      ]
    },
    {
      id: 'anual',
      name: 'Plano Anual VIP FitLady',
      period: 'ano',
      price: 'R$ 49,90',
      priceNote: 'cobrado anualmente (R$ 598,80)',
      badge: 'Melhor Custo-Benefício',
      isPopular: false,
      features: [
        'Tudo do Plano Pro +',
        'Acompanhamento Biomecânico Individual',
        'Revisões e Ajustes Ilimitados no Plano',
        'Acesso Gratuito a Todos os E-books & Guias Digitais',
        'Prioridade 24/7 no Atendimento WhatsApp',
        'Kit de Boas-Vindas FitLady entregue na sua casa'
      ]
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="badge badge-pink" style={{ marginBottom: '12px' }}>Planos & Assinaturas</span>
        <h1 className="section-title">Escolha o Pacote Ideal Para Sua Jornada</h1>
        <p className="section-subtitle">
          Invista na sua saúde com planejamento completo. Libere anamnese personalizada e acompanhamento de progresso.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '30px',
        alignItems: 'stretch'
      }}>
        {packageList.map((pkg) => (
          <div key={pkg.id} className="glass-card" style={{
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderColor: pkg.isPopular ? 'var(--primary-pink)' : 'var(--glass-border)',
            boxShadow: pkg.isPopular ? 'var(--shadow-glow)' : 'var(--shadow-card)',
            position: 'relative'
          }}>
            {pkg.isPopular && (
              <div style={{
                position: 'absolute',
                top: '-14px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--primary-gradient)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '0.85rem',
                padding: '4px 16px',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-glow)'
              }}>
                ⭐ ESCOLHA POPULAR
              </div>
            )}

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className={pkg.isPopular ? 'badge badge-pink' : 'badge badge-gold'}>
                  {pkg.badge}
                </span>
              </div>

              <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '12px' }}>
                {pkg.name}
              </h2>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '2.8rem', fontWeight: '800', color: '#fff' }}>{pkg.price}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}> / {pkg.period}</span>
                {pkg.priceNote && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {pkg.priceNote}
                  </div>
                )}
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', marginBottom: '24px' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {pkg.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#e2e8f0', fontSize: '0.95rem' }}>
                    <Check size={18} color="var(--primary-pink)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => handleSelectPackage(pkg)} 
              className={pkg.isPopular ? 'btn-primary' : 'btn-secondary'} 
              style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
            >
              Assinar {pkg.name.split(' ')[1]} <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
