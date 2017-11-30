import React, {Component} from 'react';

import Modal from './Modal';
import './ModalButton.css'

class ModalButton extends Component {
  state = {
    isModalShow: false
  }

  hideModal = () => {
    this.setState({
      isModalShow: false
    });
  }
  showModal = () => {
    this.setState({
      isModalShow: true
    });
  }

  renderModal() {
    const { isModalShow } = this.state;
    if (this.state.isModalShow) {
      return (
        <Modal>
          <div className="modal">
            <div className="modal__fog">
              <div className="modal__body">
                <h1>Modal Window</h1>
                <button onClick={ this.hideModal }>Close</button>
              </div>
            </div>
          </div>
        </Modal>
      )
    };
  }

  render() {
    return (
      <div className="component-wrapper">
        <button onClick={ this.showModal }>Show Modal</button>
        { this.renderModal() }
      </div>
    );
  }
}

export default ModalButton;
