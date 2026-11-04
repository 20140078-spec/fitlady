import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, AlertTriangle, Watch, TrendingDown, Dumbbell, Flame } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const ProgressTrack = ({ setActiveTab }) => {
  const { progressHistory, updatesLog, activePackage } = useAuth();
  const [activeChartMetric, setActiveChartMetric] = useState('weight');

  const latest = progressHistory[progressHistory.length - 1] || { weight: 62.5, bodyFat: 22.4, workoutAdherence: 95 };
  const initial = progressHistory[0] || { weight: 64.5 };
  const weightLost = (initial.weight - latest.weight).toFixed(1);

  const weakDays = updatesLog.filter((l) => l.skippedExercises).length;

  const metricConfig = {
    weight: { dataKey: 'weight', stroke: 'var(--primary)', label: 'Peso (kg)' },
    bodyFat: { dataKey: 'bodyFat', stroke: '#ABFE2A', label: '% Gordura' },
    workoutAdherence: { dataKey: 'workoutAdherence', stroke: '#4FB919', label: 'Aderência (%)' }
  };
  const cfg = metricConfig[activeChartMetric];

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <button
        onClick={() => setActiveTab('progresso')}
        className="btn-ghost"
        style={{ marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 0' }}
      >
        <ArrowLeft size={16} /> Voltar
      </button>

      <div className="section-header" style={{ textAlign: 'left', maxWidth: 'none', margin: '0 0 36px 0' }}>
        <h1 className="section-title" style={{ marginTop: 0 }}>Acompanhe seu progresso</h1>
        <p className="section-subtitle" style={{ margin: 0, maxWidth: '640px' }}>
          Evolução gradual de treinos e alimentação, pontos a melhorar e indicadores corporais.
        </p>
      </div>

      {/* Aviso exames */}
      <div style={{
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        padding: '18px 20px',
        marginBottom: '28px',
        borderRadius: 'var(--radius-sm)',
        background: 'rgba(245, 158, 11, 0.1)',
        border: '1px solid rgba(245, 158, 11, 0.35)'
      }}>
        <AlertTriangle size={22} color="#fbbf24" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <strong style={{ color: '#fbbf24' }}>Aviso: exames médicos</strong>
          <p style={{ margin: '6px 0 0', color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.6' }}>
            Recomendamos renovar exames de rotina a cada 6 meses. Quando for necessário, avisaremos aqui para você
            anexar os resultados na área de Atualizações.
          </p>
        </div>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '18px',
        marginBottom: '32px'
      }}>
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Peso</span>
            <TrendingDown size={16} color="var(--primary)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800' }}>{latest.weight} kg</div>
          <div style={{ color: 'var(--secondary-green)', fontSize: '0.85rem', marginTop: '4px' }}>-{weightLost} kg</div>
        </div>
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>% Gordura</span>
            <Flame size={16} color="var(--secondary-lime)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800' }}>{latest.bodyFat}%</div>
        </div>
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Treinos</span>
            <Dumbbell size={16} color="var(--secondary-green)" />
          </div>
          <div style={{ fontSize: '1.8rem', fontWeight: '800' }}>{latest.workoutAdherence}%</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '4px' }}>
            {weakDays > 0 ? `${weakDays} registro(s) com exercícios pulados` : 'Boa consistência'}
          </div>
        </div>
        <div className="glass-card" style={{ padding: '22px' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '8px' }}>Pacote</div>
          <div style={{ fontSize: '1.1rem', fontWeight: '700' }}>{activePackage?.name || 'Nenhum ativo'}</div>
        </div>
      </div>

      <div className="glass-card" style={{ padding: '28px', marginBottom: '28px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
          <h3 style={{ fontSize: '1.25rem', margin: 0 }}>Evolução gradual</h3>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {Object.entries(metricConfig).map(([key, m]) => (
              <button
                key={key}
                onClick={() => setActiveChartMetric(key)}
                className={`tab-pill ${activeChartMetric === key ? 'active' : ''}`}
                style={{ fontSize: '0.82rem' }}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
        <div style={{ width: '100%', height: 260 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
              <YAxis domain={['dataMin - 1', 'dataMax + 1']} stroke="#94a3b8" fontSize={12} />
              <Tooltip contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-medium)', borderRadius: '8px', color: '#fff' }} />
              <Line type="monotone" dataKey={cfg.dataKey} stroke={cfg.stroke} strokeWidth={3} dot={{ r: 5, fill: cfg.stroke }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '14px',
        alignItems: 'flex-start',
        padding: '18px 20px',
        borderRadius: 'var(--radius-sm)',
        background: 'var(--bg-surface)',
        border: '1px solid var(--border-subtle)'
      }}>
        <Watch size={22} color="var(--secondary-lime)" style={{ flexShrink: 0 }} />
        <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: '1.65' }}>
          O aplicativo é compatível com <strong style={{ color: '#fff' }}>Apple Watch</strong> e{' '}
          <strong style={{ color: '#fff' }}>Garmin</strong>, melhorando a qualidade dos feedbacks de treino e recuperação.
        </p>
      </div>
    </div>
  );
};
