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
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    if (user) localStorage.setItem('fitlady_user', JSON.stringify(user));
    else localStorage.removeItem('fitlady_user');
  }, [user]);

  useEffect(() => {
    if (activePackage) localStorage.setItem('fitlady_package', JSON.stringify(activePackage));
    else localStorage.removeItem('fitlady_package');
  }, [activePackage]);

  useEffect(() => {
    if (questionnaireData) localStorage.setItem('fitlady_questionnaire', JSON.stringify(questionnaireData));
  }, [questionnaireData]);

  useEffect(() => {
    localStorage.setItem('fitlady_progress', JSON.stringify(progressHistory));
  }, [progressHistory]);

  useEffect(() => {
    localStorage.setItem('fitlady_updates_log', JSON.stringify(updatesLog));
  }, [updatesLog]);

  // Login / cadastro instantâneo — sem validação real
  const enterAsGuest = (name = 'Aluna FitLady') => {
    const newUser = {
      uid: 'user_' + Date.now(),
      email: 'aluna@fitlady.com',
      name,
      createdAt: new Date().toISOString()
    };
    setUser(newUser);
    showToast(`Bem-vinda, ${newUser.name}!`);
    return newUser;
  };

  const registerUser = () => enterAsGuest('Aluna FitLady');
  const loginUser = () => enterAsGuest('Aluna FitLady');

  const logoutUser = () => {
    setUser(null);
    showToast('Você saiu da sua conta.');
  };

  const purchasePackage = (packageDetails) => {
    const subscription = {
      ...packageDetails,
      purchasedAt: new Date().toISOString(),
      status: 'active'
    };
    setActivePackage(subscription);
    showToast(`Pacote ${packageDetails.name} ativado!`);
    return subscription;
  };

  const saveQuestionnaire = (data) => {
    const updated = { ...data, submittedAt: new Date().toISOString() };
    setQuestionnaireData(updated);
    showToast('A FitLady IA analisou suas respostas!');
    return updated;
  };

  const addWeeklyUpdate = (data) => {
    const newEntry = {
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
      ...data
    };
    setUpdatesLog((prev) => [newEntry, ...prev]);

    if (data.weight) {
      setProgressHistory((prev) => [
        ...prev,
        {
          date: `Semana ${prev.length + 1}`,
          weight: parseFloat(data.weight),
          bodyFat: prev[prev.length - 1]?.bodyFat
            ? Math.max(15, prev[prev.length - 1].bodyFat - 0.2)
            : 22.0,
          workoutAdherence: data.skippedExercises ? 80 : 96,
          dietAdherence: data.dietFeedback === 'disliked' ? 82 : 94
        }
      ]);
    }
    showToast('Atualização salva!');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        activePackage,
        questionnaireData,
        progressHistory,
        updatesLog,
        toastMessage,
        showToast,
        registerUser,
        loginUser,
        enterAsGuest,
        logoutUser,
        purchasePackage,
        saveQuestionnaire,
        addWeeklyUpdate,
        isSubscribed: Boolean(user && activePackage)
      }}
    >
      {children}
      {toastMessage && (
        <div
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#000',
            color: '#fff',
            padding: '12px 20px',
            borderRadius: '9999px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
            zIndex: 9999,
            fontSize: '0.9rem',
            fontWeight: '500'
          }}
        >
          {toastMessage}
        </div>
      )}
    </AuthContext.Provider>
  );
};
