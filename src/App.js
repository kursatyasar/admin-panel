import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import UserRoles from './pages/UserRoles';
import Login from './pages/Login';
import './App.css';

const App = () => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  // Auth durumu değiştiğinde sayfayı yenile
  React.useEffect(() => {
    const checkAuth = () => {
      const currentAuth = localStorage.getItem('isAuthenticated') === 'true';
      if (isAuthenticated !== currentAuth) {
        window.location.href = currentAuth ? '/' : '/login';
      }
    };

    window.addEventListener('storage', checkAuth);
    return () => window.removeEventListener('storage', checkAuth);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login" 
          element={isAuthenticated ? <Navigate to="/" /> : <Login />} 
        />
        
        <Route
          path="/*"
          element={isAuthenticated ? (
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/roles" element={<UserRoles />} />
              </Routes>
            </Layout>
          ) : (
            <Navigate to="/login" />
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
