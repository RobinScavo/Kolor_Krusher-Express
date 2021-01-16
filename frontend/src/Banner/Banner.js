import React, { useContext } from 'react';
import './Banner.css';
// import LoginFormModel from '../Components/LoginFormModal/LogInFormModal'


import UserName from './UserName'
import KarenContext from '../KarenContext'
import ScoreTimer from '../Components/ScoreTimer';
import CryptoCoin from '../Components/CryptoCoin';

const Banner = () => {
    const values = useContext(KarenContext)

    return (
        <div className='bannerDiv'>
            <ScoreTimer gameStart={values.gameOn}/>
            <h1 className='gameName'>Kolor Krusher</h1>
            <CryptoCoin />
            <UserName />

            {/* <button className='logoutButton fancyButton'>Log In</button> */}
        </div>
    )
}

export default Banner;
