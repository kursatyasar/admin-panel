import React from 'react';
import './Pages.css';

const Dashboard = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Dashboard</h1>
        <p className="page-description">Detaylı analiz ve raporlar</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card wide">
          <h3>Haftalık Ziyaretçi Grafiği</h3>
          <div className="chart-placeholder">
            <i className="fas fa-chart-area"></i>
            <p>Grafik Gösterimi</p>
          </div>
        </div>

        <div className="dashboard-card">
          <h3>Popüler Sayfalar</h3>
          <ul className="dashboard-list">
            <li>
              <span>Ana Sayfa</span>
              <span className="list-value">45%</span>
            </li>
            <li>
              <span>Ürünler</span>
              <span className="list-value">30%</span>
            </li>
            <li>
              <span>Hakkımızda</span>
              <span className="list-value">15%</span>
            </li>
            <li>
              <span>İletişim</span>
              <span className="list-value">10%</span>
            </li>
          </ul>
        </div>

        <div className="dashboard-card">
          <h3>Sistem Durumu</h3>
          <div className="status-list">
            <div className="status-item">
              <span>CPU Kullanımı</span>
              <div className="progress-bar">
                <div className="progress" style={{width: '65%'}}></div>
              </div>
              <span>65%</span>
            </div>
            <div className="status-item">
              <span>RAM Kullanımı</span>
              <div className="progress-bar">
                <div className="progress" style={{width: '45%'}}></div>
              </div>
              <span>45%</span>
            </div>
            <div className="status-item">
              <span>Disk Kullanımı</span>
              <div className="progress-bar">
                <div className="progress" style={{width: '80%'}}></div>
              </div>
              <span>80%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 