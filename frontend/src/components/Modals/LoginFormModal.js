import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";
import SignUpForm from '../../Components/SignupFormPage/SignUpFormPage'
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'

function LoginForm(props) {
  const values = useContext(KarenContext)
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

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
    <div className='fullDiv'>
      <div className='logInFormDiv'>
        <form className='form' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label className='label'>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className='label'>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Log In</button>
          <button onClick={() => {
            values.toggleInstructionModal();
            values.toggleLoginModal();
          }}>Back</button>
        </form>
      </div>
      <div className='signUpFormDiv'>
        <SignUpForm />
      </div>
    </div>
  );
}



export default LoginForm;
