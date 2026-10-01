import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ClipboardList, CheckCircle2, ArrowRight, User, HeartPulse, Sparkles, Watch } from 'lucide-react';

export const Questionnaire = ({ setActiveTab }) => {
  const { saveQuestionnaire, questionnaireData } = useAuth();
  const [submitted, setSubmitted] = useState(Boolean(questionnaireData));

  const [formData, setFormData] = useState({
    age: questionnaireData?.age || '',
    weight: questionnaireData?.weight || '',
    height: questionnaireData?.height || '',
    goal: questionnaireData?.goal || 'emagrecimento',
    experience: questionnaireData?.experience || 'iniciante',
    workoutLocation: questionnaireData?.workoutLocation || 'academia',
    weeklyDays: questionnaireData?.weeklyDays || '4',
    dietaryRestrictions: questionnaireData?.dietaryRestrictions || '',
    healthNotes: questionnaireData?.healthNotes || '',
    smartwatch: questionnaireData?.smartwatch || 'apple_watch'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    saveQuestionnaire(formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div className="glass-card animate-fade-in" style={{ maxWidth: '640px', margin: '0 auto', padding: '48px', borderColor: 'var(--glass-border-pink)' }}>
          <div style={{
            width: '70px', height: '70px', borderRadius: '50%',
            background: 'rgba(16, 185, 129, 0.2)', color: '#10b981',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 20px auto'
          }}>
            <CheckCircle2 size={40} />
          </div>
          <h1 style={{ fontSize: '2rem', color: '#fff', marginBottom: '12px' }}>Anamnese Enviada com Sucesso!</h1>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
            Nossa equipe e sistema inteligente estão processando seus dados fisiológicos e preferências. Seu treino e plano alimentar já estão disponíveis no seu painel de progresso.
          </p>
          <button onClick={() => setActiveTab('progresso')} className="btn-primary" style={{ padding: '14px 32px' }}>
            Acessar Seu Progresso & Treino <ArrowRight size={18} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <span className="badge badge-pink" style={{ marginBottom: '12px' }}>Anamnese Personalizada</span>
        <h1 className="section-title">Questionário de Avaliação Física & Nutricional</h1>
        <p className="section-subtitle">
          Preencha com atenção. Seus dados guiam o cálculo de macronutrientes e a seleção de exercícios do seu plano.
        </p>
      </div>

      <div className="glass-card animate-fade-in" style={{ maxWidth: '720px', margin: '0 auto', padding: '40px' }}>
        <form onSubmit={handleSubmit}>
          
          {/* Dados Pessoais Basais */}
          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <User size={20} color="var(--primary-pink)" /> 1. Medidas Corporais Básicas
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '30px' }}>
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
                placeholder="Ex: 64.5" 
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

          <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', marginBottom: '30px' }} />

          {/* Objetivo & Frequência */}
          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <HeartPulse size={20} color="var(--primary-pink)" /> 2. Objetivo & Rotina de Treino
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <div className="form-group">
              <label className="form-label">Objetivo Principal</label>
              <select 
                className="form-select"
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
              >
                <option value="emagrecimento">Perda de Gordura & Definição</option>
                <option value="hipertrofia">Ganho de Massa Magra / Glúteos</option>
                <option value="manutencao">Manutenção da Saúde & Disposição</option>
                <option value="condicionamento">Condicionamento Físico & Resistência</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Local de Treino</label>
              <select 
                className="form-select"
                value={formData.workoutLocation}
                onChange={(e) => setFormData({ ...formData, workoutLocation: e.target.value })}
              >
                <option value="academia">Academia (Smart Fit, Iron Berg, etc.)</option>
                <option value="casa">Em Casa (com halteres/bands)</option>
                <option value="hibrido">Híbrido (Academia e Casa)</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Frequência Semanal</label>
              <select 
                className="form-select"
                value={formData.weeklyDays}
                onChange={(e) => setFormData({ ...formData, weeklyDays: e.target.value })}
              >
                <option value="3">3 dias por semana</option>
                <option value="4">4 dias por semana</option>
                <option value="5">5 dias por semana</option>
                <option value="6">6 dias por semana</option>
              </select>
            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--glass-border)', marginBottom: '30px' }} />

          {/* Integração Wearables & Nutrição */}
          <h3 style={{ color: '#fff', fontSize: '1.25rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Watch size={20} color="var(--primary-pink)" /> 3. Integração Wearable & Nutrição
          </h3>

          <div className="form-group">
            <label className="form-label">Dispositivo Smartwatch / App</label>
            <select 
              className="form-select"
              value={formData.smartwatch}
              onChange={(e) => setFormData({ ...formData, smartwatch: e.target.value })}
            >
              <option value="apple_watch">Apple Watch & Apple Saúde</option>
              <option value="garmin">Garmin Connect</option>
              <option value="strava">Strava Premium</option>
              <option value="outro">Outro Dispositivo</option>
              <option value="nenhum">Nenhum Dispositivo</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Restrições ou Preferências Alimentares</label>
            <input 
              type="text" 
              className="form-input" 
              placeholder="Ex: Intolerância à lactose, vegetariana, etc."
              value={formData.dietaryRestrictions}
              onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label">Observações Médicas / Lesões</label>
            <textarea 
              rows="3" 
              className="form-textarea" 
              placeholder="Ex: Dor lombar eventual, cirurgia prévia no joelho..."
              value={formData.healthNotes}
              onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
            />
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '10px' }}>
            Salvar Anamnese & Gerar Plano <Sparkles size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};
