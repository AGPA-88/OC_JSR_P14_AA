import React from "react";
import './modal.css'

const Modal = ({ isOpen, setStatus, modalText }) => {

      const closeModal = () => {
        setStatus(false);
      };
      
    if (!isOpen) return null;
    
    return (
        <div className='modal-background'>
            <div className="modal">
                <div className="modal-content">
                {modalText}
                <span className="close" onClick={closeModal}>
                    &times;
                </span>
                </div>
            </div>
        </div>
    );
  };
  
  export default Modal;