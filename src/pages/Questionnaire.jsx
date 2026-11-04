import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import {
  User, Dumbbell, Utensils, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Home as HomeIcon, Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateFitLadyReply } from '../lib/fitladyAi';

const WEEK_DAYS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const emptyTreino = {
  weight: '',
  height: '',
  age: '',
  gymExperience: '',
  goal: 'emagrecimento',
  goalOther: '',
  trainingDays: [],
  workoutLocation: 'academia',
  homeDays: [],
  extraActivities: '',
  observation: ''
};

const emptyNutri = {
  dietExperience: '',
  eatingHabits: '',
  sleep: '',
  budgetCeiling: '',
  intoleranceAllergy: '',
  preferencesKeep: '',
  undesiredFoods: '',
  medicalReportName: '',
  medicalReportData: ''
};

export const Questionnaire = ({ setActiveTab, questionnaireType = 'treino' }) => {
  const { saveQuestionnaire, questionnaireData, activePackage } = useAuth();
  const isNutri = questionnaireType === 'nutricao';
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [aiReply, setAiReply] = useState(questionnaireData?.aiReply || null);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState(() => {
    if (questionnaireData?.type === questionnaireType) {
      return { ...(isNutri ? emptyNutri : emptyTreino), ...questionnaireData };
    }
    return isNutri ? { ...emptyNutri } : { ...emptyTreino };
  });

  const totalSteps = isNutri ? 2 : 3;

  if (!activePackage) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="glass-card" style={{ maxWidth: '560px', margin: '0 auto', padding: '40px' }}>
          <h2 style={{ marginBottom: '12px' }}>Escolha um pacote</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
            Selecione um pacote para responder o questionário.
          </p>
          <button
            onClick={() => setActiveTab('pacotes')}
            className="btn-primary"
          >
            Ir para pacotes
          </button>
        </div>
      </div>
    );
  }

  const toggleDay = (field, day) => {
    setFormData((prev) => {
      const list = prev[field] || [];
      return {
        ...prev,
        [field]: list.includes(day) ? list.filter((d) => d !== day) : [...list, day]
      };
    });
  };

  const validateStep = () => {
    if (isNutri) {
      if (currentStep === 1) {
        if (!formData.dietExperience || !formData.eatingHabits || !formData.sleep || !formData.budgetCeiling) {
          return 'Preencha todas as perguntas desta etapa.';
        }
      }
      if (currentStep === 2) {
        if (!formData.intoleranceAllergy || !formData.preferencesKeep || !formData.undesiredFoods) {
          return 'Preencha intolerâncias, preferências e alimentos indesejados.';
        }
        if (!formData.medicalReportName) {
          return 'Anexe o laudo médico (obrigatório).';
        }
      }
      return '';
    }

    if (currentStep === 1) {
      if (!formData.weight || !formData.height || !formData.age) {
        return 'Preencha peso, altura e idade.';
      }
    }
    if (currentStep === 2) {
      if (!formData.gymExperience) return 'Informe sua experiência com academia e regularidade.';
      if (formData.goal === 'outros' && !formData.goalOther.trim()) {
        return 'Descreva seu objetivo em “Outros”.';
      }
      if (!formData.trainingDays.length) {
        return 'Selecione os dias da semana em que poderá treinar.';
      }
    }
    if (currentStep === 3) {
      if (formData.workoutLocation === 'hibrido' && !formData.homeDays.length) {
        return 'No treino híbrido, informe quais dias serão em casa.';
      }
    }
    return '';
  };

  const handleNext = (e) => {
    e.preventDefault();
    const err = validateStep();
    if (err) {
      setErrorMsg(err);
      return;
    }
    setErrorMsg('');

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      return;
    }

    const payload = { ...formData, type: questionnaireType };
    const reply = generateFitLadyReply(payload);
    setAnalyzing(true);
    setSubmitted(true);
    setAiReply(null);

    window.setTimeout(() => {
      saveQuestionnaire({ ...payload, aiReply: reply });
      setAiReply(reply);
      setAnalyzing(false);
      try {
        confetti({ particleCount: 90, spread: 65, origin: { y: 0.6 } });
      } catch (_) { /* ignore */ }
    }, 1400);
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setFormData((prev) => ({
        ...prev,
        medicalReportName: file.name,
        medicalReportData: typeof reader.result === 'string' ? reader.result.slice(0, 200) + '…' : ''
      }));
    };
    reader.readAsDataURL(file);
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '60px 24px' }}>
        <div className="glass-card animate-fade-in" style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 32px' }}>
          {analyzing || !aiReply ? (
            <div style={{ textAlign: 'center', padding: '24px 0' }}>
              <div style={{
                width: '64px', height: '64px', borderRadius: '50%',
                background: 'rgba(229,0,126,0.1)', color: '#E5007E',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px'
              }}>
                <Sparkles size={28} className="ai-spin" />
              </div>
              <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: '2rem', marginBottom: '10px' }}>
                FitLady IA analisando…
              </h1>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                Cruzando suas respostas com o protocolo FitLady.
              </p>
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                <div style={{
                  width: '64px', height: '64px', borderRadius: '50%',
                  background: 'var(--secondary-green-light)', color: 'var(--secondary-green)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px'
                }}>
                  <CheckCircle2 size={34} />
                </div>
                <p style={{
                  color: '#E5007E',
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: '8px'
                }}>
                  Resposta da FitLady IA
                </p>
                <h1 style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: 'clamp(1.8rem, 4vw, 2.4rem)',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em'
                }}>
                  {aiReply.title}
                </h1>
                <p style={{ color: '#6F6F6F', fontSize: '0.92rem' }}>{aiReply.summaryLine}</p>
              </div>

              <div style={{
                background: '#FAFAF8',
                border: '1px solid rgba(229,0,126,0.2)',
                borderRadius: '24px',
                padding: '1.5rem 1.35rem',
                marginBottom: '1.25rem',
                textAlign: 'left'
              }}>
                <p style={{ color: '#000', lineHeight: 1.75, margin: 0, fontSize: '1.02rem' }}>
                  {aiReply.body}
                </p>
              </div>

              {aiReply.tips?.length > 0 && (
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  textAlign: 'left'
                }}>
                  {aiReply.tips.map((tip) => (
                    <li key={tip} style={{
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'flex-start',
                      color: '#6F6F6F',
                      fontSize: '0.94rem',
                      lineHeight: 1.5
                    }}>
                      <Sparkles size={16} color="#E5007E" style={{ flexShrink: 0, marginTop: 3 }} />
                      {tip}
                    </li>
                  ))}
                </ul>
              )}

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setActiveTab('progresso')} className="btn-primary" style={{ padding: '14px 28px' }}>
                  Ir para seu progresso <ChevronRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
        <style>{`
          @keyframes ai-pulse {
            0%, 100% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.12); opacity: 0.7; }
          }
          .ai-spin { animation: ai-pulse 1.1s ease-in-out infinite; }
        `}</style>
      </div>
    );
  }

  const DayChips = ({ field, selected }) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {WEEK_DAYS.map((day) => {
        const on = selected.includes(day);
        return (
          <button
            key={day}
            type="button"
            onClick={() => toggleDay(field, day)}
            style={{
              padding: '8px 14px',
              borderRadius: 'var(--radius-full)',
              border: on ? '1px solid var(--primary)' : '1px solid var(--border-subtle)',
              background: on ? 'var(--primary-light)' : 'transparent',
              color: on ? 'var(--primary)' : 'var(--text-secondary)',
              fontWeight: '600',
              fontSize: '0.85rem'
            }}
          >
            {day}
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div className="section-header">
        <h1 className="section-title">
          {isNutri ? 'Questionário de nutrição' : 'Questionário de treino'}
        </h1>
        <p className="section-subtitle">
          Responda com sinceridade para boa adequação do serviço.
        </p>
      </div>

      <div className="glass-card animate-fade-in" style={{ maxWidth: '740px', margin: '0 auto', padding: '40px 32px' }}>
        <div style={{ marginBottom: '28px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', fontSize: '0.82rem', fontWeight: '600', gap: '8px', flexWrap: 'wrap' }}>
            {isNutri ? (
              <>
                <span style={{ color: currentStep >= 1 ? 'var(--primary)' : 'var(--text-secondary)' }}>1. Histórico & rotina</span>
                <span style={{ color: currentStep >= 2 ? 'var(--primary)' : 'var(--text-secondary)' }}>2. Preferências & laudo</span>
              </>
            ) : (
              <>
                <span style={{ color: currentStep >= 1 ? 'var(--primary)' : 'var(--text-secondary)' }}>1. Medidas básicas</span>
                <span style={{ color: currentStep >= 2 ? 'var(--primary)' : 'var(--text-secondary)' }}>2. Metas & rotina</span>
                <span style={{ color: currentStep >= 3 ? 'var(--primary)' : 'var(--text-secondary)' }}>3. Local & observações</span>
              </>
            )}
          </div>
          <div style={{ width: '100%', height: '4px', background: 'var(--bg-elevated)', borderRadius: '2px' }}>
            <div style={{ width: `${(currentStep / totalSteps) * 100}%`, height: '100%', background: 'var(--primary)', transition: 'width 0.3s' }} />
          </div>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.12)', border: '1px solid rgba(239, 68, 68, 0.35)',
            color: '#f87171', padding: '12px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '18px', fontSize: '0.88rem'
          }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleNext}>
          {!isNutri && currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={20} color="var(--primary)" /> Medidas básicas
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Peso (kg)</label>
                  <input type="number" step="0.1" className="form-input" placeholder="Informe seu peso" value={formData.weight} onChange={(e) => setFormData({ ...formData, weight: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Altura (cm)</label>
                  <input type="number" className="form-input" placeholder="Informe sua altura" value={formData.height} onChange={(e) => setFormData({ ...formData, height: e.target.value })} />
                </div>
                <div className="form-group">
                  <label className="form-label">Idade</label>
                  <input type="number" className="form-input" placeholder="Informe sua idade" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
                </div>
              </div>
            </div>
          )}

          {!isNutri && currentStep === 2 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '18px' }}>Metas e rotina</h2>

              <div className="form-group">
                <label className="form-label">Experiência com academia e regularidade de treinos</label>
                <textarea
                  rows="3"
                  className="form-textarea"
                  placeholder="Ex: treino há 2 anos, 3x por semana, parei 6 meses..."
                  value={formData.gymExperience}
                  onChange={(e) => setFormData({ ...formData, gymExperience: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Objetivo principal</label>
                <div style={{ display: 'grid', gap: '10px' }}>
                  {[
                    { id: 'emagrecimento', label: 'Perda de gordura & definição' },
                    { id: 'hipertrofia', label: 'Ganho de massa muscular' },
                    { id: 'manutencao', label: 'Saúde integral & disposição' },
                    { id: 'condicionamento', label: 'Condicionamento & performance' },
                    { id: 'outros', label: 'Outros' }
                  ].map((g) => (
                    <button
                      key={g.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, goal: g.id })}
                      style={{
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderRadius: '16px',
                        border: formData.goal === g.id ? '1.5px solid #E5007E' : '1px solid rgba(0,0,0,0.1)',
                        background: formData.goal === g.id ? 'rgba(229,0,126,0.08)' : '#fff',
                        color: formData.goal === g.id ? '#E5007E' : '#000',
                        fontWeight: '600',
                        cursor: 'pointer'
                      }}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
                {formData.goal === 'outros' && (
                  <input
                    type="text"
                    className="form-input"
                    style={{ marginTop: '10px' }}
                    placeholder="Escreva seu próprio objetivo"
                    value={formData.goalOther}
                    onChange={(e) => setFormData({ ...formData, goalOther: e.target.value })}
                  />
                )}
              </div>

              <div className="form-group">
                <label className="form-label">Frequência desejada — quais dias da semana poderá treinar? *</label>
                <DayChips field="trainingDays" selected={formData.trainingDays} />
              </div>
            </div>
          )}

          {!isNutri && currentStep === 3 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '18px' }}>Onde você irá treinar</h2>
              <div className="form-group">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { id: 'academia', label: 'Academia', icon: Dumbbell },
                    { id: 'casa', label: 'Em casa', icon: HomeIcon },
                    { id: 'hibrido', label: 'Híbrido', icon: Layers }
                  ].map((loc) => (
                    <button
                      key={loc.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, workoutLocation: loc.id })}
                      style={{
                        padding: '14px',
                        borderRadius: '16px',
                        border: formData.workoutLocation === loc.id ? '1.5px solid #E5007E' : '1px solid rgba(0,0,0,0.1)',
                        background: formData.workoutLocation === loc.id ? 'rgba(229,0,126,0.08)' : '#fff',
                        color: formData.workoutLocation === loc.id ? '#E5007E' : '#000',
                        fontWeight: '600',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer'
                      }}
                    >
                      <loc.icon size={20} color={formData.workoutLocation === loc.id ? '#E5007E' : '#6F6F6F'} />
                      {loc.label}
                    </button>
                  ))}
                </div>
              </div>

              {formData.workoutLocation === 'hibrido' && (
                <div className="form-group">
                  <label className="form-label">Quais dias da semana serão em casa? *</label>
                  <DayChips field="homeDays" selected={formData.homeDays} />
                </div>
              )}

              <div className="form-group">
                <label className="form-label">Atividades extras</label>
                <textarea
                  rows="2"
                  className="form-textarea"
                  placeholder="Ex: crossfit às terças, corrida no domingo..."
                  value={formData.extraActivities}
                  onChange={(e) => setFormData({ ...formData, extraActivities: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Observação</label>
                <textarea
                  rows="3"
                  className="form-textarea"
                  placeholder="Ex: quarta com horário reduzido, viagem no mês que vem..."
                  value={formData.observation}
                  onChange={(e) => setFormData({ ...formData, observation: e.target.value })}
                />
              </div>
            </div>
          )}

          {isNutri && currentStep === 1 && (
            <div>
              <h2 style={{ fontSize: '1.3rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Utensils size={20} color="var(--primary)" /> Nutrição
              </h2>
              <div className="form-group">
                <label className="form-label">Experiência com dietas e histórico alimentar</label>
                <textarea rows="3" className="form-textarea" placeholder="Já fez dietas? Como foi?" value={formData.dietExperience} onChange={(e) => setFormData({ ...formData, dietExperience: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Hábitos e rotina alimentar atual</label>
                <textarea rows="3" className="form-textarea" placeholder="Ex: jantar com amigas toda quinta; comida mexicana toda terça..." value={formData.eatingHabits} onChange={(e) => setFormData({ ...formData, eatingHabits: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Seu sono</label>
                <textarea rows="2" className="form-textarea" placeholder="Horário, qualidade, quantas horas..." value={formData.sleep} onChange={(e) => setFormData({ ...formData, sleep: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Teto de gastos (alimentação / suplementos)</label>
                <input type="text" className="form-input" placeholder="Ex: até R$ 400/mês em mercado + suplementos" value={formData.budgetCeiling} onChange={(e) => setFormData({ ...formData, budgetCeiling: e.target.value })} />
              </div>
            </div>
          )}

          {isNutri && currentStep === 2 && (
            <div>
              <div className="form-group">
                <label className="form-label">Intolerância / alergia</label>
                <textarea rows="2" className="form-textarea" placeholder="Ex: lactose, glúten, amendoim..." value={formData.intoleranceAllergy} onChange={(e) => setFormData({ ...formData, intoleranceAllergy: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Preferências / alimentos que não quer deixar de consumir</label>
                <textarea rows="2" className="form-textarea" placeholder="Ex: chocolate, pão, café..." value={formData.preferencesKeep} onChange={(e) => setFormData({ ...formData, preferencesKeep: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Alimentos indesejados</label>
                <textarea rows="2" className="form-textarea" placeholder="Alimentos que você não quer na dieta" value={formData.undesiredFoods} onChange={(e) => setFormData({ ...formData, undesiredFoods: e.target.value })} />
              </div>
              <div className="form-group">
                <label className="form-label">Observações médicas — anexar laudo *</label>
                <input type="file" accept=".pdf,image/*" className="form-input" onChange={handleFile} />
                {formData.medicalReportName && (
                  <p style={{ marginTop: '8px', fontSize: '0.85rem', color: 'var(--secondary-green)' }}>
                    Arquivo anexado: {formData.medicalReportName}
                  </p>
                )}
              </div>
            </div>
          )}

          <div style={{
            display: 'flex', justifyContent: 'space-between', marginTop: '28px',
            paddingTop: '20px', borderTop: '1px solid var(--border-subtle)'
          }}>
            {currentStep > 1 ? (
              <button type="button" onClick={() => { setErrorMsg(''); setCurrentStep(currentStep - 1); }} className="btn-secondary" style={{ padding: '10px 20px' }}>
                <ChevronLeft size={16} /> Voltar
              </button>
            ) : <div />}
            <button type="submit" className="btn-primary" style={{ padding: '12px 28px' }}>
              {currentStep === totalSteps ? <>Enviar <Sparkles size={16} /></> : <>Continuar <ChevronRight size={16} /></>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
