import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simüle edilmiş login işlemi
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify({
      email: formData.email,
      name: 'Test Kullanıcı'
    }));
    
    // Ana sayfaya yönlendir
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>YK Panel</h1>
          <p>Yönetim paneline hoş geldiniz</p>
        </div>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-posta adresiniz"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Şifreniz"
                required
              />
            </div>
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Beni hatırla
            </label>
            <a href="#" className="forgot-password">Şifremi unuttum</a>
          </div>
          <button type="submit" className="login-button">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login; 