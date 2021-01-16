import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { NavLink } from 'react-router-dom';

import * as sessionActions from "../../store/session";
// import SignUpModal from './SignUpModal'
import { Modal } from '../../ModalContext/Modal';
import InstructionModal from './InstructionModal'

import './LogInFormModal.css'

function LoginForm(props) {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  // const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showInstructionModal, setShowInstructionModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };

  return (
    <div className='logInFormDiv'>
      {/* {showSignUpModal && <SignUpModal />}
      <button className='signUpButton' onClick={() => setShowSignUpModal(true)}>Sign Up</button> */}
      <form onSubmit={handleSubmit}>
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label>
          Username or Email
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Log In</button>
        <button onClick={() => setShowInstructionModal(true)}>Back</button>
          {showInstructionModal && (
              <Modal >
                  <InstructionModal closeModal={props.closeModal} />
              </Modal>
          )}
      </form>
    </div>
  );
}



export default LoginForm;
