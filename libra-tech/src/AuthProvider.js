import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [Roli, setRoli] = useState('');

  useEffect(() => {
    const Token = localStorage.getItem('Token');
    const Roli = localStorage.getItem('Roli');
    if (Token && Roli) {
      setIsAuthenticated(true);
      setRoli(Roli);
    }
  }, []);

  const login = (Token, Roli) => {
    localStorage.setItem('Token', Token);
    localStorage.setItem('Roli', Roli);
    setIsAuthenticated(true);
    setRoli(Roli);
  };

  const logout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('Roli');
    setIsAuthenticated(false);
    setRoli('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, Roli, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
