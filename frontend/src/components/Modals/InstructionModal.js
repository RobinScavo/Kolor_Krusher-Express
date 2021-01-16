import React, { useState, useContext } from 'react';
import { Modal } from '../../ModalContext/Modal';
// import SignUpForm from '../SignupFormPage/SignUpFormPage';
import LoginFormModal from '../Modals/LoginFormModal';
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'

function InstructionModel(props) {
  const values = useContext(KarenContext)
  // const [showModal, setShowModal] = useState(false);

  return (
    <>
        <h1>Pregame Instructions</h1>
        <button onClick={props.closeModal}>Zen Mode</button>
        <button onClick={() => {
          props.closeModal();
          values.startGame();
        }}>
          Battle Mode</button>
        <button>Demo Mode</button>
        <button>Log In</button>
        <button>Sign Up</button>
    </>
)
}

export default InstructionModel;
