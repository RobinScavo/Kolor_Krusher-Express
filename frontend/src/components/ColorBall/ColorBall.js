import React, { useContext } from 'react';
import BoardContext from '../BoardContext';

import './ColorBall.css';

const ColorBall = (props) => {
    const values  = useContext(BoardContext);
    const colorId = props.id
    const color = values[colorId].color
    const visibility = values[colorId].visibility



    return (
        <div
            className={`colorBall ${visibility}`}
            onClick={props.checkGuess}
            id={props.id}
            style={{
                background: `radial-gradient(circle at 100px 100px, rgb${color}, #000)`
            }}
        >
        </div>
    )
}


export default ColorBall;
