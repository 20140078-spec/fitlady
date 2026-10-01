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
    const saved = localStorage.getItem('fitlady_user');
    return saved ? JSON.parse(saved) : null;
  });

  const [activePackage, setActivePackage] = useState(() => {
    const saved = localStorage.getItem('fitlady_package');
    return saved ? JSON.parse(saved) : null;
  });

  const [questionnaireData, setQuestionnaireData] = useState(() => {
    const saved = localStorage.getItem('fitlady_questionnaire');
    return saved ? JSON.parse(saved) : null;
  });

  const [progressHistory, setProgressHistory] = useState(() => {
    const saved = localStorage.getItem('fitlady_progress');
    return saved ? JSON.parse(saved) : [
      { date: 'Semana 1', weight: 64.5, bodyFat: 24.0, workoutAdherence: 90, dietAdherence: 95 },
      { date: 'Semana 2', weight: 63.8, bodyFat: 23.5, workoutAdherence: 85, dietAdherence: 90 },
      { date: 'Semana 3', weight: 63.2, bodyFat: 23.1, workoutAdherence: 95, dietAdherence: 92 },
      { date: 'Semana 4', weight: 62.5, bodyFat: 22.4, workoutAdherence: 100, dietAdherence: 96 }
    ];
  });

  const [updatesLog, setUpdatesLog] = useState(() => {
    const saved = localStorage.getItem('fitlady_updates_log');
    return saved ? JSON.parse(saved) : [];
  });

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

  // Auth Methods
  const registerUser = (email, password) => {
    // Password validation rule check
    // Must have at least 8 chars, 1 uppercase, 1 special character
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
    return loggedUser;
  };

  const logoutUser = () => {
    setUser(null);
  };

  // Subscription Method
  const purchasePackage = (packageDetails) => {
    const subscription = {
      ...packageDetails,
      purchasedAt: new Date().toISOString(),
      status: 'active'
    };
    setActivePackage(subscription);
    return subscription;
  };

  // Questionnaire Submission
  const saveQuestionnaire = (data) => {
    const updated = {
      ...data,
      submittedAt: new Date().toISOString()
    };
    setQuestionnaireData(updated);
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
          bodyFat: prev[prev.length - 1]?.bodyFat ? Math.max(15, prev[prev.length - 1].bodyFat - 0.3) : 22.0,
          workoutAdherence: data.skippedExercises ? 75 : 95,
          dietAdherence: data.dietFeedback === 'disliked' ? 80 : 95
        }
      ]);
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      activePackage,
      questionnaireData,
      progressHistory,
      updatesLog,
      registerUser,
      loginUser,
      logoutUser,
      purchasePackage,
      saveQuestionnaire,
      addWeeklyUpdate,
      isSubscribed: Boolean(user && activePackage)
    }}>
      {children}
    </AuthContext.Provider>
  );
};
