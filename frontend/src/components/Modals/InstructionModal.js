import React, { useContext } from 'react';

import HighScoreDisplay from '../../Components/HighScoreDisplay/HighScoreDisplay'
import KarenContext from '../../KarenContext'

import './LogInFormModal.css'
import './InstructionModel.css'

function InstructionModel(props) {
  const values = useContext(KarenContext)

  return (
    <div className='instructionDiv'>
      <div className='allModeDiv'>
        <div className='upperDiv'>
          <div className='greetingDiv'>
            <h1 className='greetingText'><span className='biggerGreet'>Play as a guest</span> or log in to save your progress</h1>
            <h1 className='arrow arrowLog'>➛</h1>
          </div>

          {/* Log In */}
          <div className='optionDiv'>
            <button className='logStateButton' onClick={() => {
              values.toggleInstructionModal();
              values.toggleLoginModal();
            }}>Log In / Sign Up</button>
          </div>
        </div>

        {/* Zen Mode */}
        <div className='lowerDiv'>
          <div className='modeSelectDiv'>
            <div className='modeDiv'>
              <div className='buttonDiv'>
                <h1 className='titleText'>Zen Mode</h1>
                <button className='goldButton zen' >zen</button>
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
                  values.toggleInstructionModal();
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
          <HighScoreDisplay />
        </div>
      </div>
    </div>
    )
}




export default InstructionModel;
