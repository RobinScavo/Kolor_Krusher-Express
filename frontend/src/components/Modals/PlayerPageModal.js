import React, { useContext } from 'react'

import KarenContext from '../../KarenContext'
import HighScoreDisplay from '../../Components/HighScoreDisplay/HighScoreDisplay'

import './PlayerPageModal.css'

const PlayerPageModal = () => {
    const values = useContext(KarenContext);

    return (
        <div className='playerDiv'>
            <div className='leftSideDiv'>
                <h1 className='nameText'>Sebastian Scavo</h1>
                <div className='fancyDisplayDiv  koinText'>
                    <h1 className='yourDisplayText'>Koin Kount</h1>
                    <div className='fancyDisplay'>256</div>
                </div>
                <div className='fancyDisplayDiv skoreText'>
                    <h1 className='yourDisplayText'>High Skore</h1>
                    <div className='fancyDisplay'>498</div>
                </div>
                <div className='myBioLink'>
                    <div className='monkeyPic' onClick={() => {
                        values.togglePlayerPageModal();
                        values.toggleBioModal();
                    }}>Bio Page</div>
                    <h1 className='meetDevText'>Meet the developer!</h1>
                </div>
            </div>
            <div className='rightSideDiv'>
                <HighScoreDisplay />
            </div>
            <button className='thisBackButton' onClick={() => {
                values.togglePlayerPageModal();
                values.toggleInstructionModal();
            }}>Back</button>
        </div>
    )
}

export default PlayerPageModal;
