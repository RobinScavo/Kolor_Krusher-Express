import React, { useContext } from 'react';
import KarenContext from '../KarenContext'

import ColorBall from './ColorBall'

import './RGBboard.css'

const RGBboard = () => {
    const values = useContext(KarenContext)
    const arr = values.colorArray;
    const target = values.colorTargetId;

    let targetRGB = '(206, 186, 186)'
    let targetRGBDarkness = '(107, 65, 71)'
    let visibility = 'visible'
    let textColor = 'rgba(5, 13, 133, 0.9)';

    if (!values.gameOn && values.round > 0) {
        targetRGB = values.colorTarget;
        targetRGBDarkness = '(30, 30, 30)';
        visibility = 'hidden';
        textColor = 'rgb(206, 186, 186)'
    }



    return (
        <div className='lipDiv'>
            <div className='plateDiv' style={{background: `radial-gradient(circle at 400px 550px, rgb${targetRGB}, rgb${targetRGBDarkness})`}}>
                <ColorBall id='colorOne' color={arr[0]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={0} removeCoin={values.removeCoin} visibility={visibility}/>
                {console.log('one')}
                <ColorBall id='colorTwo' color={arr[1]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={750} removeCoin={values.removeCoin} visibility={visibility}/>
                {console.log('two')}
                <ColorBall id='colorThree' color={arr[2]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={600} removeCoin={values.removeCoin} visibility={visibility}/>
                {console.log('three')}
                <ColorBall id='colorFour' color={arr[3]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={450} removeCoin={values.removeCoin} visibility={visibility}/>
                {console.log('four')}
                <ColorBall id='colorFive' color={arr[4]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={300} removeCoin={values.removeCoin} visibility={visibility}/>
                {console.log('five')}
                <ColorBall id='colorSix' color={arr[5]} target={target} correctGuess={values.correctGuess} gameOn={values.gameOn} delay={150} removeCoin={values.removeCoin} visibility={visibility}/>
                <div className='targetColorDiv' style={{background: `radial-gradient(circle at 400px 550px, rgb${targetRGB}, rgb${targetRGBDarkness})`}}>
                    {!values.gameOn && values.round === 0 &&
                        <button className='startButton' onClick={values.startGame}>START</button>}
                    {values.gameOn &&
                        <div className='targetDiv'>
                            <h2 className='colorText'>RGB</h2>
                            <h2 className='colorNumber'>{values.colorTarget}</h2>
                        </div>
                    }
                    {!values.gameOn && values.round > 0 &&
                        <h2 className='colorNumber' style={{color: `${textColor}`}}>CORRECT</h2>}
                </div>
            </div>
        </div>
    )
}



export default RGBboard;
