import React, { useState, useCallback } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ServiceDetail } from './pages/ServiceDetail';
import { Products } from './pages/Products';
import { Packages } from './pages/Packages';
import { Questionnaire } from './pages/Questionnaire';
import { ProgressHub } from './pages/ProgressHub';
import { ProgressTrack } from './pages/ProgressTrack';
import { ProgressUpdates } from './pages/ProgressUpdates';
import { Cadastro } from './pages/Cadastro';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [accessMessage, setAccessMessage] = useState('');
  const [pendingService, setPendingService] = useState(null);
  const [questionnaireType, setQuestionnaireType] = useState('treino');

  const navigate = useCallback((tab, options = {}) => {
    if (options.message !== undefined) setAccessMessage(options.message);
    else if (tab !== 'pacotes') setAccessMessage('');
    if (options.pendingService !== undefined) setPendingService(options.pendingService);
    if (options.questionnaireType) setQuestionnaireType(options.questionnaireType);
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openCadastro = useCallback(() => {
    navigate('cadastro');
  }, [navigate]);

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-white text-black font-body">
      {activeTab !== 'home' && <BackgroundDecorations />}

      <Header
        activeTab={activeTab}
        setActiveTab={navigate}
        openCadastro={openCadastro}
      />

      <main className="relative z-[1] flex-1">
        {activeTab === 'home' && (
          <Home setActiveTab={navigate} openCadastro={openCadastro} />
        )}
        {activeTab === 'servicos' && (
          <Services setActiveTab={navigate} />
        )}
        {(activeTab === 'servico-treino' || activeTab === 'servico-nutricao') && (
          <ServiceDetail
            type={activeTab === 'servico-treino' ? 'treino' : 'nutricao'}
            setActiveTab={navigate}
            openCadastro={openCadastro}
            setPendingService={setPendingService}
            setAccessMessage={setAccessMessage}
            setQuestionnaireType={setQuestionnaireType}
          />
        )}
        {activeTab === 'produtos' && <Products />}
        {activeTab === 'pacotes' && (
          <Packages
            setActiveTab={navigate}
            openCadastro={openCadastro}
            accessMessage={accessMessage}
            clearAccessMessage={() => setAccessMessage('')}
            questionnaireType={questionnaireType}
          />
        )}
        {activeTab === 'cadastro' && (
          <Cadastro
            setActiveTab={navigate}
            pendingService={pendingService}
            setPendingService={setPendingService}
            setAccessMessage={setAccessMessage}
          />
        )}
        {activeTab === 'questionario' && (
          <Questionnaire setActiveTab={navigate} questionnaireType={questionnaireType} />
        )}
        {activeTab === 'progresso' && (
          <ProgressHub setActiveTab={navigate} />
        )}
        {activeTab === 'progresso-acompanhar' && (
          <ProgressTrack setActiveTab={navigate} />
        )}
        {activeTab === 'progresso-atualizacoes' && (
          <ProgressUpdates setActiveTab={navigate} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
