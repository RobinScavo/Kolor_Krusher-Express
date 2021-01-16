import React, { useContext, useState } from 'react';
import KarenContext from '../KarenContext'
import { Modal } from '../ModalContext/Modal'

import InstructionModel from '../Components/Modals/InstructionModal'
import ColorBall from './ColorBall'

import './RGBboard.css'

const RGBboard = () => {
    const [showModal, setShowModal] = useState(false);
    const values = useContext(KarenContext)
    const arr = values.colorArray;
    const target = values.colorTargetId;

    //Set the inital plate colors and ball visibility
    let targetRGB = '(206, 186, 186)'
    let targetRGBDarkness = '(107, 65, 71)'
    let textColor = 'rgba(5, 13, 133, 0.9)';
    let visibility = 'visible'

    //Arrays for ColorBall map
    let idArray = ['colorOne', 'colorTwo', 'colorThree', 'colorFour', 'colorFive', 'colorSix'];
    let delayArray =[0, 750, 600, 450, 300, 150];
    let indexArray = [0, 1, 2, 3, 4, 5]

    // Ghost-ball effect when clearing board
    if (!values.gameOn && values.round > 0) {
        targetRGB = values.colorTarget;
        targetRGBDarkness = '(30, 30, 30)';
        visibility = 'hidden';
        textColor = 'rgb(206, 186, 186)'
    }

    return (
        <div className='lipDiv'>

            {/* Flash target color on plate after correct guess */}
            <div className='plateDiv' style={{
                background: `radial-gradient(circle at 400px 550px, rgb${targetRGB}, rgb${targetRGBDarkness})`
            }}>

                {/* Set the balls */}
                {indexArray.map(index => (
                    <ColorBall
                        id={idArray[index]}
                        color={arr[index]}
                        target={target}
                        correctGuess={values.correctGuess}
                        gameOn={values.gameOn}
                        delay={delayArray[index]}
                        removeCoin={values.removeCoin}
                        visibility={visibility}
                    />
                ))}

                {/* Inner plate: either start button, target color or 'Correct' message */}
                <div className='targetColorDiv' style={{background: `radial-gradient(circle at 400px 550px, rgb${targetRGB}, rgb${targetRGBDarkness})`}}>

                    {/* Start button */}
                    {!values.gameOn && values.round === 0 &&
                        <button className='startButton' onClick={() => setShowModal(true)}>START</button>}
                    {showModal && (
                        <Modal >
                            <InstructionModel closeModal={() => setShowModal(false)}/>
                        </Modal>
                    )}

                    {/* Target color */}
                    {values.gameOn &&
                        <div className='targetDiv'>
                            <h2 className='colorText'>RGB</h2>
                            <h2 className='colorNumber'>{values.colorTarget}</h2>
                        </div>
                    }

                    {/* 'Correct message' */}
                    {!values.gameOn && values.round > 0 &&
                        <h2 className='colorNumber' style={{color: `${textColor}`}}>CORRECT</h2>}
                </div>
            </div>
        </div>
    )
}

// onClose={() => setShowModal(false)}

// {/* <ColorBall id='colorOne' color={arr[0]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={0} removeCoin={values.removeCoin} visibility={visibility}/>
// {console.log('one')}
// <ColorBall id='colorTwo' color={arr[1]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={750} removeCoin={values.removeCoin} visibility={visibility}/>
// {console.log('two')}
// <ColorBall id='colorThree' color={arr[2]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={600} removeCoin={values.removeCoin} visibility={visibility}/>
// {console.log('three')}
// <ColorBall id='colorFour' color={arr[3]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={450} removeCoin={values.removeCoin} visibility={visibility}/>
// {console.log('four')}
// <ColorBall id='colorFive' color={arr[4]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={300} removeCoin={values.removeCoin} visibility={visibility}/>
// {console.log('five')} */}

export default RGBboard;
