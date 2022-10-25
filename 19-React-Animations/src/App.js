import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import './App.css';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <div className='App'>
        <h1>React Animations</h1>
        <button
          className='Button'
          onClick={() =>
            this.setState((prev) => ({ showBlock: !prev.showBlock }))
          }
        >
          Toggle
        </button>
        <br />
        <br />

        <Transition
          in={this.state.showBlock}
          timeout={300}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <div
              style={{
                backgroundColor: 'red',
                width: 100,
                height: 100,
                margin: 'auto',
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1,
              }}
            ></div>
          )}
        </Transition>

        <br />
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        {this.state.modalIsOpen && <Backdrop show={this.state.modalIsOpen} />}
        <button className='Button' onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
