import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import * as sessionActions from "../../store/session";
import SignUpForm from '../SignupFormPage/SignUpFormPage'
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'

function LoginForm() {
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
    <>
    <div className='fullDiv'>
      <div className='logInFormDiv'>
        <h1 className='logSignTitle'>LogIn</h1>
        <form className='form' onSubmit={handleSubmit}>
          {<ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>}
          <label className='label playerLabel'>Player Name
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
          </label>
          <label className='label passwordLabel'>Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            </label>
            <button className='logSignButton' type="submit">LogIn</button>
              <button  className='backButton' onClick={() => {
              values.toggleInstructionModal();
              values.toggleLoginModal();
            }}>Back</button>
        </form>
      </div>
      <div className='signUpFormDiv'>
        <SignUpForm />
      </div>
      <button className='playerPageButton' onClick={() => {
        values.toggleLoginModal();
        values.togglePlayerPageModal();
      }}>Player Page</button>
    </div>
    </>
  )
}

export default LoginForm;
