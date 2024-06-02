import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children, requiredRoli }) => {
  const { isAuthenticated, Roli } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (requiredRoli && Roli !== requiredRoli) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;
