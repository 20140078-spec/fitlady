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
      background: 'rgba(5, 4, 10, 0.85)',
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
        borderColor: 'var(--glass-border-pink)'
      }}>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            color: 'var(--text-muted)'
          }}
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div style={{ textCenter: 'center', marginBottom: '28px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: 'var(--primary-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 12px auto'
          }}>
            <Sparkles size={24} color="#ffffff" />
          </div>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', textAlign: 'center' }}>
            {isRegister ? 'Criar Sua Conta' : 'Entrar no FitLady'}
          </h3>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '4px' }}>
            {isRegister ? 'Cadastre-se para liberar serviços e pacotes' : 'Acesse seu progresso e treinos'}
          </p>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#f87171',
            padding: '12px 16px',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.88rem',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email field */}
          <div className="form-group">
            <label className="form-label">
              <Mail size={16} color="var(--primary-pink)" /> E-mail
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

          {/* Password field */}
          <div className="form-group">
            <label className="form-label">
              <Lock size={16} color="var(--primary-pink)" /> Senha
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

          {/* Confirm Password field (if register mode) */}
          {isRegister && (
            <div className="form-group">
              <label className="form-label">
                <Lock size={16} color="var(--primary-pink)" /> Confirmar Senha
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

          {/* Password Validation Requirements (for Cadastro) */}
          {isRegister && (
            <div style={{
              background: 'rgba(15, 12, 27, 0.6)',
              padding: '14px',
              borderRadius: 'var(--radius-sm)',
              marginBottom: '20px',
              border: '1px solid var(--glass-border)',
              fontSize: '0.82rem'
            }}>
              <div style={{ fontWeight: '600', marginBottom: '8px', color: 'var(--text-main)' }}>
                Requisitos da senha:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ color: hasMin8 ? '#10b981' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} color={hasMin8 ? '#10b981' : '#64748b'} /> Pelo menos 8 caracteres
                </div>
                <div style={{ color: hasUpper ? '#10b981' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} color={hasUpper ? '#10b981' : '#64748b'} /> Pelo menos 1 letra maiúscula (A-Z)
                </div>
                <div style={{ color: hasSpecial ? '#10b981' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} color={hasSpecial ? '#10b981' : '#64748b'} /> Pelo menos 1 caractere especial (!@#$...)
                </div>
                <div style={{ color: isMatch ? '#10b981' : 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Check size={14} color={isMatch ? '#10b981' : '#64748b'} /> Senhas iguais
                </div>
              </div>
            </div>
          )}

          <button 
            type="submit" 
            className="btn-primary" 
            style={{ width: '100%', padding: '14px', marginTop: '10px' }}
          >
            {isRegister ? 'Concluir Cadastro' : 'Entrar na Conta'}
          </button>
        </form>

        <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          {isRegister ? (
            <span>Já tem uma conta? <button onClick={() => setIsRegister(false)} style={{ background: 'none', color: 'var(--primary-pink)', fontWeight: '700' }}>Fazer login</button></span>
          ) : (
            <span>Não tem conta? <button onClick={() => setIsRegister(true)} style={{ background: 'none', color: 'var(--primary-pink)', fontWeight: '700' }}>Cadastre-se</button></span>
          )}
        </div>

      </div>
    </div>
  );
};
