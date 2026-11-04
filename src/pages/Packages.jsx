import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Reveal } from '../components/Reveal';
import { useInView, useCountUp } from '../hooks/useInView';

const Price = ({ amount, active, dark }) => {
  const n = useCountUp(amount, active, 1100);
  return (
    <div style={{
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      fontFamily: "'DM Sans', system-ui, sans-serif",
      letterSpacing: '-0.03em',
      color: dark ? '#fff' : '#000'
    }}>
      R$ {n},00
    </div>
  );
};

const PackageCard = ({ pkg, index, onSelect }) => {
  const [ref, inView] = useInView();
  const amounts = { inicial: 39, intermediario: 47, avancado: 55 };

  return (
    <Reveal delay={Math.min(index + 1, 4)} style={{ height: '100%' }}>
      <div
        ref={ref}
        className="soft-card"
        style={{
          position: 'relative',
          background: pkg.popular ? '#000' : '#FAFAF8',
          color: pkg.popular ? '#fff' : '#000',
          borderRadius: '32px',
          padding: '2.4rem 1.85rem',
          border: pkg.popular ? 'none' : '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          boxShadow: pkg.popular ? '0 28px 60px -28px rgba(0,0,0,0.45)' : undefined
        }}
      >
        {pkg.popular && (
          <span style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#E5007E',
            color: '#fff',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            padding: '5px 16px',
            borderRadius: '9999px',
            whiteSpace: 'nowrap'
          }}>
            RECOMENDADO
          </span>
        )}

        <div>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '1.75rem',
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em'
          }}>
            {pkg.name}
          </h2>
          <Price amount={amounts[pkg.id]} active={inView} dark={pkg.popular} />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem', padding: 0 }}>
            {pkg.features.map((f) => (
              <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: 1.45 }}>
                <Check size={16} color={pkg.popular ? '#ABFE2A' : '#4FB919'} style={{ flexShrink: 0, marginTop: 3 }} />
                <span style={{ color: pkg.popular ? 'rgba(255,255,255,0.85)' : '#6F6F6F' }}>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => onSelect(pkg)}
          style={{
            width: '100%',
            padding: '1rem',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '0.95rem',
            background: pkg.popular ? '#E5007E' : '#000',
            color: '#fff',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
        >
          Escolher {pkg.name} <ArrowRight size={16} />
        </button>
      </div>
    </Reveal>
  );
};

export const Packages = ({ setActiveTab, accessMessage, clearAccessMessage }) => {
  const { user, purchasePackage, enterAsGuest } = useAuth();

  const handleSelectPackage = (pkg) => {
    if (!user) enterAsGuest('Aluna FitLady');
    purchasePackage(pkg);
    if (clearAccessMessage) clearAccessMessage();
    setActiveTab('questionario');
  };

  const packageList = [
    {
      id: 'inicial',
      name: 'Pacote inicial',
      features: ['Direito aos treinos montados', 'Direito à dieta personalizada'],
      popular: false
    },
    {
      id: 'intermediario',
      name: 'Pacote intermediário',
      features: [
        'Treinos montados',
        'Dieta personalizada',
        'Uso das melhores versões de apps de auxílio, como o Strava'
      ],
      popular: true
    },
    {
      id: 'avancado',
      name: 'Pacote avançado',
      features: [
        'Treinos montados',
        'Dieta personalizada',
        'Apps de auxílio (ex.: Strava)',
        'Descontos em academias como Smart Fit e Iron Berg'
      ],
      popular: false
    }
  ];

  return (
    <div style={{ background: '#fff', padding: '4.5rem 24px 6rem' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{
            color: '#E5007E',
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Pacotes
          </p>
          <h1 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            color: '#000',
            marginBottom: '0.75rem'
          }}>
            Compra de pacotes
          </h1>
          <p style={{ color: '#6F6F6F', fontSize: '1.05rem' }}>
            Escolha o pacote com os benefícios que fazem sentido para você.
          </p>
        </Reveal>

        {accessMessage && (
          <Reveal>
            <div style={{
              maxWidth: '640px',
              margin: '0 auto 2.5rem',
              padding: '1.5rem 1.75rem',
              textAlign: 'center',
              background: 'rgba(229,0,126,0.06)',
              border: '1px solid rgba(229,0,126,0.25)',
              borderRadius: '24px'
            }}>
              <Info size={22} color="#E5007E" style={{ marginBottom: 8 }} />
              <p style={{ margin: 0, lineHeight: 1.65, color: '#000' }}>{accessMessage}</p>
            </div>
          </Reveal>
        )}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          alignItems: 'stretch'
        }}>
          {packageList.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} onSelect={handleSelectPackage} />
          ))}
        </div>
      </div>
    </div>
  );
};
