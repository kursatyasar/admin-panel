import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState(null);
  const location = useLocation();

  const menuItems = [
    { path: '/', icon: 'fas fa-home', text: 'Ana Sayfa' },
    { path: '/dashboard', icon: 'fas fa-chart-line', text: 'Dashboard' },
    {
      icon: 'fas fa-users',
      text: 'Kullanıcı İşlemleri',
      submenu: [
        { path: '/users', text: 'Kullanıcı Listesi' },
        { path: '/users/roles', text: 'Rol Yönetimi' }
      ]
    },
    { path: '/settings', icon: 'fas fa-cog', text: 'Ayarlar' }
  ];

  const handleMenuClick = (item) => {
    if (item.submenu) {
      setExpandedSubmenu(expandedSubmenu === item.text ? null : item.text);
    }
  };

  const isSubmenuExpanded = (item) => {
    return expandedSubmenu === item.text;
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (item) => {
    if (!item.submenu) return false;
    return item.submenu.some(subItem => location.pathname === subItem.path);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <button 
        className="toggle-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <i className={`fas fa-${isExpanded ? 'times' : 'bars'}`}></i>
      </button>
      
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item-wrapper">
            {item.submenu ? (
              <>
                <button
                  className={`menu-item ${isParentActive(item) ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item)}
                >
                  <i className={item.icon}></i>
                  <span className="menu-text">{item.text}</span>
                  {isExpanded && (
                    <i className={`fas fa-chevron-${isSubmenuExpanded(item) ? 'down' : 'right'} submenu-arrow`}></i>
                  )}
                </button>
                {isSubmenuExpanded(item) && isExpanded && (
                  <div className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`submenu-item ${isActive(subItem.path) ? 'active' : ''}`}
                      >
                        <span className="submenu-dot">•</span>
                        <span className="menu-text">{subItem.text}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={item.path}
                className={`menu-item ${isActive(item.path) ? 'active' : ''}`}
              >
                <i className={item.icon}></i>
                <span className="menu-text">{item.text}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar; 