import React from 'react';
import { Dumbbell, Utensils, Watch, Sparkles, CheckCircle2, ChevronRight, Star } from 'lucide-react';

export const Home = ({ setActiveTab }) => {
  return (
    <div>
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '84vh',
        backgroundImage: 'linear-gradient(180deg, rgba(8, 9, 14, 0.45) 0%, rgba(8, 9, 14, 0.95) 100%), url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 28%',
        display: 'flex',
        alignItems: 'center',
        padding: '90px 0 70px 0'
      }}>
        {/* Floating Background Zigzag 1 - Left flank with Multi-Glow */}
        <div className="zigzag-float-1" style={{
          position: 'absolute',
          top: '16%',
          left: '-25px',
          width: '320px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 1
        }}>
          <svg viewBox="0 0 320 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            <path 
              d="M 10 45 L 38 12 L 66 78 L 94 12 L 122 78 L 150 12 L 178 78 L 206 12 L 234 78 L 262 12 L 290 78 L 315 45" 
              stroke="#ABFE2A" 
              strokeWidth="4" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ filter: 'drop-shadow(0 0 8px #ABFE2A) drop-shadow(0 0 22px rgba(171, 254, 42, 0.85))' }}
            />
            <path 
              d="M 18 58 L 46 25 L 74 91 L 102 25 L 130 91 L 158 25 L 186 91 L 214 25 L 242 91 L 270 25 L 298 91 L 315 65" 
              stroke="#4FB919" 
              strokeWidth="2.8" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              style={{ filter: 'drop-shadow(0 0 8px #4FB919) drop-shadow(0 0 18px rgba(79, 185, 25, 0.7))' }}
            />
          </svg>
        </div>

        {/* Floating Background Zigzag 2 - Right flank with Multi-Glow */}
        <div className="zigzag-float-2" style={{
          position: 'absolute',
          top: '22%',
          right: '-15px',
          width: '230px',
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 1
        }}>
          <svg viewBox="0 0 230 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            <path d="M 25 20 L 85 90 L 25 160" stroke="#ABFE2A" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 10px #ABFE2A) drop-shadow(0 0 24px rgba(171, 254, 42, 0.9))' }} />
            <path d="M 65 20 L 125 90 L 65 160" stroke="#4FB919" strokeWidth="3.6" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 8px #4FB919) drop-shadow(0 0 20px rgba(79, 185, 25, 0.75))' }} />
            <path d="M 105 20 L 165 90 L 105 160" stroke="#E5007E" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" style={{ filter: 'drop-shadow(0 0 10px #E5007E) drop-shadow(0 0 24px rgba(229, 0, 126, 0.85))' }} />
          </svg>
        </div>

        <div className="container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
          <div className="animate-fade-in" style={{
            maxWidth: '840px',
            margin: '0 auto',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 22px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(229, 0, 126, 0.18)',
              border: '1px solid rgba(229, 0, 126, 0.6)',
              boxShadow: '0 0 22px rgba(229, 0, 126, 0.45)',
              color: '#ff3da4',
              fontSize: '0.9rem',
              fontWeight: '700',
              marginBottom: '26px'
            }}>
              <Sparkles size={16} /> Metodologia Científica Feminina
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.3rem)',
              fontWeight: '800',
              lineHeight: '1.12',
              marginBottom: '22px',
              color: '#ffffff'
            }}>
              Treino e nutrição moldados para a{' '}
              <span style={{
                background: 'linear-gradient(135deg, #E5007E 0%, #ff2da2 40%, #ABFE2A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(229, 0, 126, 0.5))'
              }}>
                sua fisiologia.
              </span>
            </h1>

            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-secondary)',
              marginBottom: '36px',
              lineHeight: '1.75',
              maxWidth: '680px'
            }}>
              A plataforma completa para mulheres que buscam resultados consistentes sem dietas restritivas extremas. Planos personalizados para treinar na academia ou em casa, sincronizados com Apple Watch e Garmin.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '48px' }}>
              <button 
                onClick={() => setActiveTab('pacotes')} 
                className="btn-primary" 
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                Conhecer Planos <ChevronRight size={18} />
              </button>
              <button 
                onClick={() => setActiveTab('servicos')} 
                className="btn-secondary" 
                style={{ fontSize: '1rem', padding: '14px 30px' }}
              >
                Ver Metodologia
              </button>
            </div>

            {/* Social Proof Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '32px',
              paddingTop: '28px',
              borderTop: '1px solid var(--border-subtle)',
              flexWrap: 'wrap',
              width: '100%',
              maxWidth: '640px'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', color: '#f59e0b', marginBottom: '2px' }}>
                  <Star size={15} fill="#f59e0b" color="#f59e0b" />
                  <span style={{ fontWeight: '700', color: '#fff', fontSize: '1.05rem' }}>4.9</span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Avaliação média das alunas</div>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} />
              <div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1.05rem', marginBottom: '2px' }}>+12.000</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Anamneses realizadas</div>
              </div>
              <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} />
              <div>
                <div style={{ fontWeight: '700', color: '#fff', fontSize: '1.05rem', marginBottom: '2px' }}>96%</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Aderência sustentada</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS SECTION */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)', position: 'relative', overflow: 'hidden' }}>
        {/* Athletic ECG pulse line with intense neon glow */}
        <div className="zigzag-pulse" style={{
          position: 'absolute',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '560px',
          maxWidth: '95%',
          pointerEvents: 'none',
          opacity: 0.95
        }}>
          <svg viewBox="0 0 560 65" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
            <path 
              d="M 0 32 L 150 32 L 170 8 L 190 56 L 210 4 L 230 52 L 250 32 L 330 32 L 345 12 L 360 52 L 375 32 L 560 32" 
              stroke="#ABFE2A" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ filter: 'drop-shadow(0 0 8px #ABFE2A) drop-shadow(0 0 20px rgba(171, 254, 42, 0.8))' }}
            />
            <path 
              d="M 0 40 L 150 40 L 170 16 L 190 64 L 210 12 L 230 60 L 250 40 L 330 40 L 345 20 L 360 60 L 375 40 L 560 40" 
              stroke="#4FB919" 
              strokeWidth="2.4" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ filter: 'drop-shadow(0 0 6px #4FB919) drop-shadow(0 0 16px rgba(79, 185, 25, 0.65))' }}
            />
          </svg>
        </div>

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-header">
            <span className="badge badge-pink">Pilares de Resultado</span>
            <h2 className="section-title">Engenharia Fisiológica Aplicada</h2>
            <p className="section-subtitle">
              Criamos uma estrutura onde cada decisão de exercício e refeição apoia sua energia, saúde hormonal e longevidade.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px'
          }}>
            {/* Pillar 1 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'var(--primary-light)',
                border: '1px solid rgba(229, 0, 126, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Dumbbell size={24} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>
                Biomecânica Feminina
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: '1.65' }}>
                Treinos desenhados considerando a distribuição anatômica feminina, estabilidade de pelve, ativação glútea real e proteção articular para máxima definição muscular.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'var(--secondary-green-light)',
                border: '1px solid rgba(79, 185, 25, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Utensils size={24} color="var(--secondary-green)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>
                Nutrição Sem Restrição Cega
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: '1.65' }}>
                Cálculo preciso de macronutrientes adaptado à sua taxa metabólica basal. Sem cortes abruptos de carboidratos ou listas punitivas de alimentos proibidos.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '12px',
                background: 'var(--secondary-lime-light)',
                border: '1px solid rgba(171, 254, 42, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Watch size={24} color="var(--secondary-lime)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '10px' }}>
                Sincronia com Seus Wearables
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem', lineHeight: '1.65' }}>
                Acompanhe o gasto calórico ativo, frequência cardíaca e zonas de treino diretamente através do seu Apple Watch, Garmin ou Strava conectado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS SPOTLIGHT */}
      <section style={{
        padding: '70px 0',
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-gold" style={{ marginBottom: '12px' }}>Rede Credenciada</span>
              <h2 style={{ fontSize: '2.1rem', marginBottom: '14px', lineHeight: '1.2' }}>
                Vantagens em Grandes Redes de Academia
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: '1.7', marginBottom: '24px' }}>
                Alunas ativas do FitLady contam com isenção de matrícula e condições exclusivas em redes de alta performance em todo o território nacional.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Desconto especial na mensalidade Smart Fit Black</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Passe preferencial e avaliação física nas unidades Iron Berg</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="var(--primary)" />
                  <span style={{ fontSize: '0.95rem' }}>Acesso a treinos de grupo e estúdios parceiros Bio Ritmo</span>
                </div>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Smart Fit</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Desconto VIP Aluna</div>
              </div>
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Iron Berg</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Passe Prioritário</div>
              </div>
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Bio Ritmo</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Unidades Premium</div>
              </div>
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>Strava</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-emerald)' }}>Sync Automático</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEMBER TESTIMONIALS */}
      <section style={{ padding: '80px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-pink">Resultados Reais</span>
            <h2 className="section-title">Mulheres Que Transformaram Sua Rotina</h2>
            <p className="section-subtitle">
              Histórias autênticas de quem alcançou mais disposição, estética e harmonia com a saúde.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '14px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px', fontStyle: 'italic' }}>
                "Sempre achei que precisava passar fome para ver meu abdômen definir. Com a FitLady, aprendi a comer melhor e meus treinos de perna nunca renderam tanto. Perdi 6 kg em 3 meses mantendo toda a minha massa magra."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--primary)' }}>
                  MC
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.92rem' }}>Mariana Castro</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Aluna Plano Pro • São Paulo</div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '14px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px', fontStyle: 'italic' }}>
                "A facilidade de acompanhar pelo Apple Watch e saber exatamente quais séries fazer me poupa tempo demais no dia a dia. É como ter uma personal e nutricionista de bolso."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--secondary-green)' }}>
                  FL
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.92rem' }}>Fernanda Lima</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Aluna Plano Anual VIP • Rio de Janeiro</div>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', gap: '3px', color: '#f59e0b', marginBottom: '14px' }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />)}
              </div>
              <p style={{ color: 'var(--text-main)', fontSize: '0.94rem', lineHeight: '1.65', marginBottom: '20px', fontStyle: 'italic' }}>
                "O check-in semanal me dá responsabilidade e o suporte para tirar dúvidas de substituição de alimentos é sensacional. O melhor investimento em saúde que fiz neste ano."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: '#f59e0b' }}>
                  BR
                </div>
                <div>
                  <div style={{ fontWeight: '600', fontSize: '0.92rem' }}>Beatriz Ramos</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Aluna Plano Start • Curitiba</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section style={{ padding: '80px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{
            background: 'var(--primary-gradient-subtle)',
            border: '1px solid var(--border-active)',
            borderRadius: 'var(--radius-lg)',
            padding: '50px 32px',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto'
          }}>
            <h2 style={{ fontSize: '2.2rem', marginBottom: '14px' }}>
              Pronta para iniciar sua jornada personalizada?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', maxWidth: '580px', margin: '0 auto 30px auto' }}>
              Escolha seu plano, complete sua anamnese em menos de 5 minutos e receba sua rotina de treinos e dieta estruturada.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveTab('pacotes')} 
                className="btn-primary" 
                style={{ padding: '14px 34px', fontSize: '1rem' }}
              >
                Escolher Meu Plano <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
