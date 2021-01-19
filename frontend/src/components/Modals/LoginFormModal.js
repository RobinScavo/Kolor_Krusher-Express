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
        <h1 className='logSignTitle logTitle'>LogIn</h1>
        <form className='loginForm' onSubmit={handleSubmit}>
          {<ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>}
            <input
              className='logInput'
              placeholder='Player Name'
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              required
            />
            <input
              className='logInput'
              placeholder='Password'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className='logSignButton' type="submit">LogIn</button>
              <button  className='backButton' onClick={() => {
              values.toggleInstructionModal();
              values.toggleLoginModal();
            }}>Back</button>
        </form>
        <div className='thisBioLink'>
            <div className='monkeyPic' onClick={() => {
                values.toggleLoginModal();
                values.toggleBioModal();
            }}>Bio Page</div>
            <h1 className='meetDevText thisDevText'><div className='arrowSpan'>➛</div>Meet the developer!</h1>
        </div>
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
