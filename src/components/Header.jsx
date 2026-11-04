import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { FITLADY_SLOGAN } from './Logo';
import { LogOut, Menu, X } from 'lucide-react';

export const Header = ({ activeTab, setActiveTab }) => {
  const { user, logoutUser } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = activeTab === 'home';

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  const isActive = (tabs) => (Array.isArray(tabs) ? tabs.includes(activeTab) : activeTab === tabs);

  const navColor = (active) => {
    if (isHome) return active ? '#FFFFFF' : 'rgba(255,255,255,0.72)';
    return active ? '#000000' : '#6F6F6F';
  };

  const navBtn = (active) => ({
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.875rem',
    color: navColor(active),
    transition: 'color 0.2s ease',
    fontFamily: "'DM Sans', system-ui, sans-serif",
    textShadow: isHome ? '0 1px 12px rgba(0,0,0,0.35)' : 'none'
  });

  return (
    <header
      style={{
        position: isHome ? 'absolute' : 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: 'transparent',
        borderBottom: 'none'
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '1.15rem 1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}
      >
        <button
          onClick={() => handleNavClick('home')}
          title={FITLADY_SLOGAN}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontFamily: "'Instrument Serif', Georgia, serif",
            fontSize: '1.85rem',
            letterSpacing: '-0.02em',
            color: isHome ? '#FFFFFF' : '#000000',
            lineHeight: 1,
            textShadow: isHome ? '0 2px 16px rgba(0,0,0,0.4)' : 'none'
          }}
        >
          Fit<span style={{ color: '#E5007E' }}>Lady</span>
          <sup style={{ fontSize: '0.7rem', color: '#E5007E', marginLeft: '2px' }}>®</sup>
        </button>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
          <button onClick={() => handleNavClick('home')} style={navBtn(isActive('home'))}>Início</button>
          <button onClick={() => handleNavClick('servicos')} style={navBtn(isActive(['servicos', 'servico-treino', 'servico-nutricao', 'questionario']))}>Serviços</button>
          <button onClick={() => handleNavClick('produtos')} style={navBtn(isActive('produtos'))}>Produtos</button>
          <button onClick={() => handleNavClick('pacotes')} style={navBtn(isActive('pacotes'))}>Compra de pacotes</button>
          {user && (
            <button
              onClick={() => handleNavClick('progresso')}
              style={{ ...navBtn(true), color: '#E5007E' }}
            >
              Seu progresso
            </button>
          )}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                className="hide-mobile"
                style={{
                  fontSize: '0.85rem',
                  color: isHome ? 'rgba(255,255,255,0.8)' : '#6F6F6F',
                  textShadow: isHome ? '0 1px 10px rgba(0,0,0,0.35)' : 'none'
                }}
              >
                {user.name}
              </span>
              <button
                onClick={logoutUser}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  background: 'transparent',
                  border: 'none',
                  color: isHome ? 'rgba(255,255,255,0.8)' : '#6F6F6F',
                  cursor: 'pointer',
                  fontSize: '0.85rem'
                }}
              >
                <LogOut size={15} /> Sair
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNavClick('pacotes')}
              style={{
                background: isHome ? '#E5007E' : '#000',
                color: '#fff',
                borderRadius: '9999px',
                padding: '0.6rem 1.4rem',
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Começar agora
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Menu"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: isHome ? '#fff' : '#000',
              padding: '0.35rem'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div style={{
          borderTop: 'none',
          background: isHome ? 'rgba(0,0,0,0.85)' : 'rgba(255,255,255,0.97)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          backdropFilter: 'blur(12px)'
        }}>
          <button onClick={() => handleNavClick('servicos')} style={{ ...navBtn(false), textAlign: 'left', padding: '0.5rem 0' }}>Serviços</button>
          <button onClick={() => handleNavClick('produtos')} style={{ ...navBtn(false), textAlign: 'left', padding: '0.5rem 0' }}>Produtos</button>
          <button onClick={() => handleNavClick('pacotes')} style={{ ...navBtn(false), textAlign: 'left', padding: '0.5rem 0' }}>Compra de pacotes</button>
          {user && (
            <button onClick={() => handleNavClick('progresso')} style={{ ...navBtn(false), textAlign: 'left', padding: '0.5rem 0', color: '#E5007E' }}>
              Seu progresso
            </button>
          )}
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
};
