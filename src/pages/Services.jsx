import React from 'react';
import { Dumbbell, Utensils, ChevronRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const Services = ({ setActiveTab }) => {
  return (
    <div style={{ background: '#fff', minHeight: '70vh', padding: '4.5rem 24px 6rem' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        <Reveal>
          <p style={{
            color: '#E5007E',
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Serviços
          </p>
          <h1 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '0.75rem',
            color: '#000'
          }}>
            Escolha sua área
          </h1>
          <p style={{ color: '#6F6F6F', marginBottom: '3.5rem', fontSize: '1.05rem' }}>
            Cada caminho leva a um resumo completo de como funciona.
          </p>
        </Reveal>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
            textAlign: 'left'
          }}
          className="services-split"
        >
          {[
            {
              tab: 'servico-treino',
              icon: Dumbbell,
              title: 'Treino',
              text: 'Montagem de treinos personalizados, agenda de dias e exercícios adaptados ao seu espaço.',
              color: '#E5007E'
            },
            {
              tab: 'servico-nutricao',
              icon: Utensils,
              title: 'Nutrição',
              text: 'Plano alimentar sob medida, alinhado às suas metas e rotina do dia a dia.',
              color: '#4FB919'
            }
          ].map((s, i) => (
            <Reveal key={s.tab} delay={i + 1}>
              <button
                onClick={() => setActiveTab(s.tab)}
                className="soft-card"
                style={{
                  width: '100%',
                  background: '#FAFAF8',
                  border: '1px solid rgba(0,0,0,0.07)',
                  borderRadius: '28px',
                  padding: '2.5rem 2rem',
                  cursor: 'pointer',
                  textAlign: 'left',
                  minHeight: '260px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = s.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '18px',
                  background: `${s.color}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <s.icon size={26} color={s.color} />
                </div>
                <h2 style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: '2rem',
                  color: '#000',
                  margin: 0,
                  letterSpacing: '-0.02em'
                }}>
                  {s.title}
                </h2>
                <p style={{ color: '#6F6F6F', lineHeight: 1.65, flex: 1, margin: 0 }}>{s.text}</p>
                <span style={{
                  color: s.color,
                  fontWeight: 600,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.95rem'
                }}>
                  Ver como funciona <ChevronRight size={18} />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .services-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
