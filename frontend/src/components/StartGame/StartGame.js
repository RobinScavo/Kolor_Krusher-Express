// import React, { useState, useEffect } from 'react';
import './StartGame.css';
import '../FancyButton.css'
import React, { useState, useEffect } from 'react';
import Timer from '../Timer/Timer';
import BoardContext from '../BoardContext'



class StartGame extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            target: props.target,
            isActive: false,
            seconds: props.seconds,
            updateSecondsContext: this.updateSecondsContext,
            // updateActiveContext: props.updateActiveContext,
        }
    }

    toggle = () => {
        this.setState({ isActive: true });
        const toggle = (this.props.toggle);
        toggle();
    }

    updateSecondsContext = (seconds) => {
        this.setState({ seconds: seconds })
    }



    render (props) {
        return (
            <div className='startTimerDiv'>
                {!this.state.isActive && <button className='startButton fancyButton' onClick={this.toggle}>Ready!</button>}

                {this.state.isActive && this.state.seconds === 1 &&
                    <>
                        <div className='colorText'>RGB</div>
                        <div className='colorNumber'>{this.state.target}</div>
                        {/* <div className='correctText'>Correct</div> */}
                    </>
                }

                {this.state.isActive && this.state.seconds !== 1 &&
                    <BoardContext.Provider value={this.state}>
                        <Timer className='startTimer' count={3} trackSeconds={this.updateSecondsContext} updateRGBActive={this.state.updateActiveContext}/>
                    </BoardContext.Provider>}
            </div>
            )


        }
}

export default StartGame;
