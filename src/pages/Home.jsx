import React from 'react';
import { Shield, Heart, HandHeart, ArrowRight } from 'lucide-react';
import { HeroVideo } from '../components/HeroVideo';
import { Reveal } from '../components/Reveal';
import { FITLADY_SLOGAN } from '../components/Logo';
import { useInView, useCountUp } from '../hooks/useInView';

const Stat = ({ value, suffix = '', label, active }) => {
  const n = useCountUp(value, active, 1500);
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: "'Instrument Serif', Georgia, serif",
        fontSize: 'clamp(2.4rem, 5vw, 3.4rem)',
        color: '#000',
        letterSpacing: '-0.03em',
        lineHeight: 1
      }}>
        {n}{suffix}
      </div>
      <div style={{ marginTop: '0.5rem', color: '#6F6F6F', fontSize: '0.92rem' }}>{label}</div>
    </div>
  );
};

const StatsBand = () => {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1.5rem',
        padding: '2.25rem 1.75rem',
        borderRadius: '28px',
        background: '#FAFAF8',
        border: '1px solid rgba(0,0,0,0.06)'
      }}
      className="stats-grid"
    >
      <Stat value={2} suffix=" dias" label="para receber treino e dieta" active={inView} />
      <Stat value={3} suffix=" pacotes" label="com benefícios claros" active={inView} />
      <Stat value={100} suffix="%" label="foco em rotina real" active={inView} />
    </div>
  );
};

