const Modal = ({ showModal, onClose, title, children }) => {
  if (!showModal) return null;

  return (
    <div className="card modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h4>{title}</h4>
          <button className="close-button btn btn-secondary fs-5" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary close-button" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
