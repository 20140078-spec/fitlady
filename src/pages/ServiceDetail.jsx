import React from 'react';
import { useAuth } from '../context/AuthContext';
import { ArrowLeft, ChevronRight } from 'lucide-react';

export const ServiceDetail = ({
  type,
  setActiveTab,
  openCadastro,
  setPendingService,
  setAccessMessage,
  setQuestionnaireType
}) => {
  const { activePackage } = useAuth();
  const isTreino = type === 'treino';

  const handleStart = () => {
    if (setQuestionnaireType) setQuestionnaireType(isTreino ? 'treino' : 'nutricao');

    if (!activePackage) {
      setAccessMessage(
        'Escolha um pacote abaixo para continuar e responder o questionário de ' +
        (isTreino ? 'treino' : 'nutrição') + '.'
      );
      setActiveTab('pacotes');
      return;
    }

    setActiveTab('questionario');
  };

  return (
    <div className="container" style={{ padding: '60px 24px' }}>
      <button
        onClick={() => setActiveTab('servicos')}
        className="btn-ghost"
        style={{ marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 0' }}
      >
        <ArrowLeft size={16} /> Voltar aos serviços
      </button>

      <div style={{ maxWidth: '720px' }}>
        {isTreino ? (
          <>
            <h1 className="section-title" style={{ marginTop: 0, textAlign: 'left' }}>
              Treinos e alimentação Adaptados à Sua Frequência, Espaço e possibilidades
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', margin: '18px 0 16px' }}>
              Chega de fichas de academia padronizadas que ignoram sua postura ou histórico de lesões. Nossos treinos são
              calibrados para volume, intensidade e cadência adequados ao seu objetivo físico e a sua disponibilidade de horários.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', margin: '0 0 36px' }}>
              Dentro de um período de até dois dias você terá seu treino e dieta disponíveis para sua utilização.
            </p>
          </>
        ) : (
          <>
            <h1 className="section-title" style={{ marginTop: 0, textAlign: 'left' }}>
              Nutrição adaptada à sua rotina e possibilidades
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', margin: '18px 0 16px' }}>
              Montamos sua dieta com base no seu histórico alimentar, hábitos reais, sono, orçamento e preferências —
              para caber na sua vida, não o contrário.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.75', margin: '0 0 36px' }}>
              Dentro de um período de até dois dias você terá seu treino e dieta disponíveis para sua utilização.
            </p>
          </>
        )}

        <button onClick={handleStart} className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
          {isTreino ? 'Iniciar treinos' : 'Iniciar dieta'} <ChevronRight size={18} />
        </button>

        <p style={{
          marginTop: '18px',
          fontSize: '0.78rem',
          color: 'var(--text-muted)',
          lineHeight: '1.6',
          maxWidth: '560px'
        }}>
          Observação: respostas totalmente verdadeiras no questionário são essenciais para a boa adequação dos serviços
          e para a sua própria adaptação.
        </p>
      </div>
    </div>
  );
};
