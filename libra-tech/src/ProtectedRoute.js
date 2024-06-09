import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children, requiredRoli }) => {
  debugger
  const { isAuthenticated, Roli } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  var role = localStorage.getItem('Roli');

  if (requiredRoli && role !== requiredRoli) {
    return <Navigate to="/home" />;
  }

  return children;
};

export default ProtectedRoute;
