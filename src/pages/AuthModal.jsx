import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Lock, Mail, Check, AlertCircle, Sparkles } from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, defaultMode = 'register' }) => {
  const { registerUser, loginUser } = useAuth();
  const [isRegister, setIsRegister] = useState(defaultMode === 'register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  // Validation indicators
  const hasMin8 = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isMatch = isRegister ? (password.length > 0 && password === confirmPassword) : true;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    try {
      if (isRegister) {
        if (password !== confirmPassword) {
          setErrorMsg('As senhas não coincidem!');
          return;
        }
        registerUser(email, password);
      } else {
        loginUser(email, password);
      }
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Erro ao processar solicitação.');
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(5, 5, 10, 0.8)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass-card animate-fade-in" style={{
        maxWidth: '460px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        borderColor: 'var(--border-medium)',
        background: 'var(--bg-surface)'
      }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            color: 'var(--text-secondary)',
            padding: '4px'
          }}
          aria-label="Fechar"
        >
          <X size={22} />
        </button>

        {/* Header Branding */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px auto',
            boxShadow: 'var(--shadow-glow)'
          }}>
            <Sparkles size={22} color="#ffffff" />
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '700', marginBottom: '6px' }}>
            {isRegister ? 'Criar Sua Conta' : 'Entrar no FitLady'}
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            {isRegister ? 'Acesse planos, anamnese e treinos personalizados' : 'Gerencie seu progresso e evolução'}
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{
          display: 'flex',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-sm)',
          padding: '4px',
          marginBottom: '24px'
        }}>
          <button
            type="button"
            onClick={() => { setIsRegister(true); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.88rem',
              fontWeight: '600',
              background: isRegister ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              color: isRegister ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Cadastrar
          </button>
          <button
            type="button"
            onClick={() => { setIsRegister(false); setErrorMsg(''); }}
            style={{
              flex: 1,
              padding: '8px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '0.88rem',
              fontWeight: '600',
              background: !isRegister ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              color: !isRegister ? '#ffffff' : 'var(--text-secondary)'
            }}
          >
            Já tenho conta
          </button>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#f87171',
            padding: '12px 14px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.85rem',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="form-group">
            <label className="form-label">
              <Mail size={15} color="var(--primary)" /> E-mail
            </label>
            <input 
              type="email" 
              required
              className="form-input" 
              placeholder="seuemail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label className="form-label">
              <Lock size={15} color="var(--primary)" /> Senha
            </label>
            <input 
              type="password" 
              required
              className="form-input" 
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password (if registering) */}
          {isRegister && (
            <div className="form-group">
              <label className="form-label">
                <Lock size={15} color="var(--primary)" /> Confirmar Senha
              </label>
              <input 
                type="password" 
                required
                className="form-input" 
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {/* Password Validation Guidelines (Cadastro) */}
          {isRegister && (
            <div style={{
              background: 'var(--bg-elevated)',
              padding: '12px 14px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '20px',
              border: '1px solid var(--border-subtle)',
              fontSize: '0.8rem'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '6px', color: 'var(--text-main)' }}>
                Requisitos de segurança:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: hasMin8 ? 'var(--secondary-green)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={13} color={hasMin8 ? 'var(--secondary-green)' : '#64748b'} /> Mínimo de 8 caracteres
                </div>
                <div style={{ color: hasUpper ? 'var(--secondary-green)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={13} color={hasUpper ? 'var(--secondary-green)' : '#64748b'} /> Pelo menos 1 letra maiúscula (A-Z)
                </div>
                <div style={{ color: hasSpecial ? 'var(--secondary-green)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={13} color={hasSpecial ? 'var(--secondary-green)' : '#64748b'} /> Pelo menos 1 caractere especial (!@#$...)
                </div>
                <div style={{ color: isMatch ? 'var(--secondary-green)' : 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={13} color={isMatch ? 'var(--secondary-green)' : '#64748b'} /> Senhas conferem
                </div>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', padding: '13px', marginTop: '6px' }}
          >
            {isRegister ? 'Concluir Cadastro' : 'Entrar na Conta'}
          </button>
        </form>

      </div>
    </div>
  );
};
