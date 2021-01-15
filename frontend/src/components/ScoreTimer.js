import React, { useContext, useState, useEffect } from 'react';

import KarenContext from '../KarenContext';
import './ScoreTimer.css'

const ScoreTimer = (props) => {
    const values = useContext(KarenContext);
    const update = values.updateTimer;

    const [seconds, setSeconds ] = useState(values.timer)

    useEffect(() => {
        let interval = null;
        if (props.gameStart && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds -1);
                return seconds
            }, 1000);
        }
        if (!props.gameStart && seconds !== 15) {
            update(seconds);
            setSeconds(15);
        }
        return () => clearInterval(interval)
    }, [values.gameOn, seconds])


    return (
        <div>
            <div className='scoreTimerDiv'>
                <h1 className='scoreTimer'>{seconds}</h1>
            </div>
        </div>
    )
}

export default ScoreTimer;
