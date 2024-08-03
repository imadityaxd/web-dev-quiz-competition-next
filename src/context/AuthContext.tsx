// context/AuthContext.tsx
"use client";

import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  timerEnded: boolean | null;
  setTimerEnded: (isAllowed: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [timerEnded, setTimerEnded] = useState<boolean | null>(null);

  useEffect(() => {
    console.log("check", timerEnded)
    if (timerEnded === false) {
      // Make the API call when the timer is false
      axios
        .post("/api/archiveUsers")
        .then((response) => {
          console.log("Users archived successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error archiving users:", error);
        });
    }
  }, [timerEnded]);

  return (
    <AuthContext.Provider value={{ timerEnded, setTimerEnded }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
