import React, { useContext } from 'react';

import KarenContext from '../KarenContext';
import './CryptoCoin.css'

const CryptoCoin = () => {
    const values = useContext(KarenContext);

    return (
        <>
            {values.coinArray[0] && <h3 className='cryptoCoin cryptoOne'>kk</h3>}
            {values.coinArray[1] && <h3 className='cryptoCoin cryptoTwo'>kk</h3>}
            {values.coinArray[2] && <h3 className='cryptoCoin cryptoThree'>kk</h3>}
        </>
    )
}

export default CryptoCoin;
