import React, { useState, useMemo } from 'react';
import './Pages.css';
import UserModal from '../components/UserModal';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import UpdateUserModal from '../components/UpdateUserModal';

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [users, setUsers] = useState([
    { id: 1, name: 'Ahmet Yılmaz', email: 'ahmet@example.com', role: 'Admin', status: 'Aktif' },
    { id: 2, name: 'Mehmet Demir', email: 'mehmet@example.com', role: 'Editör', status: 'Aktif' },
    { id: 3, name: 'Ayşe Kara', email: 'ayse@example.com', role: 'Kullanıcı', status: 'Beklemede' },
    { id: 4, name: 'Fatma Şahin', email: 'fatma@example.com', role: 'Kullanıcı', status: 'Aktif' },
    { id: 5, name: 'Ali Öztürk', email: 'ali@example.com', role: 'Editör', status: 'Devre Dışı' },
    { id: 6, name: 'Zeynep Yıldız', email: 'zeynep@example.com', role: 'Kullanıcı', status: 'Aktif' },
    { id: 7, name: 'Mustafa Aydın', email: 'mustafa@example.com', role: 'Editör', status: 'Aktif' },
    { id: 8, name: 'Elif Çelik', email: 'elif@example.com', role: 'Kullanıcı', status: 'Beklemede' },
    { id: 9, name: 'Can Kaya', email: 'can@example.com', role: 'Kullanıcı', status: 'Devre Dışı' },
    { id: 10, name: 'Selin Arslan', email: 'selin@example.com', role: 'Editör', status: 'Aktif' },
    { id: 11, name: 'Burak Demir', email: 'burak@example.com', role: 'Kullanıcı', status: 'Aktif' },
    { id: 12, name: 'Deniz Yılmaz', email: 'deniz@example.com', role: 'Kullanıcı', status: 'Beklemede' },
  ]);

  const ITEMS_PER_PAGE = 5;

  // Arama ve filtreleme
  const filteredUsers = useMemo(() => {
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  // Sayfalama hesaplamaları
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredUsers.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredUsers, currentPage]);

  // Sayfa değiştirme fonksiyonları
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleAddUser = (userData) => {
    const newUser = {
      id: users.length + 1,
      ...userData
    };
    setUsers([...users, newUser]);
    setIsModalOpen(false);
  };

  // Sayfa numaralarını oluştur
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          className={`page-button ${currentPage === i ? 'active' : ''}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  const handleDeleteClick = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (userToDelete) {
      setUsers(users.filter(user => user.id !== userToDelete.id));
      setIsDeleteModalOpen(false);
      setUserToDelete(null);
    }
  };

  const handleUpdateClick = (user) => {
    setUserToUpdate(user);
    setIsUpdateModalOpen(true);
  };

  const handleUpdateSubmit = (updatedData) => {
    setUsers(users.map(user => 
      user.id === userToUpdate.id 
        ? { ...user, ...updatedData }
        : user
    ));
    setIsUpdateModalOpen(false);
    setUserToUpdate(null);
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Kullanıcılar</h1>
        <p className="page-description">Sistem kullanıcılarının yönetimi</p>
      </div>

      <div className="search-box">
        <i className="fas fa-search"></i>
        <input 
          type="text" 
          placeholder="Kullanıcı ara..." 
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Arama yapıldığında ilk sayfaya dön
          }}
        />
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
            {paginatedUsers.map(user => (
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
                  <button 
                    className="icon-button" 
                    title="Düzenle"
                    onClick={() => handleUpdateClick(user)}
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                  <button 
                    className="icon-button" 
                    title="Sil"
                    onClick={() => handleDeleteClick(user)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredUsers.length === 0 && (
          <div className="no-results">
            Aranan kriterlere uygun kullanıcı bulunamadı.
          </div>
        )}
      </div>

      {filteredUsers.length > 0 && (
        <div className="pagination">
          <button 
            className="page-button" 
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          {renderPageNumbers()}
          <button 
            className="page-button" 
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      )}

      <UserModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddUser}
      />

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setUserToDelete(null);
        }}
        onConfirm={handleDeleteConfirm}
        userName={userToDelete?.name}
      />

      <UpdateUserModal
        isOpen={isUpdateModalOpen}
        onClose={() => {
          setIsUpdateModalOpen(false);
          setUserToUpdate(null);
        }}
        onSubmit={handleUpdateSubmit}
        user={userToUpdate}
      />
    </div>
  );
};

export default Users; 