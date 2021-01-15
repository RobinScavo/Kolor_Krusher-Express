import React from 'react';
import './Banner.css';
import '../FancyButton.css';
import ScoreTimer from '../ScoreTimer/ScoreTimer';

const Banner = (props) => {
    return (
        <div className='banner'>
            <ScoreTimer className='fancyButton' seconds={props.seconds} update={props.update}/>
            <div className='scoreDiv'>
                <h3 className='score'>0</h3>
                <h3 className='score'>~ SCORE </h3>
            </div>
            <h1 className='gameName'>CSS Game</h1>
            <div>
                <h2 className='userName'>User Name</h2>
            </div>
            <button className='logoutButton fancyButton'>Log In</button>
        </div>
    )
}

export default Banner;
