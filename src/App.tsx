import React from 'react';
import { AuthProvider } from './hooks/useAuth';
import { Routes } from './routes';
import { globalStyles } from './styles/global';

function App() {
  return (
    <AuthProvider>
      {globalStyles()}
      <Routes />
    </AuthProvider>
  );
}

export default App;
