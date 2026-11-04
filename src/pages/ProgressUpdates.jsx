import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, CheckCircle2, PlusCircle, Calendar, FileUp } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ProgressUpdates = ({ setActiveTab }) => {
  const { updatesLog, addWeeklyUpdate } = useAuth();

  const [weightInput, setWeightInput] = useState('');
  const [skippedExercises, setSkippedExercises] = useState(false);
  const [dietFeedback, setDietFeedback] = useState('liked');
  const [exerciseFeedback, setExerciseFeedback] = useState('');
  const [medicalExams, setMedicalExams] = useState('');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weightInput) return;

    addWeeklyUpdate({
      weight: weightInput,
      skippedExercises,
      dietFeedback,
      exerciseFeedback,
      medicalExams,
      notes
    });

    try {
      confetti({ particleCount: 70, spread: 55, origin: { y: 0.65 } });
    } catch (_) { /* ignore */ }

    setWeightInput('');
    setExerciseFeedback('');
    setMedicalExams('');
    setNotes('');
    setSkippedExercises(false);
    setDietFeedback('liked');
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 4000);
  };

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
        <h1 className="section-title" style={{ marginTop: 0 }}>Atualizações</h1>
        <p className="section-subtitle" style={{ margin: 0, maxWidth: '640px' }}>
          Atualize o app sobre seu corpo: peso semanal, exercícios pulados, exames e o que não gostou na dieta ou nos treinos.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px'
      }}>
        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <PlusCircle size={20} color="var(--primary)" /> Nova atualização
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '22px' }}>
            Preencha o que mudou nesta semana.
          </p>

          {showSuccess && (
            <div style={{
              background: 'var(--secondary-green-light)',
              border: '1px solid rgba(79, 185, 25, 0.4)',
              color: 'var(--secondary-green)',
              padding: '12px 16px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '18px',
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontWeight: '600'
            }}>
              <CheckCircle2 size={18} /> Atualização salva!
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Peso semanal (kg)</label>
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
              <label className="form-label">Pulou algum exercício?</label>
              <select
                className="form-select"
                value={skippedExercises ? 'sim' : 'nao'}
                onChange={(e) => setSkippedExercises(e.target.value === 'sim')}
              >
                <option value="nao">Não</option>
                <option value="sim">Sim</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Algo que não gostou nos exercícios?</label>
              <textarea
                rows="2"
                className="form-textarea"
                placeholder="Ex: Não gosto de agachamento livre..."
                value={exerciseFeedback}
                onChange={(e) => setExerciseFeedback(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Algo que não gostou na dieta?</label>
              <select
                className="form-select"
                value={dietFeedback}
                onChange={(e) => setDietFeedback(e.target.value)}
              >
                <option value="liked">Estou satisfeita com a dieta</option>
                <option value="disliked">Não gostei de alguma refeição / opção</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">
                <FileUp size={14} /> Exames médicos (descrição ou referência)
              </label>
              <textarea
                rows="2"
                className="form-textarea"
                placeholder="Ex: Hemograma 02/2026 — tudo ok / anexei PDF por e-mail"
                value={medicalExams}
                onChange={(e) => setMedicalExams(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Observações extras</label>
              <textarea
                rows="2"
                className="form-textarea"
                placeholder="Outras informações da semana..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '13px' }}>
              Salvar atualização
            </button>
          </form>
        </div>

        <div className="glass-card" style={{ padding: '32px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Calendar size={20} color="var(--primary)" /> Histórico
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', marginBottom: '22px' }}>
            Suas atualizações recentes:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', maxHeight: '520px', overflowY: 'auto' }}>
            {updatesLog.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center', padding: '30px' }}>
                Nenhuma atualização ainda.
              </p>
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontWeight: '700' }}>{log.date}</span>
                    <span className="badge badge-pink" style={{ fontSize: '0.75rem' }}>{log.weight} kg</span>
                  </div>
                  <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                    Exercícios pulados: {log.skippedExercises ? 'Sim' : 'Não'}
                  </div>
                  {log.exerciseFeedback && (
                    <div style={{ fontSize: '0.84rem', color: '#e2e8f0', marginTop: '6px' }}>
                      Treino: {log.exerciseFeedback}
                    </div>
                  )}
                  {log.medicalExams && (
                    <div style={{ fontSize: '0.84rem', color: '#e2e8f0', marginTop: '6px' }}>
                      Exames: {log.medicalExams}
                    </div>
                  )}
                  {log.notes && (
                    <div style={{ fontSize: '0.84rem', fontStyle: 'italic', marginTop: '6px', borderLeft: '2px solid var(--primary)', paddingLeft: '8px' }}>
                      {log.notes}
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
