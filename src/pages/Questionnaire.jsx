import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, HeartPulse, Watch, CheckCircle2, ChevronRight, ChevronLeft, Sparkles, Dumbbell, Home as HomeIcon, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Questionnaire = ({ setActiveTab }) => {
  const { saveQuestionnaire, questionnaireData } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(Boolean(questionnaireData));

  const [formData, setFormData] = useState({
    age: questionnaireData?.age || '28',
    weight: questionnaireData?.weight || '63.5',
    height: questionnaireData?.height || '165',
    goal: questionnaireData?.goal || 'emagrecimento',
    workoutLocation: questionnaireData?.workoutLocation || 'academia',
    weeklyDays: questionnaireData?.weeklyDays || '4',
    smartwatch: questionnaireData?.smartwatch || 'apple_watch',
    dietaryRestrictions: questionnaireData?.dietaryRestrictions || '',
    healthNotes: questionnaireData?.healthNotes || ''
  });

  const goals = [
    { id: 'emagrecimento', label: 'Perda de Gordura & Definição', desc: 'Déficit calórico planejado com preservação de massa magra.' },
    { id: 'hipertrofia', label: 'Ganho de Massa Muscular / Glúteos', desc: 'Estímulo de volume e suporte hipercalórico balanceado.' },
    { id: 'manutencao', label: 'Saúde Integral & Disposição', desc: 'Manutenção de peso e otimização metabólica e hormonal.' },
    { id: 'condicionamento', label: 'Condicionamento & Performance', desc: 'Resistência cardiovascular e fortalecimento articular.' }
  ];

  const locations = [
    { id: 'academia', label: 'Academia', desc: 'Equipamentos completos de musculação.', icon: Dumbbell },
    { id: 'casa', label: 'Em Casa', desc: 'Treinos funcionais com halteres, elásticos e peso corporal.', icon: HomeIcon },
    { id: 'hibrido', label: 'Híbrido', desc: 'Combinação de academia e treinos caseiros na semana.', icon: Layers }
  ];

  const handleNextStep = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      saveQuestionnaire(formData);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.warn('Confetti error:', err);
      }
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="glass-card animate-fade-in" style={{
          maxWidth: '640px',
          margin: '0 auto',
          padding: '48px 36px',
          borderColor: 'var(--primary)'
        }}>
          <div style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'var(--secondary-green-light)',
            color: 'var(--secondary-green)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <CheckCircle2 size={38} />
          </div>

          <h1 style={{ fontSize: '2rem', marginBottom: '12px' }}>Anamnese Registrada com Sucesso!</h1>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
            Nossos profissionais e sistema inteligente calibraram seu plano com base nas suas respostas. Acesse seu painel de acompanhamento para ver a evolução das métricas.
          </p>

          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setActiveTab('progresso')} 
              className="btn-primary" 
              style={{ padding: '14px 30px' }}
            >
              Acessar Meu Painel de Progresso <ChevronRight size={18} />
            </button>
            <button 
              onClick={() => setSubmitted(false)} 
              className="btn-secondary" 
              style={{ padding: '14px 24px' }}
            >
              Editar Respostas
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      
      {/* Header */}
      <div className="section-header">
        <span className="badge badge-pink">Etapa de Avaliação</span>
        <h1 className="section-title">Anamnese Física & Nutricional</h1>
        <p className="section-subtitle">
          Suas respostas determinam a prescrição do seu treino e a distribuição exata dos seus macronutrientes.
        </p>
      </div>

      <div className="glass-card animate-fade-in" style={{ maxWidth: '720px', margin: '0 auto', padding: '40px 32px' }}>
        
        {/* Step Progress Indicator */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: currentStep >= 1 ? 'var(--primary)' : 'var(--text-secondary)' }}>
              1. Medidas Básicas
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: currentStep >= 2 ? 'var(--primary)' : 'var(--text-secondary)' }}>
              2. Metas & Rotina
            </span>
            <span style={{ fontSize: '0.85rem', fontWeight: '600', color: currentStep >= 3 ? 'var(--primary)' : 'var(--text-secondary)' }}>
              3. Saúde & Wearables
            </span>
          </div>

          <div style={{ width: '100%', height: '4px', background: 'var(--bg-elevated)', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{
              width: `${(currentStep / 3) * 100}%`,
              height: '100%',
              background: 'var(--primary)',
              transition: 'width 0.3s ease'
            }} />
          </div>
        </div>

        <form onSubmit={handleNextStep}>
          
          {/* STEP 1: Medidas Corporais Básicas */}
          {currentStep === 1 && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <User size={20} color="var(--primary)" /> Dados Fisiológicos Básicos
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '24px' }}>
                <div className="form-group">
                  <label className="form-label">Idade (anos)</label>
                  <input 
                    type="number" 
                    required 
                    className="form-input" 
                    placeholder="Ex: 28" 
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Peso Atual (kg)</label>
                  <input 
                    type="number" 
                    step="0.1" 
                    required 
                    className="form-input" 
                    placeholder="Ex: 63.5" 
                    value={formData.weight}
                    onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Altura (cm)</label>
                  <input 
                    type="number" 
                    required 
                    className="form-input" 
                    placeholder="Ex: 165" 
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Objetivo & Rotina */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.4rem', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <HeartPulse size={20} color="var(--primary)" /> Objetivo & Rotina de Treino
              </h2>

              {/* Goal Cards */}
              <div style={{ marginBottom: '24px' }}>
                <label className="form-label" style={{ marginBottom: '10px' }}>Seu Objetivo Principal</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  {goals.map(g => (
                    <div 
                      key={g.id}
                      onClick={() => setFormData({ ...formData, goal: g.id })}
                      style={{
                        padding: '16px',
                        borderRadius: 'var(--radius-sm)',
                        background: formData.goal === g.id ? 'var(--primary-light)' : 'rgba(255,255,255,0.03)',
                        border: formData.goal === g.id ? '1.5px solid var(--primary)' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{ fontWeight: '700', fontSize: '0.92rem', color: formData.goal === g.id ? 'var(--primary)' : '#fff', marginBottom: '4px' }}>
                        {g.label}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                        {g.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location Cards */}
              <div style={{ marginBottom: '24px' }}>
                <label className="form-label" style={{ marginBottom: '10px' }}>Onde Você Irá Treinar?</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {locations.map(loc => {
                    const IconComponent = loc.icon;
                    return (
                      <div 
                        key={loc.id}
                        onClick={() => setFormData({ ...formData, workoutLocation: loc.id })}
                        style={{
                          padding: '16px',
                          borderRadius: 'var(--radius-sm)',
                          background: formData.workoutLocation === loc.id ? 'var(--primary-light)' : 'rgba(255,255,255,0.03)',
                          border: formData.workoutLocation === loc.id ? '1.5px solid var(--primary)' : '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <IconComponent size={22} color={formData.workoutLocation === loc.id ? 'var(--primary)' : 'var(--text-secondary)'} style={{ margin: '0 auto 8px auto' }} />
                        <div style={{ fontWeight: '700', fontSize: '0.9rem', color: '#fff' }}>{loc.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Weekly Days */}
              <div className="form-group">
                <label className="form-label">Frequência Semanal Desejada</label>
                <select 
                  className="form-select"
                  value={formData.weeklyDays}
                  onChange={(e) => setFormData({ ...formData, weeklyDays: e.target.value })}
                >
                  <option value="3">3 dias por semana (Divisão A/B alternada)</option>
                  <option value="4">4 dias por semana (Divisão A/B/C recomendada)</option>
                  <option value="5">5 dias por semana (Divisão A/B/C/D avançada)</option>
                  <option value="6">6 dias por semana (Alta frequência atlética)</option>
                </select>
              </div>
            </div>
          )}

          {/* STEP 3: Saúde, Nutrição & Dispositivos */}
          {currentStep === 3 && (
            <div className="animate-fade-in">
              <h2 style={{ fontSize: '1.4rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Watch size={20} color="var(--primary)" /> Dispositivos, Restrições & Histórico
              </h2>

              <div className="form-group">
                <label className="form-label">Dispositivo Wearable / Aplicativo</label>
                <select 
                  className="form-select"
                  value={formData.smartwatch}
                  onChange={(e) => setFormData({ ...formData, smartwatch: e.target.value })}
                >
                  <option value="apple_watch">Apple Watch & Apple Saúde</option>
                  <option value="garmin">Garmin Connect</option>
                  <option value="strava">Strava Premium</option>
                  <option value="outro">Outro Smartwatch / Fitband</option>
                  <option value="nenhum">Nenhum Dispositivo</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Preferências ou Intolerâncias Alimentares</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Ex: Intolerância a lactose, vegetariana, aversão a peixe..."
                  value={formData.dietaryRestrictions}
                  onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Observações Médicas, Dores ou Lesões</label>
                <textarea 
                  rows="3" 
                  className="form-textarea" 
                  placeholder="Ex: Sensibilidade lombar em agachamentos livres, cirurgia no joelho em 2022..."
                  value={formData.healthNotes}
                  onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
                />
              </div>
            </div>
          )}

          {/* Step Actions */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '32px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handlePrevStep}
                className="btn-secondary"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <ChevronLeft size={16} /> Voltar
              </button>
            ) : <div />}

            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '12px 28px', fontSize: '0.95rem' }}
            >
              {currentStep === 3 ? (
                <>Salvar e Gerar Meu Plano <Sparkles size={16} /></>
              ) : (
                <>Continuar <ChevronRight size={16} /></>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
