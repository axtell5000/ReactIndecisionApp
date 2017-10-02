import React from 'react';
import Modal from 'react-modal';

// contentLabel - for accessibilty - required
// !! - convert to true boolean value
// onRequestClose - adds more usability, allows you to close modal with Esc key or clicking outside the Modal. Must have
// event handler connected
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleClose}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__title">Selected Option</h3>
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleClose}>Okay</button>
  </Modal>
);

export default OptionModal
