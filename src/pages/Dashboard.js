import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-users"></i>
            <h3>Toplam Kullanıcı</h3>
          </div>
          <div className="card-body">
            <span className="number">150</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-user-check"></i>
            <h3>Aktif Kullanıcı</h3>
          </div>
          <div className="card-body">
            <span className="number">120</span>
          </div>
        </div>

        <div className="dashboard-card">
          <div className="card-header">
            <i className="fas fa-user-clock"></i>
            <h3>Bekleyen Kullanıcı</h3>
          </div>
          <div className="card-body">
            <span className="number">30</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 