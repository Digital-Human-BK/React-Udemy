import React from 'react';
import { Transition } from 'react-transition-group';

import './Modal.css';

const modal = (props) => {
  const animationTiming = {
    enter: 400,
    exit: 1000,
  };
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={props.show}
      timeout={animationTiming}
      onEnter={()=> console.log('onEnter')}
      onEntering={()=> console.log('onEntering')}
      onEntered={()=> console.log('onEntered')}
      onExit={()=> console.log('onExit')}
      onExiting={()=> console.log('onExiting')}
      onExited={()=> console.log('onExited')}
    >
      {(state) => {
        let cssClasses = `Modal ${
          state === 'entering'
            ? 'ModalOpen'
            : state === 'exiting'
            ? 'ModalClosed'
            : null
        }`;
        return (
          <div className={cssClasses}>
            <h1>A Modal</h1>
            <button className='Button' onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }}
    </Transition>
  );
};

export default modal;
