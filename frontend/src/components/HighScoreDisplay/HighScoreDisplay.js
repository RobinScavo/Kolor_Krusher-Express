import React from 'react'

import './HighScoreDisplay.css'

const HighScoreDisplay = () => {
    const data  = [
        {rank: 1, name: 'Robin Scavo', score: 477},
        {rank: 2, name: 'Angela Scavo', score: 467},
        {rank: 3, name: 'Tom Scavo', score: 460},
        {rank: 4, name: 'Elain Bodurtha', score: 451},
        {rank: 5, name: 'Michelle Sever', score: 449},
        {rank: 6, name: 'Dawsen Sever', score: 439},
        {rank: 7, name: 'Shelby Sever', score: 428},
        {rank: 8, name: 'Jeremy Sever', score: 422},
        {rank: 9, name: 'Oakley Scavo', score: 409},
        {rank: 10, name: 'Sebastian Scavo', score: 390},
        {rank: 11, name: 'Alice Berglund', score: 388},
        {rank: 12, name: 'Mary Russell', score: 311},

    ]

    const coinShine = () => Math.floor((Math.random() * 12) + 9)

    return (
        <div className='highScoreDiv'>
            <h1 className='highScoreText'>High Skores</h1>
            <table className='highScoreTable'>
                {data.map(user => (
                    <tr className='tableRow'>
                        <th className='rankColumn'>
                            <div className='rankBling' style={{animation: 'TransitioningBackground 1s linear infinite;'}}>
                                {user.rank}
                            </div>
                        </th>
                        <th className='userColumn'>{user.name}</th>
                        <th className='scoreColumn'>{user.score}</th>
                    </tr>
                ))}
            </table>
        </div>
    )
}



export default HighScoreDisplay;
