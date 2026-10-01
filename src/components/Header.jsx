import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Sparkles, UserCheck, LogOut, Activity } from 'lucide-react';

export const Header = ({ activeTab, setActiveTab, openAuthModal }) => {
  const { user, isSubscribed, logoutUser } = useAuth();

  return (
    <header className="glass-nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Brand Logo (Top Left) */}
        <div 
          onClick={() => setActiveTab('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'var(--primary-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Sparkles size={24} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '1.6rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#ffffff' }}>
              Fit<span style={{ color: 'var(--primary-pink)' }}>Lady</span>
            </span>
            <div style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)', marginTop: '-4px' }}>
              Fitness & Nutrição
            </div>
          </div>
        </div>

        {/* Center Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <button 
            onClick={() => setActiveTab('home')}
            style={{
              background: 'none',
              color: activeTab === 'home' ? 'var(--primary-pink)' : 'var(--text-main)',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'home' ? '700' : '500',
              transition: 'color 0.2s'
            }}
          >
            Início
          </button>
          
          <button 
            onClick={() => setActiveTab('servicos')}
            style={{
              background: 'none',
              color: activeTab === 'servicos' || activeTab === 'servicos-detalhes' || activeTab === 'questionario' ? 'var(--primary-pink)' : 'var(--text-main)',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'servicos' ? '700' : '500',
              transition: 'color 0.2s'
            }}
          >
            Serviços
          </button>

          <button 
            onClick={() => setActiveTab('produtos')}
            style={{
              background: 'none',
              color: activeTab === 'produtos' ? 'var(--primary-pink)' : 'var(--text-main)',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'produtos' ? '700' : '500',
              transition: 'color 0.2s'
            }}
          >
            Produtos
          </button>

          <button 
            onClick={() => setActiveTab('pacotes')}
            style={{
              background: 'none',
              color: activeTab === 'pacotes' ? 'var(--primary-pink)' : 'var(--text-main)',
              fontSize: '0.95rem',
              fontWeight: activeTab === 'pacotes' ? '700' : '500',
              transition: 'color 0.2s'
            }}
          >
            Compra de Pacotes
          </button>

          {/* Conditional Link: "Seu Progresso" - Visible after signup & package purchase */}
          {isSubscribed && (
            <button 
              onClick={() => setActiveTab('progresso')}
              className="badge badge-pink animate-fade-in"
              style={{
                fontSize: '0.9rem',
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Activity size={16} />
              Seu Progresso
            </button>
          )}
        </nav>

        {/* Right Action (Top Right): Cadastrar / Entrar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid var(--glass-border)',
                fontSize: '0.85rem'
              }}>
                <UserCheck size={16} color="var(--primary-pink)" />
                <span style={{ fontWeight: '600' }}>{user.name}</span>
              </div>
              <button 
                onClick={logoutUser}
                title="Sair da conta"
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.85rem' }}
              >
                <LogOut size={16} />
                Sair
              </button>
            </div>
          ) : (
            <button 
              onClick={openAuthModal}
              className="btn-primary"
            >
              Cadastrar / Entrar
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
