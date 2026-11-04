import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Packages = ({ setActiveTab, openAuthModal }) => {
  const { user, purchasePackage } = useAuth();
  const [openFaq, setOpenFaq] = useState(null);

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
      name: 'Plano Start',
      period: 'mês',
      price: 'R$ 89,90',
      badge: 'Mensal Flexível',
      isPopular: false,
      features: [
        'Anamnese física e nutricional digital',
        'Ficha de Treino A/B individualizada',
        'Plano de macronutrientes com tabela de substituição',
        'Acesso completo ao app web FitLady',
        'Suporte por e-mail em até 48h',
        'Sem fidelidade: cancele quando quiser'
      ]
    },
    {
      id: 'semestral',
      name: 'Plano Pro Semestral',
      period: 'mês',
      price: 'R$ 69,90',
      priceNote: 'Cobrado semestralmente (R$ 419,40)',
      badge: 'Mais Recomendado',
      isPopular: true,
      features: [
        'Tudo do Plano Start incluso',
        'Ficha completa A/B/C/D personalizada',
        'Revisão e evolução de cargas a cada 15 dias',
        'Sincronização com Apple Watch, Garmin e Strava',
        'Desconto VIP nas redes Smart Fit e Iron Berg',
        'Canal direto no WhatsApp com nutricionista'
      ]
    },
    {
      id: 'anual',
      name: 'Plano Anual VIP',
      period: 'mês',
      price: 'R$ 49,90',
      priceNote: 'Cobrado anualmente (R$ 598,80)',
      badge: 'Melhor Custo-Benefício',
      isPopular: false,
      features: [
        'Tudo do Plano Pro incluso',
        'Acompanhamento biomecânico contínuo por vídeo',
        'Ajustes ilimitados de cardápio e rotina',
        'Kit de Boas-Vindas FitLady entregue na sua residência',
        'Acesso irrestrito a todos os e-books e guias de receitas',
        'Atendimento prioritário no WhatsApp 7 dias por semana'
      ]
    }
  ];

  const faqs = [
    {
      q: 'Como funciona a elaboração do meu treino e plano alimentar?',
      a: 'Assim que você escolhe seu plano e conclui seu cadastro, você preenche a Anamnese Inicial (5 minutos). Nossos profissionais analisam seu histórico, objetivo, frequência e eventuais limitações articulares para montar sua rotina sob medida.'
    },
    {
      q: 'Posso treinar somente em casa ou preciso de academia?',
      a: 'Você escolhe! Nosso sistema adapta sua ficha de treino exatamente para o local onde você treina — seja com equipamentos completos de academia ou em casa com halteres, elásticos e peso do corpo.'
    },
    {
      q: 'Como utilizo o desconto nas academias Smart Fit e Iron Berg?',
      a: 'Alunas dos planos Semestral e Anual recebem um voucher digital com código de ativação em seu painel da aluna, válido para apresentar nas unidades parceiras e garantir as isenções e descontos combinados.'
    },
    {
      q: 'Existe período de fidelidade ou multa de cancelamento?',
      a: 'Não há fidelidade no plano mensal. Nos planos semestral e anual, você tem garantia incondicional de 7 dias com reembolso integral caso decida não continuar.'
    }
  ];

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      
      {/* Section Header */}
      <div className="section-header">
        <span className="badge badge-pink">Investimento Consciente</span>
        <h1 className="section-title">Escolha o Plano Ideal Para Sua Evolução</h1>
        <p className="section-subtitle">
          Planos transparentes com acompanhamento profissional contínuo. Libere sua anamnese e comece hoje mesmo.
        </p>
      </div>

      {/* Packages Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '28px',
        marginBottom: '70px',
        alignItems: 'stretch'
      }}>
        {packageList.map((pkg) => (
          <div 
            key={pkg.id} 
            className="glass-card" 
            style={{
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              borderColor: pkg.isPopular ? 'var(--primary)' : 'var(--border-subtle)',
              boxShadow: pkg.isPopular ? 'var(--shadow-glow)' : 'var(--shadow-card)'
            }}
          >
            {pkg.isPopular && (
              <div style={{
                position: 'absolute',
                top: '-13px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'var(--primary)',
                color: '#fff',
                fontWeight: '700',
                fontSize: '0.78rem',
                letterSpacing: '0.04em',
                padding: '4px 16px',
                borderRadius: 'var(--radius-full)',
                boxShadow: 'var(--shadow-glow)'
              }}>
                MAIS POPULAR
              </div>
            )}

            <div>
              <div style={{ marginBottom: '16px' }}>
                <span className={pkg.isPopular ? 'badge badge-pink' : pkg.id === 'anual' ? 'badge badge-lime' : 'badge badge-green'}>
                  {pkg.badge}
                </span>
              </div>

              <h2 style={{ fontSize: '1.45rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>
                {pkg.name}
              </h2>

              <div style={{ marginBottom: '24px' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff' }}>{pkg.price}</span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}> / {pkg.period}</span>
                {pkg.priceNote && (
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                    {pkg.priceNote}
                  </div>
                )}
              </div>

              <hr style={{ border: 'none', borderTop: '1px solid var(--border-subtle)', marginBottom: '24px' }} />

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                {pkg.features.map((feat, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.92rem', color: '#e2e8f0' }}>
                    <Check size={16} color={pkg.isPopular ? "var(--primary)" : "var(--secondary-green)"} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ lineHeight: '1.45' }}>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button 
              onClick={() => handleSelectPackage(pkg)} 
              className={pkg.isPopular ? 'btn-primary' : 'btn-secondary'} 
              style={{ width: '100%', padding: '14px', fontSize: '0.95rem' }}
            >
              Assinar {pkg.name} <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <div style={{ maxWidth: '780px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Dúvidas Frequentes</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Tudo o que você precisa saber antes de iniciar sua assinatura.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index} 
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  overflow: 'hidden'
                }}
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  style={{
                    width: '100%',
                    padding: '18px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    color: '#ffffff',
                    fontWeight: '600',
                    fontSize: '0.98rem'
                  }}
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp size={18} color="var(--primary)" /> : <ChevronDown size={18} color="var(--text-secondary)" />}
                </button>
                {isOpen && (
                  <div style={{
                    padding: '0 20px 20px 20px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '14px'
                  }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
