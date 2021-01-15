import React  from 'react';

import { generateRandomColors, generateEasyColors } from '../gameLogic';
import './RGBgame.css';
// import '../Banner/Banner.css';
// import '../Gameboard/Gameboard.css';
import BoardContext from '../BoardContext';
import GameBoard from '../Gameboard/Gameboard'
import Banner from '../Banner/Banner'


class RBGgame extends React.Component {
    constructor(props) {
        const randomSix = Math.floor(Math.random() * 6);
        const arr = generateEasyColors();
        const targetColor = arr[randomSix];

        super(props);
        this.state = {
            colorOne: {color: arr[0], visibility: 'visible'},
            colorTwo: {color: arr[1], visibility: 'visible'},
            colorThree: {color: arr[2], visibility: 'visible'},
            colorFour: {color: arr[3], visibility: 'visible'},
            colorFive: {color: arr[4], visibility: 'visible'},
            colorSix: {color: arr[5], visibility: 'visible'},

            target: targetColor,
            round: 0,
            startGameTimer: 3,
            scoreTimer: 15,
            newGame: true,
            newRound: false,
            gameOn: false,
            targetIndex: randomSix,
            updateActiveContext: this.updateActiveContext,
            correct: '',

            updateSecondsContext: this.updateSecondsContext,
            updateScoreContext: this.updateScoreContext,
        };

    }

    startRound = () => {
        console.log('startRound');
        if (true) {
            let arr = [];

            if (this.state.round > 6) this.endGame()
            if (this.state.round > 2) arr = generateRandomColors();
            else arr = generateEasyColors();

            const randomSix = Math.floor(Math.random() * 6);
            const targetColor = arr[randomSix];


            setTimeout(() => {
                this.setState({
                    scoreTimer: 15,
                    target: targetColor,
                    newGame: false,
                    correct: '',

                    colorOne: {color: arr[0], visibility: 'visible'},
                    colorTwo: {color: arr[1], visibility: 'visible'},
                    colorThree: {color: arr[2], visibility: 'visible'},
                    colorFour: {color: arr[3], visibility: 'visible'},
                    colorFive: {color: arr[4], visibility: 'visible'},
                    colorSix: {color: arr[5], visibility: 'visible'},
                })
            }, 800)
        }
    }

    endGame = () => {
        console.log('game over')
    }

    updateGuessContext = (guess) => {
        if (this.state.gameOn) {
            const thisGuess = `${guess.target.id}`;
            this.setState({ [thisGuess]: {visibility: 'hidden'}})
            this.checkGuess(guess.target.id)
        }
    }

    updateSecondsContext = (seconds) => {
        this.setState({ startGameTimer: seconds })
    }

    updateScoreContext = (seconds) => {
        if (this.state.gameOn && this.state.startGameTimer === 1) {
            console.log(seconds)
            this.setState({ scoreTimer: seconds})
        }
    }


    toggle = () => {
        this.setState({
            gameOn: true,
        })
    }



    checkGuess = (guess) => {
        const colorWord = ['colorOne', 'colorTwo', 'colorThree' , 'colorFour', 'colorFive', 'colorSix'][this.state.targetIndex]
        if (guess === colorWord) {
            console.log ('win');
            this.setState({
                round: this.state.round + 1,
                newGame: false,
                correct: 'CORRECT!',
            })
            this.startRound()
        } else {
            this.setState({ correct: 'INCORRECT'})
            setTimeout(() => this.setState({ correct: ''}), 800)
        };
    }

    render() {
        return (
            <div className='gameboardDiv'>
                <BoardContext.Provider value={this.state}>
                    <Banner seconds={this.state.startGameTimer} update={this.updateScoreContext}/>
                    <GameBoard  correct={this.state.correct} newGame={this.state.newGame} checkGuess={this.updateGuessContext} toggle={this.toggle} target={this.state.target} seconds={this.state.startGameTimer} isActive={this.state.gameOn}/>
                </BoardContext.Provider>
            </div>
        )
    }
}

export default RBGgame;
