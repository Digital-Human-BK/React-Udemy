import React from 'react';
import ReactDOM from 'react-dom';

import './ErrorModal.css';

const Backdrop = (props) => {
  return <div className='backdrop' onClick={props.onClick} />;
};

const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      <div className='error-modal'>
        <h2>An Error Occurred!</h2>
        <p>{props.children}</p>
        <div className='error-modal__actions'>
          <button type='button' onClick={props.onClick}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

const ErrorModal = React.memo((props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClick={props.onClose}>{props.children}</ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </>
  );
});

export default ErrorModal;
