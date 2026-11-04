import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Activity, TrendingDown, Award, Calendar, PlusCircle, CheckCircle2, Flame, Dumbbell } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import confetti from 'canvas-confetti';

export const Progress = () => {
  const { progressHistory, updatesLog, addWeeklyUpdate, activePackage } = useAuth();

  const [weightInput, setWeightInput] = useState('');
  const [skippedExercises, setSkippedExercises] = useState(false);
  const [dietFeedback, setDietFeedback] = useState('liked');
  const [notes, setNotes] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [activeChartMetric, setActiveChartMetric] = useState('weight'); // 'weight' | 'bodyFat' | 'workoutAdherence'

  const handleWeeklyUpdate = (e) => {
    e.preventDefault();
    if (!weightInput) return;

    addWeeklyUpdate({
      weight: weightInput,
      skippedExercises,
      dietFeedback,
      notes
    });

    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.warn('Confetti error:', err);
    }

    setWeightInput('');
    setNotes('');
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 4500);
  };

  const latestProgress = progressHistory[progressHistory.length - 1] || { weight: 62.5, bodyFat: 22.4, workoutAdherence: 95 };
  const initialProgress = progressHistory[0] || { weight: 64.5, bodyFat: 24.0, workoutAdherence: 90 };
  const weightLost = (initialProgress.weight - latestProgress.weight).toFixed(1);

  const metricConfig = {
    weight: {
      name: 'Peso (kg)',
      dataKey: 'weight',
      stroke: 'var(--primary)',
      unit: 'kg'
    },
    bodyFat: {
      name: '% Gordura Corporal',
      dataKey: 'bodyFat',
      stroke: '#ABFE2A',
      unit: '%'
    },
    workoutAdherence: {
      name: 'Aderência (%)',
      dataKey: 'workoutAdherence',
      stroke: '#4FB919',
      unit: '%'
    }
  };

  const currentConfig = metricConfig[activeChartMetric];

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      
      {/* Header */}
      <div className="section-header">
        <span className="badge badge-emerald">Painel da Aluna</span>
        <h1 className="section-title">Evolução Fisiológica & Histórico</h1>
        <p className="section-subtitle">
          Acompanhe suas métricas de composição corporal, adesão aos treinos e registre seu check-in semanal.
        </p>
      </div>

      {/* KPI Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        {/* Peso Atual */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>Peso Atual</span>
            <Activity size={18} color="var(--primary)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>
            {latestProgress.weight} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>kg</span>
          </div>
          <div style={{ color: 'var(--secondary-green)', fontSize: '0.85rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: '600' }}>
            <TrendingDown size={14} /> -{weightLost} kg acumulado
          </div>
        </div>

        {/* % Gordura */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>% Gordura</span>
            <Flame size={18} color="var(--secondary-lime)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>
            {latestProgress.bodyFat} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>%</span>
          </div>
          <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '6px' }}>
            Faixa atlética saudável
          </div>
        </div>

        {/* Aderência aos Treinos */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>Consistência de Treino</span>
            <Dumbbell size={18} color="var(--secondary-lime)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>
            {latestProgress.workoutAdherence} <span style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>%</span>
          </div>
          <div style={{ color: 'var(--secondary-green)', fontSize: '0.85rem', marginTop: '6px', fontWeight: '600' }}>
            Excelente aderência
          </div>
        </div>

        {/* Pacote Ativo */}
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: '600' }}>Assinatura</span>
            <Award size={18} color="var(--secondary-green)" />
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginTop: '4px', marginBottom: '4px' }}>
            {activePackage ? activePackage.name : 'Plano Pro Semestral'}
          </div>
          <div style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: '600' }}>
            Wearables Sincronizados
          </div>
        </div>
      </div>

      {/* Chart Card with Metric Switcher */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '1.35rem', marginBottom: '4px' }}>Curva de Evolução</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Métricas registradas nas últimas 4 semanas</span>
          </div>

          {/* Metric Selector Buttons */}
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={() => setActiveChartMetric('weight')}
              className={`tab-pill ${activeChartMetric === 'weight' ? 'active' : ''}`}
              style={{ fontSize: '0.82rem' }}
            >
              Peso (kg)
            </button>
            <button
              onClick={() => setActiveChartMetric('bodyFat')}
              className={`tab-pill ${activeChartMetric === 'bodyFat' ? 'active' : ''}`}
              style={{ fontSize: '0.82rem' }}
            >
              % Gordura
            </button>
            <button
              onClick={() => setActiveChartMetric('workoutAdherence')}
              className={`tab-pill ${activeChartMetric === 'workoutAdherence' ? 'active' : ''}`}
              style={{ fontSize: '0.82rem' }}
            >
              Aderência (%)
            </button>
          </div>
        </div>

        <div style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
              <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} />
              <YAxis domain={['dataMin - 1', 'dataMax + 1']} stroke="#94a3b8" fontSize={12} />
              <Tooltip 
                contentStyle={{
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '0.85rem'
                }}
              />
              <Line 
                type="monotone" 
                dataKey={currentConfig.dataKey} 
                stroke={currentConfig.stroke} 
                strokeWidth={3} 
                dot={{ r: 5, fill: currentConfig.stroke }} 
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Column Layout: Weekly Check-in Form & History Log */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px'
      }}>
        {/* Form Check-in */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PlusCircle size={20} color="var(--primary)" /> Check-in Semanal
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
            Atualize seu peso da semana e informe se realizou trocas de exercícios ou sentiu dificuldades.
          </p>

          {showSuccessAlert && (
            <div style={{
              background: 'var(--secondary-green-light)',
              border: '1px solid rgba(79, 185, 25, 0.4)',
              color: 'var(--secondary-green)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '20px',
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '600'
            }}>
              <CheckCircle2 size={18} /> Check-in gravado com sucesso!
            </div>
          )}

          <form onSubmit={handleWeeklyUpdate}>
            <div className="form-group">
              <label className="form-label">Peso na Balança (kg)</label>
              <input 
                type="number" 
                step="0.1" 
                required 
                className="form-input" 
                placeholder="Ex: 62.3" 
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Substituiu algum exercício nesta semana?</label>
              <select 
                className="form-select"
                value={skippedExercises ? 'sim' : 'nao'}
                onChange={(e) => setSkippedExercises(e.target.value === 'sim')}
              >
                <option value="nao">Não, segui a ficha exatamente como prescrita</option>
                <option value="sim">Sim, precisei fazer substituições de aparelhos</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Adesão ao Plano Alimentar</label>
              <select 
                className="form-select"
                value={dietFeedback}
                onChange={(e) => setDietFeedback(e.target.value)}
              >
                <option value="liked">Excelente, segui com facilidade e saciedade</option>
                <option value="disliked">Senti dificuldades ou fome em algum horário</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Observações da Semana</label>
              <textarea 
                rows="3" 
                className="form-textarea" 
                placeholder="Ex: Treino de glúteos foi ótimo, aumentei carga na elevação pélvica..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '13px' }}>
              Salvar Check-in da Semana
            </button>
          </form>
        </div>

        {/* History Log */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.3rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={20} color="var(--primary)" /> Histórico de Check-ins
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '24px' }}>
            Registros salvos no seu acompanhamento:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '420px', overflowY: 'auto', paddingRight: '4px' }}>
            {updatesLog.length === 0 ? (
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', textAlign: 'center', padding: '30px' }}>
                Nenhum check-in registrado recentemente. Faça seu registro no formulário ao lado.
              </div>
            ) : (
              updatesLog.map((log) => (
                <div 
                  key={log.id} 
                  style={{
                    background: 'var(--bg-elevated)',
                    padding: '16px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '700', color: '#fff', fontSize: '0.92rem' }}>{log.date}</span>
                    <span className="badge badge-pink" style={{ fontSize: '0.78rem' }}>{log.weight} kg</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                    <strong>Ficha de treino:</strong> {log.skippedExercises ? 'Substituições solicitadas' : '100% cumprida'}
                  </div>
                  {log.notes && (
                    <div style={{ fontSize: '0.84rem', color: '#e2e8f0', marginTop: '6px', fontStyle: 'italic', borderLeft: '2px solid var(--primary)', paddingLeft: '8px' }}>
                      "{log.notes}"
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
