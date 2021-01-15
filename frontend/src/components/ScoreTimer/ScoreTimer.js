
import React, { useContext, useState, useEffect } from 'react';
import BoardContext from '../BoardContext';

const ScoreTimer = (props) => {
    const values = useContext(BoardContext);
    const update = values.updateScoreContext;

    const [seconds, setSeconds] = useState(values.scoreTimer);
    // const [countdownSeconds] = useState(values.startGameTimer);
    console.log(props.seconds)
    const [gameOn] = useState(values.gameOn);

    useEffect(() => {
        let interval = null;
        if (props.seconds === 2 && seconds > -1) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
                update(seconds);
            }, 1000);
        }
        return () => clearInterval(interval)
    }, [gameOn, seconds]);


        // const { seconds } = this.state
    return (
        <div className='scoreTimerDiv'>
            <h1 className='scoreTimer'>{values.scoreTimer}</h1>
        </div>
    )

}



export default ScoreTimer
// import React, { Component }  from 'react'

// class StartScoreTimer extends React.Component {
//     state = {
//         seconds: 15,
//     }

//     componentDidMount() {
//         this.myInterval = setInterval(() => {
//             const { seconds } = this.state
//             if (seconds > 0) {
//                 this.setState(( {seconds }) => ({
//                     seconds: seconds - 1
//                 }))
//             }
//             if (seconds === 0) {
//                 clearInterval(this.myInterval)
//             }
//         }, 1000)
//     }

//     componentWillUnmount() {
//         clearInterval(this.myInterval)
//     }

//     render() {
//         const { seconds } = this.state
//         return (
//             <div className='scoreTimerDiv'>
//                 <h1 className='scoreTimer'>{seconds}</h1>
//             </div>
//         )
//     }
// }

// export default StartScoreTimer;
