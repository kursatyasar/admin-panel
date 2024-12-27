import React from 'react';
import './Pages.css';

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Ana Sayfa</h1>
        <p className="page-description">Hoş Geldiniz! Panel istatistikleri ve özet bilgiler.</p>
      </div>
      
      <div className="stats-grid">
        <div className="stat-card">
          <i className="fas fa-users stat-icon"></i>
          <div className="stat-info">
            <h3>Toplam Kullanıcı</h3>
            <p className="stat-number">1,234</p>
          </div>
        </div>
        
        <div className="stat-card">
          <i className="fas fa-chart-line stat-icon"></i>
          <div className="stat-info">
            <h3>Aylık Ziyaret</h3>
            <p className="stat-number">45.2K</p>
          </div>
        </div>
        
        <div className="stat-card">
          <i className="fas fa-tasks stat-icon"></i>
          <div className="stat-info">
            <h3>Aktif Projeler</h3>
            <p className="stat-number">28</p>
          </div>
        </div>
        
        <div className="stat-card">
          <i className="fas fa-clock stat-icon"></i>
          <div className="stat-info">
            <h3>Ortalama Oturum</h3>
            <p className="stat-number">24m</p>
          </div>
        </div>
      </div>

      <div className="recent-activity">
        <h2>Son Aktiviteler</h2>
        <div className="activity-list">
          <div className="activity-item">
            <i className="fas fa-user-plus"></i>
            <div className="activity-content">
              <p>Yeni kullanıcı kaydı: Ahmet Yılmaz</p>
              <span className="activity-time">2 saat önce</span>
            </div>
          </div>
          <div className="activity-item">
            <i className="fas fa-file-alt"></i>
            <div className="activity-content">
              <p>Yeni rapor oluşturuldu: Aralık Analizi</p>
              <span className="activity-time">4 saat önce</span>
            </div>
          </div>
          <div className="activity-item">
            <i className="fas fa-cog"></i>
            <div className="activity-content">
              <p>Sistem güncellemesi tamamlandı</p>
              <span className="activity-time">6 saat önce</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 