import React, { useContext, useState, useEffect } from 'react';
import BoardContext from '../BoardContext';

const Timer = (props) => {
    const values = useContext(BoardContext);
    const update = values.updateSecondsContext

    const [seconds, setSeconds] = useState(props.count);
    const [isActive] = useState(true);

    useEffect((props) => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                update(seconds);
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [isActive, seconds]);

    return (
        <div className='startTimer'>{seconds}</div>
        )
}



export default Timer
