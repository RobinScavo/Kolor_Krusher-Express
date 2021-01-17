import React, { useState, useContext } from 'react';
import { Modal } from '../../ModalContext/Modal';

// import SignUpForm from '../SignupFormPage/SignUpFormPage';
import LoginFormModal from '../Modals/LoginFormModal';
import HighScoreDisplay from '../../Components/HighScoreDisplay/HighScoreDisplay'
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'
import './InstructionModel.css'
import SignUpModal from './SignUpModal';

function InstructionModel(props) {
  const values = useContext(KarenContext)
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className='instructionDiv'>
      <div className='allModeDiv'>
        <div className='upperDiv'>
          <div className='playDiv'>
            <h1 className='greetingText'>Play as a guest!</h1>
            <h1 className='downArrow'><span>➛</span></h1>
          </div>
          {/* <h1 className='greetingText logSignText'>Log in or sign up!<span className='arrow arrowLog'>➛</span></h1> */}
          <div className='logArrowText'>
                <h1 className='greetingText logSignText'>Log in or sign up!</h1>
                <h1 className='arrow arrowLog'>➛</h1>
              </div>
          <div className='optionDiv'>
            {/* Log In */}
            <button className='logStateButton' onClick={() => {
              setShowLoginModal(true)
            }}>Log In</button>
            {showLoginModal && (
              <Modal >
                  <LoginFormModal closeModal={props.closeModal}/>
              </Modal>
            )}

            {/* Sign Up */}
            <button className='logStateButton' onClick={() => {
              setShowSignUpModal(true)
            }}>Sign Up</button>
            {showSignUpModal && (
              <Modal >
                  <SignUpModal closeModal={props.closeModal}/>
              </Modal>
            )}
          </div>
        </div>

        <div className='lowerDiv'>
          <div className='modeSelectDiv'>
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>Zen Mode</h1>
                <button className='goldButton zen' >Zen</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Just click the balls. Relax.</h1>
              </div>
            </div>

            {/* BattleMode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>Battle Mode</h1>
                <button  className='goldButton battle' onClick={() => {
                  props.closeModal();
                  values.startGame();
                }}>Battle</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>Compete aginst the best!</h1>
              </div>
            </div>

            {/* Demo mode */}
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>Demo Mode</h1>
                <button className='goldButton demo' >Demo</button>
              </div>
              <div className='arrowText'>
                <h1 className='arrow'>➛</h1>
                <h1 className='modeText'>A sampler of each round.</h1>
              </div>
            </div>

          </div>
          {/* ZenMode */}
          <HighScoreDisplay />
          {/* <div className='topTen'>Top Ten</div> */}
        </div>
      </div>
    </div>



)
}



export default InstructionModel;

// onClose={() => setShowModal(false)}
