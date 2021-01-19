import React, { useContext } from 'react'

import KarenContext from '../../KarenContext'

import './MyBioModal.css'

const MyBioModal = () => {
    const values = useContext(KarenContext)

    return (
        <div className='fullBioDiv'>
            <div className='bioDiv'>
                <div className='myPic'></div>
                <div className='bioTextDiv'>
                    <div className='bioFancyDiv'></div>
                    <div className='bioText'>
                        Robin Scavo is a full stack web developer with a
                        heavy inclination for UX/UI. He lives in Missoula,
                        Montana and is currently accepting job offers.
                    </div>
                    <div className='bioFancyDiv'></div>
                </div>
                <div className='bioTextDiv lowerBioDiv'>
                    <div className='bioFancyDiv'></div>
                    <div className='bioText'>
                        When not building apps like<br/><span className='krazyFont'>
                        Kolor Krusher</span> Robin can usually be found traveling.
                        Visit his blog!<br/><br/><span className='blogLink'>
                        Robin's Travel Blog</span>
                    </div>
                    <div className='bioFancyDiv'></div>
                </div>
            </div>
            <div className='contactProjectDiv'>
                <div className='contactText topText'></div>
                <button className='bioBackButton' onClick={() => {
                    values.toggleBioModal();
                    values.toggleInstructionModal();
                }}>Back</button>
                <div className='contactDiv'>
                    <div className='linkedIn'></div>
                    <div className='websiteLink'>Robin's Website Link</div>
                    <div className='gitHub'></div>
                </div>
                <h1 className='contactText'>Robin's Other Projects</h1>
                <div className='projectDiv'>
                    <div className='sfsgDiv'>
                        <div className='sfsgLink'></div>
                        <div className='projectText'><span className='sfsgTextLink'>So Fresh So Green</span> <br/>is an
                        online community of farmers and gardeners. Create your own
                        post or comment and upvote.<br/>
                        <span className='sfsgSpan'> CONTRIBUTERS: </span><br/>
                        Danny Pong, Maximos Salzman and Kyle Barthelmes.</div>
                    </div>
                    <div className='openBookDiv'>
                        <div className='openBookLink'></div>
                        <div className='projectText'><span className='openBookTextLink'>Open Book </span><br/>is an open source
                        project allowing teachers FREE access to remote learning
                        resources. Build classes, create lessons and share those lessons online.
                        <span className='openBookSpan'> CONTRIBUTERS: </span><br/>
                         Phil Ling, Brandon Perry and Jacob Grooms.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyBioModal;
