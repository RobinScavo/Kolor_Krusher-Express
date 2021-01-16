import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import SignUpModal from './SignUpModal'

import './LogInFormModal.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

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
      {showSignUpModal && <SignUpModal />}
      <button className='signUpButton' onClick={() => setShowSignUpModal(true)}>Sign Up</button>
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

          {/* <NavLink to="/signup">Sign Up</NavLink> */}


        {/* <ul>
          <li>
            <NavLink exact to="/">Home</NavLink>
            {isLoaded && sessionLinks}
          </li>
        </ul> */}

      </form>
    </div>
  );
}



export default LoginForm;
