import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onToggleCart} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('overlays');
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onToggleCart={props.onToggleCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
