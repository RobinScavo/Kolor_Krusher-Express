import React from 'react';
import BoardContext from '../BoardContext';
import ColorBall from '../ColorBall/ColorBall';
import Timer from '../Timer/Timer'
import '../Banner/Banner.css'
import ScoreTimer from '../ScoreTimer/ScoreTimer'

import './Gameboard.css'
import '../RGBgame/RGBgame.css'

const gameBoard = (props) => {
    return (
        <div className='cornerDiv'>
            <div className='lipDiv'>
                <div className='RBGgameBoard'>
                    {/* <BoardContext.Consumer> */}
                        <ColorBall checkGuess={props.checkGuess} id='colorOne'/>
                        <ColorBall checkGuess={props.checkGuess} id='colorTwo' />
                        <ColorBall checkGuess={props.checkGuess} id='colorThree'/>
                        <ColorBall checkGuess={props.checkGuess} id='colorFour' />
                        <ColorBall checkGuess={props.checkGuess} id='colorFive' />
                        <ColorBall checkGuess={props.checkGuess} id='colorSix' />

                        {/* <StartGame seconds={props.seconds} target={props.target} toggle={props.toggle} newRound={props.newRound}/> */}

                        <div className='startTimerDiv'>
                            {!props.isActive && <button className='startButton fancyButton' onClick={props.toggle}>Ready!</button>}

                            {props.newGame && props.isActive && props.seconds > 1 &&
                                <Timer className='startTimer' count={3} />}

                            {props.isActive && props.seconds === 1 &&
                                <>
                                    <div className='colorText'>RGB</div>
                                    <div className='colorNumber'>{props.target}</div>
                                    <div className='correct'>{props.correct}</div>
                                </>
                            }


                        </div>
                </div>
            </div>
        </div>
    )
}




export default gameBoard;
// trackSeconds={this.updateSecondsContext} updateRGBActive={this.state.updateActiveContext}

// target={this.state.target} updateActiveStatus={this.updateActiveContext}
