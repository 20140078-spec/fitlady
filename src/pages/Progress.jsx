import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Activity, TrendingDown, Award, Calendar, PlusCircle, CheckCircle, Flame, Dumbbell } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export const Progress = () => {
  const { progressHistory, updatesLog, addWeeklyUpdate, questionnaireData, activePackage } = useAuth();

  const [weightInput, setWeightInput] = useState('');
  const [skippedExercises, setSkippedExercises] = useState(false);
  const [dietFeedback, setDietFeedback] = useState('liked');
  const [notes, setNotes] = useState('');
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const handleWeeklyUpdate = (e) => {
    e.preventDefault();
    addWeeklyUpdate({
      weight: weightInput,
      skippedExercises,
      dietFeedback,
      notes
    });
    setWeightInput('');
    setNotes('');
    setShowSuccessAlert(true);
    setTimeout(() => setShowSuccessAlert(false), 4000);
  };

  const latestProgress = progressHistory[progressHistory.length - 1] || { weight: 64.0, bodyFat: 23.0 };
  const initialProgress = progressHistory[0] || { weight: 65.0, bodyFat: 25.0 };
  const weightLost = (initialProgress.weight - latestProgress.weight).toFixed(1);

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="badge badge-pink" style={{ marginBottom: '12px' }}>Painel da Aluna</span>
        <h1 className="section-title">Acompanhamento do Seu Progresso</h1>
        <p className="section-subtitle">
          Veja a evolução das suas métricas corporais, acompanhe o histórico e registre seu check-in semanal.
        </p>
      </div>

      {/* Overview Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '40px'
      }}>
        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Peso Atual</span>
            <Activity size={20} color="var(--primary-pink)" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>
            {latestProgress.weight} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>kg</span>
          </div>
          <div style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <TrendingDown size={14} /> -{weightLost} kg desde o início
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>% Gordura Corporal</span>
            <Flame size={20} color="#f59e0b" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>
            {latestProgress.bodyFat} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>%</span>
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '6px' }}>
            Meta Fisiológica Atingida
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Aderência aos Treinos</span>
            <Dumbbell size={20} color="#8b5cf6" />
          </div>
          <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#fff' }}>
            {latestProgress.workoutAdherence} <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>%</span>
          </div>
          <div style={{ color: '#10b981', fontSize: '0.85rem', marginTop: '6px' }}>
            Excelente Consistência
          </div>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>Pacote Ativo</span>
            <Award size={20} color="#10b981" />
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: '700', color: '#fff', margin: '4px 0' }}>
            {activePackage ? activePackage.name : 'Plano FitLady Pro'}
          </div>
          <div style={{ color: 'var(--primary-pink)', fontSize: '0.85rem' }}>
            Sincronizado com Wearables
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '40px' }}>
        <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '20px' }}>Evolução de Peso (kg)</h3>
        <div style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={progressHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
              <XAxis dataKey="date" stroke="#94a3b8" />
              <YAxis domain={['dataMin - 2', 'dataMax + 2']} stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ background: '#171326', border: '1px solid var(--primary-pink)', borderRadius: '8px', color: '#fff' }}
              />
              <Line type="monotone" dataKey="weight" stroke="var(--primary-pink)" strokeWidth={3} dot={{ r: 6, fill: 'var(--primary-pink)' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Column Layout: Weekly Check-in & History Log */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px'
      }}>
        {/* Form Check-in Semanal */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PlusCircle size={22} color="var(--primary-pink)" /> Check-in de Atualização Semanal
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Registre seu peso atual e se precisou trocar algum exercício da sua ficha nesta semana.
          </p>

          {showSuccessAlert && (
            <div style={{
              background: 'rgba(16, 185, 129, 0.2)', border: '1px solid #10b981', color: '#10b981',
              padding: '12px 16px', borderRadius: 'var(--radius-sm)', marginBottom: '20px', fontSize: '0.9rem',
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <CheckCircle size={18} /> Atualização semanal gravada com sucesso!
            </div>
          )}

          <form onSubmit={handleWeeklyUpdate}>
            <div className="form-group">
              <label className="form-label">Peso Atual na Balança (kg)</label>
              <input 
                type="number" 
                step="0.1" 
                required 
                className="form-input" 
                placeholder="Ex: 63.2" 
                value={weightInput}
                onChange={(e) => setWeightInput(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Substituiu ou pulei algum exercício?</label>
              <select 
                className="form-select"
                value={skippedExercises ? 'sim' : 'nao'}
                onChange={(e) => setSkippedExercises(e.target.value === 'sim')}
              >
                <option value="nao">Não, cumpri a ficha 100% como recomendada</option>
                <option value="sim">Sim, precisou fazer substituição de aparelho/exercício</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Como foi sua adesão ao plano alimentar?</label>
              <select 
                className="form-select"
                value={dietFeedback}
                onChange={(e) => setDietFeedback(e.target.value)}
              >
                <option value="liked">Excelente, segui as refeições e trocas práticas</option>
                <option value="disliked">Achei difícil ou não gostei de algum alimento</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Observações da Semana</label>
              <textarea 
                rows="3" 
                className="form-textarea" 
                placeholder="Ex: Senti mais energia nos treinos de pernas, mas senti cansaço na quarta-feira..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px' }}>
              Salvar Check-in Semanal
            </button>
          </form>
        </div>

        {/* History Log */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={22} color="var(--primary-pink)" /> Histórico de Check-ins
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
            Seus registros anteriores salvos no sistema:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '420px', overflowY: 'auto', paddingRight: '6px' }}>
            {updatesLog.length === 0 ? (
              <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic', textAlign: 'center', padding: '20px' }}>
                Nenhum check-in registrado recentemente. Faça seu primeiro check-in ao lado!
              </div>
            ) : (
              updatesLog.map((log) => (
                <div key={log.id} style={{
                  background: 'rgba(15, 12, 27, 0.6)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--glass-border)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '700', color: '#fff' }}>{log.date}</span>
                    <span className="badge badge-pink" style={{ fontSize: '0.78rem' }}>{log.weight} kg</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    <strong>Trocas de exercício:</strong> {log.skippedExercises ? 'Sim (Troca Solicitada)' : 'Não (Ficha 100%)'}
                  </div>
                  {log.notes && (
                    <div style={{ fontSize: '0.85rem', color: '#e2e8f0', marginTop: '6px', fontStyle: 'italic' }}>
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
