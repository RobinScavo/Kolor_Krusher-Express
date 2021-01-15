import React, { useContext } from 'react'

import './Footer.css'
import KarenContext from '../KarenContext';
import Bowl from '../Components/Bowl'

const Footer = () => {
    const values = useContext(KarenContext);

    return (
        <div className ='footerDiv'>
            <Bowl id='scoreBowl' display={values.score}/>
            <Bowl id='coinBowl' display={values.coins}/>
        </div>
    )
}

export default Footer;
