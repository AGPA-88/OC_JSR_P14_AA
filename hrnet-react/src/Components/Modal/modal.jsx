import './modal.css'

const Modal = ({ isOpen, onClose, modalText }) => {
    if (!isOpen) return null;
  
    return (
        <div className='modal-background'>
            <div className="modal">
                <div className="modal-content">
                {modalText}
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                </div>
            </div>
        </div>
    );
  };
  
  export default Modal;