export const Home = ({ setActiveTab }) => {
  return (
    <div style={{ background: '#FFFFFF', color: '#000' }}>
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <HeroVideo />

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '900px',
            width: '100%',
            margin: '0 auto',
            padding: '7rem 24px 5rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <p
            className="animate-fade-rise"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              color: '#E5007E',
              marginBottom: '1.25rem',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              textShadow: '0 2px 24px rgba(0,0,0,0.35)'
            }}
          >
            FitLady<sup style={{ fontSize: '0.45em' }}>®</sup>
          </p>

          <h1
            className="animate-fade-rise"
            style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 400,
              fontSize: 'clamp(2.75rem, 8vw, 5.75rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.04em',
              color: '#FFFFFF',
              maxWidth: '14ch',
              margin: 0,
              textShadow: '0 4px 40px rgba(0,0,0,0.45)'
            }}
          >
            Rotina leve.{' '}
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>Resultado real.</span>
          </h1>

          <p
            className="animate-fade-rise-delay"
            style={{
              marginTop: '1.75rem',
              maxWidth: '32rem',
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.78)',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              textShadow: '0 2px 16px rgba(0,0,0,0.4)'
            }}
          >
            Treino e dieta personalizados para mulheres — com menos perda de tempo
            e menos investimento financeiro.
          </p>

          <div
            className="animate-fade-rise-delay-2"
            style={{
              marginTop: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              justifyContent: 'center'
            }}
          >
            <button
              onClick={() => setActiveTab('pacotes')}
              style={{
                background: '#E5007E',
                color: '#fff',
                border: 'none',
                borderRadius: '9999px',
                padding: '1.05rem 2.6rem',
                fontSize: '1rem',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                boxShadow: '0 8px 28px rgba(229,0,126,0.4)',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Começar agora
            </button>
            <button
              onClick={() => setActiveTab('servicos')}
              style={{
                background: 'rgba(255,255,255,0.12)',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.45)',
                borderRadius: '9999px',
                padding: '1.05rem 1.75rem',
                fontSize: '0.95rem',
                fontFamily: "'DM Sans', system-ui, sans-serif",
                cursor: 'pointer',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; }}
            >
              Ver serviços
            </button>
          </div>
        </div>
      </section>

      {/* Stats animados */}
      <section style={{ padding: '4.5rem 24px 1rem', background: '#fff' }}>
        <Reveal style={{ maxWidth: '900px', margin: '0 auto' }}>
          <StatsBand />
        </Reveal>
      </section>

      {/* O que oferece */}
      <section style={{ padding: '5rem 0 6.5rem', background: '#fff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', padding: '0 24px' }}>
          <Reveal>
            <p style={{
              textAlign: 'center',
              color: '#E5007E',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              Plataforma
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              textAlign: 'center',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
              color: '#000'
            }}>
              O que você encontra aqui
            </h2>
            <p style={{ textAlign: 'center', color: '#6F6F6F', marginBottom: '3rem', fontSize: '1.05rem' }}>
              Serviços, parcerias e praticidade — sem complicação.
            </p>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { n: '01', title: 'Treinos montados para você', text: 'Fichas personalizadas para academia ou casa, com divisão de dias e exercícios adequados às suas metas.' },
              { n: '02', title: 'Dieta alinhada à sua rotina', text: 'Plano alimentar prático, com substituições e foco em resultados sustentáveis.' },
              { n: '03', title: 'Parcerias que somam', text: 'Apps como o Strava e descontos em redes como Smart Fit e Iron Berg nos pacotes avançados.' },
              { n: '04', title: 'Praticidade do início ao fim', text: 'Entrar, escolher pacote, questionário e acompanhamento — em poucos passos.' }
            ].map((item, i) => (
              <Reveal key={item.n} delay={Math.min(i + 1, 4)}>
                <div
                  className="soft-card"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '72px 1fr',
                    gap: '18px',
                    padding: '1.6rem 1.5rem',
                    background: '#FAFAF8',
                    border: '1px solid rgba(0,0,0,0.06)',
                    borderRadius: '24px'
                  }}
                >
                  <span style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: '1.5rem',
                    color: '#4FB919',
                    alignSelf: 'center'
                  }}>
                    {item.n}
                  </span>
                  <div>
                    <h3 style={{
                      fontFamily: "'Instrument Serif', Georgia, serif",
                      fontSize: '1.5rem',
                      color: '#000',
                      marginBottom: '0.4rem',
                      letterSpacing: '-0.02em'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ color: '#6F6F6F', lineHeight: 1.7, fontSize: '0.96rem', margin: 0 }}>{item.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Missão */}
      <section style={{ background: '#FAFAF8', padding: '6.5rem 0' }}>
        <Reveal style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{
            color: '#E5007E',
            fontSize: '0.78rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            fontWeight: 600,
            marginBottom: '1rem'
          }}>
            Missão
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: '1.75rem',
            color: '#000'
          }}>
            Nossa missão
          </h2>
          <p style={{ color: '#6F6F6F', fontSize: '1.15rem', lineHeight: 1.85 }}>
            Garantir para as mulheres uma rotina mais tranquila, com menos perda de tempo e que gere
            resultados positivos para sua saúde, usando a academia, junto a uma dieta, com muito menos
            investimento financeiro — possível para mulheres que não querem gastar muito.
          </p>
        </Reveal>
      </section>

      {/* Valores */}
      <section style={{ background: '#fff', padding: '6.5rem 0' }}>
        <div style={{ maxWidth: '1040px', margin: '0 auto', padding: '0 24px' }}>
          <Reveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{
              color: '#E5007E',
              fontSize: '0.78rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              Valores
            </p>
            <h2 style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#000'
            }}>
              Segurança, confiança<br />e acolhimento
            </h2>
            <p style={{
              color: '#6F6F6F',
              marginTop: '1.25rem',
              maxWidth: '34rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              lineHeight: 1.7
            }}>
              Preservando os dados das nossas clientes, montando treinos e dietas específicas para cada uma,
              tratando com respeito e paciência.
            </p>
          </Reveal>

          <div
            className="values-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}
          >
            {[
              { icon: Shield, title: 'Segurança', text: 'Preservamos os dados das nossas clientes com cuidado e responsabilidade.', accent: '#E5007E' },
              { icon: Heart, title: 'Confiança', text: 'Treinos e dietas específicas para cada pessoa, com transparência.', accent: '#4FB919' },
              { icon: HandHeart, title: 'Acolhimento', text: 'Respeito e paciência — no ritmo de cada aluna.', accent: '#ABFE2A' }
            ].map((v, i) => (
              <Reveal key={v.title} delay={i + 1}>
                <div
                  className="soft-card"
                  style={{
                    padding: '2.1rem 1.6rem',
                    borderRadius: '28px',
                    background: '#FAFAF8',
                    border: '1px solid rgba(0,0,0,0.06)',
                    textAlign: 'center',
                    height: '100%'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    margin: '0 auto 1.25rem',
                    background: `${v.accent}22`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <v.icon size={22} color={v.accent === '#ABFE2A' ? '#4FB919' : v.accent} />
                  </div>
                  <h3 style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: '1.6rem',
                    color: '#000',
                    marginBottom: '0.5rem'
                  }}>
                    {v.title}
                  </h3>
                  <p style={{ color: '#6F6F6F', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '2rem 24px 5.5rem', background: '#fff' }}>
        <Reveal>
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: '36px',
            background: '#000',
            padding: '4rem 24px',
            textAlign: 'center'
          }}>
            <p style={{
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#fff',
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem'
            }}>
              {FITLADY_SLOGAN}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem', fontSize: '1.05rem' }}>
              Escolha seu pacote e comece sua rotina personalizada.
            </p>
            <button
              onClick={() => setActiveTab('pacotes')}
              style={{
                background: '#E5007E',
                color: '#fff',
                border: 'none',
                borderRadius: '9999px',
                padding: '1rem 2.5rem',
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              Ver pacotes <ArrowRight size={18} />
            </button>
          </div>
        </Reveal>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .values-grid, .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
