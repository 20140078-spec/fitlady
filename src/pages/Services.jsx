import React from 'react';
import { Dumbbell, Utensils, Watch, Zap, FileText, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Services = ({ setActiveTab, openAuthModal }) => {
  const { user } = useAuth();

  const handleStartQuestionnaire = () => {
    if (!user) {
      openAuthModal();
    } else {
      setActiveTab('questionario');
    }
  };

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <span className="badge badge-pink" style={{ marginBottom: '12px' }}>Nossas Soluções</span>
        <h1 className="section-title">Serviços Personalizados & Integrações</h1>
        <p className="section-subtitle">
          Tudo o que você precisa para alcançar seus objetivos com tecnologia, suporte profissional e flexibilidade total.
        </p>
      </div>

      {/* Main Grid Services */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        marginBottom: '60px'
      }}>
        {/* Treino */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '16px',
            background: 'rgba(255, 77, 141, 0.15)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
          }}>
            <Dumbbell size={32} color="var(--primary-pink)" />
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '12px' }}>Montagem de Treinos</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
            Ficha de treinos 100% individualizada com vídeos demonstrativos de execução, ajuste de carga progressivo e adaptação para treino em casa ou academia.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: '#e2e8f0', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary-pink)" /> Treino A/B/C/D adaptado à sua frequência</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary-pink)" /> Foco biomecânico feminino</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="var(--primary-pink)" /> Substituição simples de exercícios</li>
          </ul>
        </div>

        {/* Nutrição */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '16px',
            background: 'rgba(16, 185, 129, 0.15)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
          }}>
            <Utensils size={32} color="#10b981" />
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '12px' }}>Plano Nutricional Flexível</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
            Plano alimentar calculated em macronutrientes sob medida para sua rotina, sem restrições extremas e com tabela dinâmica de substituição de alimentos.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: '#e2e8f0', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#10b981" /> Cardápio semanal variado</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#10b981" /> Receitas fit e práticas</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#10b981" /> Opções vegetarianas e sem lactose</li>
          </ul>
        </div>

        {/* Smartwatch Integration */}
        <div className="glass-card" style={{ padding: '36px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '16px',
            background: 'rgba(139, 92, 246, 0.15)', display: 'flex',
            alignItems: 'center', justifyContent: 'center', marginBottom: '20px'
          }}>
            <Watch size={32} color="#8b5cf6" />
          </div>
          <h2 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '12px' }}>Conectividade Wearables</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '20px' }}>
            Sincronização automática de gasto calórico, frequência cardíaca e passos com Apple Watch, Garmin, Strava e Apple Health.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', color: '#e2e8f0', fontSize: '0.95rem' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#8b5cf6" /> Monitoramento em tempo real</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#8b5cf6" /> Ajuste automático de calorias</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><CheckCircle size={16} color="#8b5cf6" /> Gráficos de recuperação e sono</li>
          </ul>
        </div>
      </div>

      {/* Gym Partnerships Section */}
      <div className="glass-card" style={{ padding: '40px', marginBottom: '60px', borderColor: 'var(--glass-border-pink)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
          <Zap size={28} color="#f59e0b" />
          <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>Parcerias VIP em Academias</h2>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '24px', fontSize: '1.05rem', lineHeight: '1.7' }}>
          Assinantes do FitLady têm vantagens exclusivas e isenção de matrícula em redes parceiras de treino:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '6px' }}>Smart Fit</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>20% de desconto no Plano Black + Isenção de taxa de adesão para alunas FitLady.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '6px' }}>Iron Berg</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Acesso prioritário a passe diário de treino e avaliação corporal gratuita.</p>
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '20px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '6px' }}>Bio Ritmo</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Desconto especial nas unidades premium e aulas de grupo exclusivas.</p>
          </div>
        </div>
      </div>

      {/* CTA Anamnese / Questionário */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 77, 141, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)',
        border: '1px solid var(--glass-border-pink)',
        borderRadius: 'var(--radius-lg)',
        padding: '48px',
        textAlign: 'center'
      }}>
        <FileText size={48} color="var(--primary-pink)" style={{ marginBottom: '16px' }} />
        <h2 style={{ fontSize: '2.2rem', color: '#fff', marginBottom: '12px' }}>Preencha sua Anamnese Inicial</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 28px auto', fontSize: '1.05rem' }}>
          Responda a poucas perguntas sobre seus hábitos, objetivos e rotina para gerarmos seu planejamento totalmente exclusivo.
        </p>
        <button onClick={handleStartQuestionnaire} className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
          Iniciar Questionário de Anamnese <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
