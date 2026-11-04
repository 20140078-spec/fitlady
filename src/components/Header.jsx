import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Sparkles, UserCheck, LogOut, Activity, ShoppingBag, Menu, X } from 'lucide-react';

export const Header = ({ activeTab, setActiveTab, openAuthModal }) => {
  const { user, isSubscribed, logoutUser, cartItems } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="glass-nav">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        
        {/* Brand Identity */}
        <div 
          onClick={() => handleNavClick('home')} 
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', userSelect: 'none' }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Sparkles size={20} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: '1.45rem', fontWeight: '800', letterSpacing: '-0.03em', color: '#ffffff' }}>
              Fit<span style={{ color: 'var(--primary)' }}>Lady</span>
            </span>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.12em', color: 'var(--text-secondary)', textTransform: 'uppercase', marginTop: '-3px' }}>
              Feminine Performance
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="desktop-nav">
          <button 
            onClick={() => handleNavClick('home')}
            className={`tab-pill ${activeTab === 'home' ? 'active' : ''}`}
          >
            Início
          </button>
          
          <button 
            onClick={() => handleNavClick('servicos')}
            className={`tab-pill ${activeTab === 'servicos' ? 'active' : ''}`}
          >
            Serviços
          </button>

          <button 
            onClick={() => handleNavClick('produtos')}
            className={`tab-pill ${activeTab === 'produtos' ? 'active' : ''}`}
            style={{ position: 'relative' }}
          >
            Produtos
            {totalCartCount > 0 && (
              <span style={{
                marginLeft: '6px',
                background: 'var(--primary)',
                color: '#fff',
                borderRadius: '10px',
                padding: '2px 7px',
                fontSize: '0.72rem',
                fontWeight: '700'
              }}>
                {totalCartCount}
              </span>
            )}
          </button>

          <button 
            onClick={() => handleNavClick('pacotes')}
            className={`tab-pill ${activeTab === 'pacotes' ? 'active' : ''}`}
          >
            Planos
          </button>

          {/* Conditional Link: "Seu Progresso" - Visible after signup & package purchase */}
          {isSubscribed && (
            <button 
              onClick={() => handleNavClick('progresso')}
              className={`tab-pill ${activeTab === 'progresso' ? 'active' : ''}`}
              style={{
                color: 'var(--primary)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <Activity size={15} />
              Meu Progresso
            </button>
          )}
        </nav>

        {/* Right Action (Top Right): Cadastrar / Entrar / User */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Quick Cart Button */}
          <button
            onClick={() => handleNavClick('produtos')}
            title="Ver Sacola"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
              color: totalCartCount > 0 ? 'var(--primary)' : 'var(--text-secondary)',
              position: 'relative'
            }}
          >
            <ShoppingBag size={18} />
            {totalCartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: '-4px',
                right: '-4px',
                background: 'var(--primary)',
                color: '#fff',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '0.7rem',
                fontWeight: '700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {totalCartCount}
              </span>
            )}
          </button>

          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.85rem'
              }}>
                <UserCheck size={15} color="var(--primary)" />
                <span style={{ fontWeight: '600', color: '#fff' }}>{user.name}</span>
              </div>
              <button 
                onClick={logoutUser}
                title="Sair da conta"
                className="btn-ghost"
                style={{ padding: '8px 12px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <LogOut size={15} />
                <span className="hide-mobile">Sair</span>
              </button>
            </div>
          ) : (
            <button 
              onClick={openAuthModal}
              className="btn-primary"
              style={{ padding: '9px 20px', fontSize: '0.9rem' }}
            >
              Entrar
            </button>
          )}

          {/* Mobile Menu Hamburger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Menu"
            style={{
              display: 'none',
              padding: '8px',
              color: 'var(--text-main)',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--bg-surface)',
          borderBottom: '1px solid var(--border-medium)',
          padding: '16px 24px 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <button 
            onClick={() => handleNavClick('home')}
            style={{ textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: activeTab === 'home' ? 'var(--bg-elevated)' : 'transparent', color: activeTab === 'home' ? 'var(--primary)' : 'var(--text-main)', fontWeight: '600' }}
          >
            Início
          </button>
          <button 
            onClick={() => handleNavClick('servicos')}
            style={{ textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: activeTab === 'servicos' ? 'var(--bg-elevated)' : 'transparent', color: activeTab === 'servicos' ? 'var(--primary)' : 'var(--text-main)', fontWeight: '600' }}
          >
            Serviços
          </button>
          <button 
            onClick={() => handleNavClick('produtos')}
            style={{ textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: activeTab === 'produtos' ? 'var(--bg-elevated)' : 'transparent', color: activeTab === 'produtos' ? 'var(--primary)' : 'var(--text-main)', fontWeight: '600' }}
          >
            Produtos {totalCartCount > 0 ? `(${totalCartCount})` : ''}
          </button>
          <button 
            onClick={() => handleNavClick('pacotes')}
            style={{ textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: activeTab === 'pacotes' ? 'var(--bg-elevated)' : 'transparent', color: activeTab === 'pacotes' ? 'var(--primary)' : 'var(--text-main)', fontWeight: '600' }}
          >
            Planos
          </button>
          {isSubscribed && (
            <button 
              onClick={() => handleNavClick('progresso')}
              style={{ textAlign: 'left', padding: '12px 14px', borderRadius: 'var(--radius-sm)', background: activeTab === 'progresso' ? 'var(--bg-elevated)' : 'transparent', color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Activity size={18} /> Meu Progresso
            </button>
          )}
        </div>
      )}

      {/* CSS Helper for Responsive Navigation */}
      <style>{`
        @media (max-width: 860px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
