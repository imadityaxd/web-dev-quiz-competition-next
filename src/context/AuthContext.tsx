// context/AuthContext.tsx
"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    timerEnded: boolean;
    setTimerEnded: (isAllowed: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [timerEnded, setTimerEnded] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ timerEnded, setTimerEnded }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
