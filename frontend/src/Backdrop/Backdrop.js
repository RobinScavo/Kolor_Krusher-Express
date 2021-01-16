import React from 'react';

import RGBboard from '../RGB/RGBboard'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
// import PreGameInstruction from '../Components/Instructions/pregame'


import './Backdrop.css'

const BackDrop = () => {
    return (
        <div className='backDrop'>
            <Banner />
            <div className='upperRoundDiv'>
                <RGBboard />
                <div className='innerDiv'></div>
                <div className='sideDivRight'></div>
                <div className='sideDiv'></div>
                <Footer />
                <div className='bottomBar'>
                    <h3>Skore</h3>
                    <h3>Koins</h3>
                </div>
            </div>
        </div>
    )
}


export default BackDrop;
