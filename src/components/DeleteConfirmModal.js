import React from 'react';
import './Modal.css';
import './DeleteConfirmModal.css';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="delete-modal">
        <div className="modal-container" onClick={e => e.stopPropagation()}>
          <div className="modal-header">
            <h2>Kullanıcı Silme</h2>
            <button className="close-button" onClick={onClose}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="modal-content">
            <div className="delete-icon">
              <i className="fas fa-exclamation-circle"></i>
            </div>
            <p className="delete-message">
              <strong>{userName}</strong> adlı kullanıcıyı silmek istediğinize emin misiniz?
            </p>
            <p className="delete-warning">
              Bu işlem geri alınamaz.
            </p>
          </div>
          <div className="modal-footer">
            <button className="button secondary" onClick={onClose}>
              Vazgeç
            </button>
            <button className="button danger" onClick={onConfirm}>
              Sil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal; 