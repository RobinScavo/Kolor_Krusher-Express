import React from 'react'

import { generateHardColors, generateEasyColors } from './PureFunctions';
import Backdrop from './Backdrop/Backdrop'
import KarenContext from './KarenContext';
import InstructionModal from './Components/Modals/InstructionModal';
import LoginModal from './Components/Modals/LoginFormModal';
import { Modal } from './ModalContext/Modal'

class Controller extends React.Component {
    constructor (props) {
        const hardArray = generateHardColors();

        super (props);
        this.state = {
            colorArray: hardArray,
            colorTargetId: '',
            colorTarget: null,
            round: 0,
            score: 0,
            timer: 15,
            coins: 0,
            coinArray: [true, true, true],
            gameOn: false,
            instructionModal: false,
            loginModal: false,

            startGame: this.startGame,
            correctGuess: this.correctGuess,
            updateTimer: this.updateTimerContext,
            removeCoin: this.removeCoin,
            toggleInstructionModal: this.toggleInstructionModal,
            toggleLoginModal: this.toggleLoginModal,
        }
    }

    toggleInstructionModal = () => this.setState({ instructionModal: !this.state.instructionModal })
    toggleLoginModal = () => this.setState({ loginModal: !this.state.loginModal })

    startGame = () => {
        this.clearBoard();
        this.timeout = setTimeout(() => {
            this.setState({ gameOn: true })
            this.updateColorArrayContext()
        }, 1100)
    }

    removeCoin = () => {
        let tempArray = [];
        console.log('first')
        if (this.state.coinArray[0]) {
            tempArray = [false, true, true]
        } else if (this.state.coinArray[1]) {
            tempArray = [false, false, true]
        } else {
            tempArray = [false, false, false]
        }
        this.setState ({ coinArray: tempArray })
    }

    correctGuess = () => {
        let coinCount = 0;
        for (let coin of this.state.coinArray) {
            if (coin) coinCount++
        }

        this.setState({
            gameOn: false,
            coins: this.state.coins += coinCount,
         });

        this.clearBoard();
        setTimeout(() => {
            this.updateColorArrayContext();
        }, 1500)
    }

    clearBoard = () => {
        this.setState({
            colorArray: [
                {background: `radial-gradient(circle at 100px 100px, rgba(255, 255, 255, 0.1), #000)`},
                {background: `radial-gradient(circle at 100px 100px, rgb(255, 255, 255, 0.1), #000)`},
                {background: `radial-gradient(circle at 100px 100px, rgb(255, 255, 255, 0.1), #000)`},
                {background: `radial-gradient(circle at 100px 100px, rgb(255, 255, 255, 0.1), #000)`},
                {background: `radial-gradient(circle at 100px 100px, rgb(255, 255, 255, 0.1), #000)`},
                {background: `radial-gradient(circle at 100px 100px, rgb(255, 255, 255, 0.1), #000)`},
            ]
        })
    }

    updateTimerContext = (seconds) => {
        this.setState({
            timer: seconds,
            score: this.state.score + seconds,
        })
    }



    updateColorArrayContext = () => {
        let randomSix = Math.floor(Math.random() * 6)
        let targetArray = [
            'colorOne',
            'colorTwo',
            'colorThree',
            'colorFour',
            'colorFive',
            'colorSix'
        ]
        let targetId = targetArray[randomSix];
        let arr = [];

        (this.state.round <= 3) ? arr = generateEasyColors()
                                : arr = generateHardColors()

        const targetColor = arr[randomSix]
        const firstSlice = (targetColor.background.slice(42))
        const colorTarget = (firstSlice.slice(0, firstSlice.length -7))
        console.log('update')
        this.setState({
            coinArray: [true, true, true],
            colorArray: arr,
            round: this.state.round + 1,
            colorTargetId: targetId,
            gameOn: true,
            colorTarget: colorTarget,
        })
    }

    render() {
        return (
            <div className='gameBoardDiv' value={this.state}>
                <KarenContext.Provider value={this.state}>
                    <Backdrop />

                    {this.state.instructionModal &&
                        <Modal>
                            <InstructionModal />
                        </Modal>
                    }

                    {this.state.loginModal &&
                        <Modal>
                            <LoginModal />
                        </Modal>
                    }
                </KarenContext.Provider>
            </div>
        )
    }
}




export default Controller;
