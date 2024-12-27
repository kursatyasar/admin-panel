import React from 'react';
import './UserModal.css';

const UserModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = {
      name: formData.get('name'),
      email: formData.get('email'),
      role: formData.get('role'),
      status: formData.get('status')
    };
    onSubmit(userData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Yeni Kullanıcı Ekle</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Ad Soyad giriniz"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="E-posta adresi giriniz"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">Rol</label>
            <select id="role" name="role" required>
              <option value="">Rol seçiniz</option>
              <option value="Admin">Admin</option>
              <option value="Editör">Editör</option>
              <option value="Kullanıcı">Kullanıcı</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="status">Durum</label>
            <select id="status" name="status" required>
              <option value="">Durum seçiniz</option>
              <option value="Aktif">Aktif</option>
              <option value="Beklemede">Beklemede</option>
              <option value="Devre Dışı">Devre Dışı</option>
            </select>
          </div>

          <div className="modal-actions">
            <button type="button" className="button secondary" onClick={onClose}>
              İptal
            </button>
            <button type="submit" className="button primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal; 