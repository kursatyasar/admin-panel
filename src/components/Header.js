import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('tr');
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'de', name: 'DE', flag: '🇩🇪' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageChange = (e) => {
    setCurrentLang(e.target.value);
  };

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılacak
    console.log('Çıkış yapıldı');
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <div className="logo-container">
            <i className="fas fa-chart-line"></i>
            <span className="logo-text">YK Panel</span>
          </div>
        </Link>
      </div>

      <div className="user-menu" ref={dropdownRef}>
        <div className="language-selector">
          <select value={currentLang} onChange={handleLanguageChange}>
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                <span className="lang-flag">{lang.flag}</span> {lang.name}
              </option>
            ))}
          </select>
        </div>
        
        <button 
          className="user-dropdown-btn" 
          onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
        >
          <i className="fas fa-user"></i>
          <span>Yasar Kaya</span>
          <i className={`fas fa-chevron-${isUserMenuOpen ? 'up' : 'down'}`}></i>
        </button>

        {isUserMenuOpen && (
          <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">
              <i className="fas fa-user-circle"></i>
              Profil
            </Link>
            <Link to="/account" className="dropdown-item">
              <i className="fas fa-cog"></i>
              Hesap Ayarları
            </Link>
            <div className="dropdown-divider"></div>
            <button onClick={handleLogout} className="dropdown-item">
              <i className="fas fa-sign-out-alt"></i>
              Güvenli Çıkış
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 