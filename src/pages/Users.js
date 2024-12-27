import React, { useState } from 'react';
import './Pages.css';
import UserModal from '../components/UserModal';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'Editör', status: 'Aktif' },
    { id: 3, name: 'Ayşe Kara', email: 'ayse@example.com', role: 'Kullanıcı', status: 'Beklemede' },
    { id: 4, name: 'Fatma Şahin', email: 'fatma@example.com', role: 'Kullanıcı', status: 'Aktif' },
    { id: 5, name: 'Ali Öztürk', email: 'ali@example.com', role: 'Editör', status: 'Devre Dışı' },
  ]);

  const handleAddUser = (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Kullanıcılar</h1>
        <p className="page-description">Sistem kullanıcılarının yönetimi</p>
      </div>

      <div className="search-box">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Kullanıcı ara..." />
      </div>

      <div className="users-table-container">
        <div className="table-header">
          <h2>Kullanıcı Listesi</h2>
          <button className="action-button primary" onClick={() => setIsModalOpen(true)}>
            <i className="fas fa-user-plus"></i> Yeni Kullanıcı
          </button>
        </div>

        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Ad Soyad</th>
              <th>E-posta</th>
              <th>Rol</th>
              <th>Durum</th>
              <th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`role-badge ${user.role.toLowerCase()}`}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td className="actions">
                  <button className="icon-button" title="Düzenle">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="icon-button" title="Sil">
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination">
        <button className="page-button"><i className="fas fa-chevron-left"></i></button>
        <button className="page-button active">1</button>
        <button className="page-button">2</button>
        <button className="page-button">3</button>
        <button className="page-button"><i className="fas fa-chevron-right"></i></button>
      </div>

      <UserModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />
    </div>
  );
};

export default Users; 