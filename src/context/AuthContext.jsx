import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('fitlady_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [activePackage, setActivePackage] = useState(() => {
    try {
      const saved = localStorage.getItem('fitlady_package');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [questionnaireData, setQuestionnaireData] = useState(() => {
    try {
      const saved = localStorage.getItem('fitlady_questionnaire');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [progressHistory, setProgressHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('fitlady_progress');
      return saved ? JSON.parse(saved) : [
        { date: 'Semana 1', weight: 64.5, bodyFat: 24.0, workoutAdherence: 90, dietAdherence: 95 },
        { date: 'Semana 2', weight: 63.8, bodyFat: 23.5, workoutAdherence: 85, dietAdherence: 90 },
        { date: 'Semana 3', weight: 63.2, bodyFat: 23.1, workoutAdherence: 95, dietAdherence: 92 },
        { date: 'Semana 4', weight: 62.5, bodyFat: 22.4, workoutAdherence: 100, dietAdherence: 96 }
      ];
    } catch {
      return [];
    }
  });

  const [updatesLog, setUpdatesLog] = useState(() => {
    try {
      const saved = localStorage.getItem('fitlady_updates_log');
      return saved ? JSON.parse(saved) : [
        {
          id: 1,
          date: '18/10/2026',
          weight: '62.5',
          skippedExercises: false,
          dietFeedback: 'liked',
          notes: 'Treinos de inferiores com excelente intensidade. Ajustei a ingestão de água para 3L.'
        }
      ];
    } catch {
      return [];
    }
  });

  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('fitlady_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem('fitlady_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('fitlady_user');
    }
  }, [user]);

  useEffect(() => {
    if (activePackage) {
      localStorage.setItem('fitlady_package', JSON.stringify(activePackage));
    } else {
      localStorage.removeItem('fitlady_package');
    }
  }, [activePackage]);

  useEffect(() => {
    if (questionnaireData) {
      localStorage.setItem('fitlady_questionnaire', JSON.stringify(questionnaireData));
    }
  }, [questionnaireData]);

  useEffect(() => {
    localStorage.setItem('fitlady_progress', JSON.stringify(progressHistory));
  }, [progressHistory]);

  useEffect(() => {
    localStorage.setItem('fitlady_updates_log', JSON.stringify(updatesLog));
  }, [updatesLog]);

  useEffect(() => {
    localStorage.setItem('fitlady_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Auth Methods
  const registerUser = (email, password) => {
    const hasMin8 = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!hasMin8 || !hasUpper || !hasSpecial) {
      throw new Error("A senha deve ter no mínimo 8 caracteres, 1 letra maiúscula e 1 caractere especial.");
    }

    const newUser = {
      uid: 'user_' + Date.now(),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString()
    };

    setUser(newUser);
    showToast(`Bem-vinda, ${newUser.name}!`);
    return newUser;
  };

  const loginUser = (email, password) => {
    if (!email || !password) {
      throw new Error("Preencha todos os campos.");
    }
    const loggedUser = {
      uid: 'user_' + Date.now(),
      email,
      name: email.split('@')[0],
      createdAt: new Date().toISOString()
    };
    setUser(loggedUser);
    showToast(`Bem-vinda de volta, ${loggedUser.name}!`);
    return loggedUser;
  };

  const logoutUser = () => {
    setUser(null);
    showToast('Você saiu da sua conta.');
  };

  // Subscription Method
  const purchasePackage = (packageDetails) => {
    const subscription = {
      ...packageDetails,
      purchasedAt: new Date().toISOString(),
      status: 'active'
    };
    setActivePackage(subscription);
    showToast(`Plano ${packageDetails.name} selecionado com sucesso!`);
    return subscription;
  };

  // Questionnaire Submission
  const saveQuestionnaire = (data) => {
    const updated = {
      ...data,
      submittedAt: new Date().toISOString()
    };
    setQuestionnaireData(updated);
    showToast('Anamnese registrada com sucesso!');
  };

  // Log Progress Update
  const addWeeklyUpdate = (data) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      ...data
    };
    setUpdatesLog(prev => [newEntry, ...prev]);

    if (data.weight) {
      setProgressHistory(prev => [
        ...prev,
        {
          date: `Semana ${prev.length + 1}`,
          weight: parseFloat(data.weight),
          bodyFat: prev[prev.length - 1]?.bodyFat ? Math.max(15, prev[prev.length - 1].bodyFat - 0.2) : 22.0,
          workoutAdherence: data.skippedExercises ? 80 : 96,
          dietAdherence: data.dietFeedback === 'disliked' ? 82 : 94
        }
      ]);
    }
    showToast('Check-in semanal atualizado com sucesso!');
  };

  // Cart Methods
  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`"${product.name}" adicionado à sacola.`);
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AuthContext.Provider value={{
      user,
      activePackage,
      questionnaireData,
      progressHistory,
      updatesLog,
      cartItems,
      toastMessage,
      showToast,
      registerUser,
      loginUser,
      logoutUser,
      purchasePackage,
      saveQuestionnaire,
      addWeeklyUpdate,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      clearCart,
      isSubscribed: Boolean(user && activePackage)
    }}>
      {children}
      {toastMessage && (
        <div style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: 'var(--bg-elevated)',
          color: '#ffffff',
          padding: '12px 20px',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--border-medium)',
          boxShadow: 'var(--shadow-card)',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '0.9rem',
          fontWeight: '500',
          animation: 'fadeIn 0.25s ease'
        }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </AuthContext.Provider>
  );
};
