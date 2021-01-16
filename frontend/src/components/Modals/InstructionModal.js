import React, { useState, useContext } from 'react';
import { Modal } from '../../ModalContext/Modal';

// import SignUpForm from '../SignupFormPage/SignUpFormPage';
import LoginFormModal from '../Modals/LoginFormModal';
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'
import SignUpModal from './SignUpModal';

function InstructionModel(props) {
  const values = useContext(KarenContext)
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
        {/* ZenMode */}
        <button>Zen Mode</button>

        {/* BattleMode */}
        <button onClick={() => {
          props.closeModal();
          values.startGame();
        }}>Battle Mode</button>

        {/* Demo mode */}
        <button>Demo Mode</button>

        {/* Log In */}
        <button onClick={() => {
          setShowLoginModal(true)
        }}>Log In</button>
        {showLoginModal && (
          <Modal >
              <LoginFormModal closeModal={props.closeModal}/>
          </Modal>
        )}

        {/* Sign Up */}
        <button onClick={() => {
          setShowSignUpModal(true)
        }}>Sign Up</button>
        {showSignUpModal && (
          <Modal >
              <SignUpModal closeModal={props.closeModal}/>
          </Modal>
        )}
    </>
)
}

export default InstructionModel;

// onClose={() => setShowModal(false)}
