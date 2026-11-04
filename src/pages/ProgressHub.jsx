import React from 'react';
import { TrendingUp, RefreshCw, ChevronRight, Sparkles } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const ProgressHub = ({ setActiveTab }) => {
  const { questionnaireData } = useAuth();
  const aiReply = questionnaireData?.aiReply;

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <h1 className="section-title">Seu progresso</h1>
        <p className="section-subtitle">
          Escolha o que deseja fazer agora.
        </p>
      </div>

      {aiReply && (
        <div style={{
          maxWidth: '900px',
          margin: '0 auto 2rem',
          background: '#FAFAF8',
          border: '1px solid rgba(229,0,126,0.22)',
          borderRadius: '28px',
          padding: '1.5rem 1.4rem'
        }}>
          <p style={{
            color: '#E5007E',
            fontSize: '0.72rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '0.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <Sparkles size={14} /> FitLady IA
          </p>
          <h2 style={{
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '1.6rem',
            margin: '0 0 0.5rem',
            letterSpacing: '-0.02em'
          }}>
            {aiReply.title}
          </h2>
          <p style={{ color: '#6F6F6F', lineHeight: 1.7, margin: 0 }}>{aiReply.body}</p>
        </div>
      )}

      <div className="progress-split" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '28px',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <button
          onClick={() => setActiveTab('progresso-acompanhar')}
          className="glass-card"
          style={{
            padding: '52px 36px',
            textAlign: 'left',
            cursor: 'pointer',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'var(--primary-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <TrendingUp size={32} color="var(--primary)" />
          </div>
          <h2 style={{ fontSize: '1.7rem', margin: 0 }}>Acompanhe seu progresso</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', flex: 1, margin: 0 }}>
            Veja evolução de treinos, alimentação, peso, massa e onde pode melhorar.
          </p>
          <span style={{ color: 'var(--primary)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Abrir <ChevronRight size={18} />
          </span>
        </button>

        <button
          onClick={() => setActiveTab('progresso-atualizacoes')}
          className="glass-card"
          style={{
            padding: '52px 36px',
            textAlign: 'left',
            cursor: 'pointer',
            minHeight: '260px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '16px',
            background: 'var(--secondary-lime-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <RefreshCw size={32} color="var(--secondary-lime)" />
          </div>
          <h2 style={{ fontSize: '1.7rem', margin: 0 }}>Atualizações</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.65', flex: 1, margin: 0 }}>
            Atualize peso, exercícios pulados, exames e feedbacks de dieta ou treino.
          </p>
          <span style={{ color: 'var(--secondary-lime)', fontWeight: '700', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Abrir <ChevronRight size={18} />
          </span>
        </button>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .progress-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
};
