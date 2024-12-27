import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'fas fa-home', text: 'Ana Sayfa' },
    { path: '/dashboard', icon: 'fas fa-chart-line', text: 'Dashboard' },
    {
      path: '/users',
      icon: 'fas fa-users',
      text: 'Kullanıcı İşlemleri',
      subItems: [
        { path: '/users', text: 'Kullanıcı Listesi' },
        { path: '/users/roles', text: 'Rol Yönetimi' }
      ]
    },
    { path: '/settings', icon: 'fas fa-cog', text: 'Ayarlar' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (item) => {
    if (!item.subItems) return false;
    return item.subItems.some(subItem => location.pathname === subItem.path);
  };

  return (
    <nav 
      className={`sidebar ${isHovered ? 'expanded' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="sidebar-content">
        {menuItems.map((item) => (
          <div key={item.path} className="menu-item-container">
            <Link
              to={item.path}
              className={`menu-item ${isActive(item.path) || isParentActive(item) ? 'active' : ''}`}
            >
              <i className={item.icon}></i>
              <span className="menu-text">{item.text}</span>
            </Link>
            {item.subItems && isHovered && (
              <div className="submenu">
                {item.subItems.map((subItem) => (
                  <Link
                    key={subItem.path}
                    to={subItem.path}
                    className={`submenu-item ${isActive(subItem.path) ? 'active' : ''}`}
                  >
                    {subItem.text}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar; 