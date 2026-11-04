import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Packages } from './pages/Packages';
import { Questionnaire } from './pages/Questionnaire';
import { Progress } from './pages/Progress';
import { AuthModal } from './pages/AuthModal';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const openAuthModal = () => setIsAuthModalOpen(true);
  const closeAuthModal = () => setIsAuthModalOpen(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <BackgroundDecorations />

      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        openAuthModal={openAuthModal} 
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {activeTab === 'home' && (
          <Home setActiveTab={setActiveTab} openAuthModal={openAuthModal} />
        )}
        {activeTab === 'servicos' && (
          <Services setActiveTab={setActiveTab} openAuthModal={openAuthModal} />
        )}
        {activeTab === 'produtos' && (
          <Products />
        )}
        {activeTab === 'pacotes' && (
          <Packages setActiveTab={setActiveTab} openAuthModal={openAuthModal} />
        )}
        {activeTab === 'questionario' && (
          <Questionnaire setActiveTab={setActiveTab} />
        )}
        {activeTab === 'progresso' && (
          <Progress />
        )}
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={closeAuthModal} 
      />
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
