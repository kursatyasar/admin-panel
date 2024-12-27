import React from 'react';
import './Pages.css';

const UserRoles = () => {
  const roles = [
    { id: 1, name: 'Admin', permissions: ['Tam Yetki'], userCount: 3 },
    { id: 2, name: 'Editör', permissions: ['İçerik Yönetimi', 'Kullanıcı Görüntüleme'], userCount: 8 },
    { id: 3, name: 'Kullanıcı', permissions: ['İçerik Görüntüleme'], userCount: 24 },
    { id: 4, name: 'Moderatör', permissions: ['İçerik Yönetimi', 'Kullanıcı Yönetimi'], userCount: 5 }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Rol Yönetimi</h1>
        <p className="page-description">Sistem rollerini ve yetkilerini yönetin</p>
      </div>

      <div className="action-bar">
        <button className="action-button primary">
          <i className="fas fa-plus"></i> Yeni Rol Ekle
        </button>
      </div>

      <div className="roles-grid">
        {roles.map(role => (
          <div key={role.id} className="role-card">
            <div className="role-header">
              <h3>{role.name}</h3>
              <span className="user-count">
                <i className="fas fa-users"></i> {role.userCount} Kullanıcı
              </span>
            </div>
            <div className="role-permissions">
              <h4>Yetkiler:</h4>
              <ul>
                {role.permissions.map((permission, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {permission}
                  </li>
                ))}
              </ul>
            </div>
            <div className="role-actions">
              <button className="icon-button" title="Düzenle">
                <i className="fas fa-edit"></i>
              </button>
              <button className="icon-button" title="Sil">
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRoles; 