import React, { useState } from 'react';
import { Modal } from '../../ModalContext/Modal';
import SignUpForm from '../SignupFormPage/SignUpFormPage';

import './LogInFormModal.css'

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* <div className='userName' onClick={() => setShowModal(true)}>Guest</div> */}
      {/* <button onClick={() => setShowModal(true)}>Log In</button> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
