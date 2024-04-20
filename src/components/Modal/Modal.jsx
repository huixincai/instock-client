import React from "react";
import closeIcon from "../../assets/icons/close-24px.svg";

import "./Modal.scss";

const Modal = ({ title, content, onClose, onDelete }) => {
  return (
    <div className="modal-wrapper">
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__content">
          <div className="modal__header">
            <img
              src={closeIcon}
              alt="close icon"
              className="modal__header-close"
              aria-label="Close modal"
              onClick={onClose}
            />
          </div>
          <div className="modal__body">
            <h2 className="modal__body-title">{title}</h2>
            {content}
          </div>
          <div className="modal__footer">
            <button className="modal__button--cancel" onClick={onClose}>
              Cancel
            </button>
            <button className="modal__button--delete" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
