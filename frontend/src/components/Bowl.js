import React, { useContext } from 'react'

import './Bowl.css'
import KarenContext from '../KarenContext'

const Bowl = (props) => {
    const values = useContext(KarenContext);

    return (
    <div className='bowlOutter'  id={props.id}>
        <div className='upperHalf'>
            <div className='innerGold'></div>
        </div>
        <div className='bowl'>
            <h2 className='display'>{props.display}</h2>
            <div className='lowerHalf'></div>
        </div>
    </div>
    )
}

export default Bowl;
