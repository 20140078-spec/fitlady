import React from 'react';
import { Dumbbell, Utensils, Zap, ShieldCheck, Heart, Target, Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export const Home = ({ setActiveTab, openAuthModal }) => {
  return (
    <div>
      {/* HERO SECTION - Woman in gym activewear drinking water */}
      <section style={{
        position: 'relative',
        minHeight: '85vh',
        backgroundImage: 'linear-gradient(to bottom, rgba(11, 9, 20, 0.4), rgba(11, 9, 20, 0.95)), url("/hero-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        padding: '60px 0'
      }}>
        <div className="container" style={{ width: '100%' }}>
          <div className="glass-card animate-fade-in" style={{
            maxWidth: '640px',
            padding: '48px',
            borderColor: 'var(--glass-border-pink)'
          }}>
            <div className="badge badge-pink" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} /> Transforme Sua Saúde com Praticidade
            </div>
            
            <h1 style={{
              fontSize: '3.2rem',
              fontWeight: '800',
              lineHeight: '1.15',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Seu treino e dieta <span style={{
                background: 'var(--primary-gradient)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>moldados para você</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '32px',
              lineHeight: '1.7'
            }}>
              A plataforma exclusiva para mulheres que une montagem de treinos personalizada, nutrição sob medida, acompanhamento de progresso e integração direta com Apple Watch, Garmin e Strava.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => setActiveTab('pacotes')} 
                className="btn-primary" 
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                Conhecer Pacotes <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => setActiveTab('servicos')} 
                className="btn-secondary" 
                style={{ fontSize: '1rem', padding: '14px 32px' }}
              >
                Ver Serviços
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: O QUE O SITE DISPONIBILIZA & PRATICIDADE */}
      <section style={{ padding: '90px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="badge badge-pink" style={{ marginBottom: '12px' }}>O Que Oferecemos</span>
            <h2 className="section-title">Serviços, Parcerias e Praticidade</h2>
            <p className="section-subtitle">
              Pensado do zero para simplificar sua rotina e entregar resultados reais onde quer que você esteja.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '40px'
          }}>
            {/* Treinos sob medida */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(255, 77, 141, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Dumbbell size={28} color="var(--primary-pink)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Treinos Personalizados
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Focado nos seus objetivos (ganho de massa, perda de peso, definição) tanto em academia quanto em casa sem sair de casa.
              </p>
            </div>

            {/* Nutrição ajustada */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(16, 185, 129, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Utensils size={28} color="#10b981" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Alimentação & Nutrição
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Planos alimentares realistas, com sugestões de substituições diárias, receitas práticas e adaptação às suas preferências.
              </p>
            </div>

            {/* Parcerias VIP */}
            <div className="glass-card" style={{ padding: '32px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: 'rgba(245, 158, 11, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Zap size={28} color="#f59e0b" />
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '12px', color: '#ffffff' }}>
                Parcerias com Grandes Redes
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Descontos e privilégios exclusivos em academias renomadas como Smart Fit e Iron Berg, além da integração com Strava Premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: NOSSA MISSÃO */}
      <section style={{
        padding: '90px 0',
        background: 'linear-gradient(180deg, var(--bg-main) 0%, #130f24 100%)',
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}>
            <div>
              <span className="badge badge-pink" style={{ marginBottom: '12px' }}>Propósito</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '20px', color: '#ffffff' }}>
                Nossa Missão
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '24px' }}>
                Nossa missão é democratizar a saúde fitness de alta qualidade para todas as mulheres, oferecendo uma experiência simples, acolhedora e respaldada cientificamente. Queremos que você alcance sua melhor versão sem dietas restritivas exageradas ou treinos genéricos.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                  <CheckCircle2 size={20} color="var(--primary-pink)" />
                  <span>Respeito ao seu ritmo e rotina individual</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                  <CheckCircle2 size={20} color="var(--primary-pink)" />
                  <span>Orientação médica e nutricional contínua</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff' }}>
                  <CheckCircle2 size={20} color="var(--primary-pink)" />
                  <span>Acompanhamento biomecânico através de smartwatches</span>
                </div>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '40px', textAlign: 'center' }}>
              <Target size={60} color="var(--primary-pink)" style={{ marginBottom: '20px' }} />
              <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
                Foco no Seu Bem-Estar
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                Mais do que números na balança, impulsionamos sua energia, autoestima, força e qualidade de vida a cada semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: NOSSOS VALORES */}
      <section style={{ padding: '90px 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <span className="badge badge-gold" style={{ marginBottom: '12px' }}>Pilares FitLady</span>
            <h2 className="section-title">Nossos Valores</h2>
            <p className="section-subtitle">
              Os princípios inegociáveis que norteiam cada plano, sugestão de refeição e parceria do FitLady.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '24px',
            marginTop: '40px'
          }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <Heart size={32} color="var(--primary-pink)" style={{ marginBottom: '14px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Empoderamento Feminino</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Apoiamos cada mulher a se sentir confiante, forte e dona do seu próprio corpo.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <ShieldCheck size={32} color="#10b981" style={{ marginBottom: '14px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Veracidade & Ciência</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Transparência total nas anamneses para máxima segurança biomecânica e metabólica.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <Compass size={32} color="#f59e0b" style={{ marginBottom: '14px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Praticidade Diária</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Soluções que se adaptam aos seus horários e rotina, e não o oposto.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '28px' }}>
              <Sparkles size={32} color="#8b5cf6" style={{ marginBottom: '14px' }} />
              <h4 style={{ color: '#ffffff', fontSize: '1.2rem', marginBottom: '8px' }}>Inovação Tecnológica</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Sincronia fluida com wearables como Apple Watch e Garmin para dados precisos.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
