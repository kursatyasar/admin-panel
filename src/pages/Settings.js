import React from 'react';
import './Pages.css';

const Settings = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Ayarlar</h1>
        <p className="page-description">Sistem ayarlarını özelleştirin</p>
      </div>

      <div className="settings-grid">
        <div className="settings-section">
          <h2><i className="fas fa-user-cog"></i> Profil Ayarları</h2>
          <div className="settings-form">
            <div className="form-group">
              <label>Profil Fotoğrafı</label>
              <div className="profile-upload">
                <div className="profile-image">
                  <i className="fas fa-user"></i>
                </div>
                <button className="upload-btn">Fotoğraf Yükle</button>
              </div>
            </div>
            <div className="form-group">
              <label>Ad Soyad</label>
              <input type="text" value="Yasar Kaya" />
            </div>
            <div className="form-group">
              <label>E-posta</label>
              <input type="email" value="yasar@example.com" />
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2><i className="fas fa-bell"></i> Bildirim Ayarları</h2>
          <div className="settings-list">
            <div className="settings-item">
              <div className="setting-info">
                <h3>E-posta Bildirimleri</h3>
                <p>Önemli güncellemeler için e-posta al</p>
              </div>
              <label className="switch">
                <input type="checkbox" checked />
                <span className="slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div className="setting-info">
                <h3>Masaüstü Bildirimleri</h3>
                <p>Tarayıcı bildirimleri</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        <div className="settings-section">
          <h2><i className="fas fa-palette"></i> Görünüm Ayarları</h2>
          <div className="settings-list">
            <div className="settings-item">
              <div className="setting-info">
                <h3>Karanlık Mod</h3>
                <p>Koyu tema kullan</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <div className="settings-item">
              <div className="setting-info">
                <h3>Kompakt Görünüm</h3>
                <p>Daha sıkışık yerleşim</p>
              </div>
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="settings-actions">
        <button className="action-button">İptal</button>
        <button className="action-button primary">Değişiklikleri Kaydet</button>
      </div>
    </div>
  );
};

export default Settings; 