import React, { useState, useEffect } from 'react'

import './LeftConvertPanel.css';

const LeftConvertPanel = (props) => {
    const [topValue, setTopValue] = useState('');
    const [middleValue, setMiddleValue] = useState('');
    const [bottomValue, setBottomValue] = useState('');
    const stringVal = [`${topValue}`, `${middleValue}`, `${bottomValue}`]

    useEffect(() => {
        setTopValue(props.fromTopInput)
        setMiddleValue(props.fromMiddleInput)
        setBottomValue(props.fromBottomInput)
    }, [props])

    return (
        <div className='convertDiv' id='leftConvert'>
            <div className={`convertButtonDiv leftButtonDiv`} >
                <div className='upperButtonDiv'>

                    <div className='convertTextDiv'>Convert From</div>
                    <button className={`convertButton ${props.fromRgbButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleFromRgbButton}
                        >RGB</button>
                    <button className={`convertButton ${props.fromHslButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleFromHslButton}
                        >HSL</button>
                    <button className={`convertButton ${props.fromHexButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleFromHexButton}
                        >HEX</button>

                    <div className={`convertTextDiv`}>Convert To</div>
                    <button className={`convertButton ${props.toRgbButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleToRgbButton}
                        >RGB</button>
                    <button className={`convertButton ${props.toHslButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleToHslButton}
                        >HSL</button>
                    <button className={`convertButton ${props.toHexButton ? 'activeConvert' : 'hiddenConvert'}`} onClick={props.toggleToHexButton}
                        >HEX</button>
                </div>
            </div>
            <div >
                <div className='convertInputDiv'>
                    <label className='convertLabel'>
                        {props.fromTopLabel}
                        <input
                            className='convertInput'
                            type='text'
                            value={topValue}
                            placeholder={props.fromTopInput}
                            maxLength='3'
                            onChange={(e) => setTopValue(e.target.value)}
                            onFocus={() => {
                                if (props.repeatRender) {
                                    props.toggleRepeatRender()
                                    props.toggleTogglePosition()
                                }
                                setTopValue('')
                            }}
                        />
                    </label>
                    <label className='convertLabel'>
                        {props.fromMiddleLabel}
                        <input
                            className='convertInput'
                            type='text'
                            value={middleValue}
                            placeholder={props.fromMiddleInput}
                            maxLength='3'
                            onChange={e => setMiddleValue(e.target.value)}
                            onFocus={() => {
                                if (props.repeatRender) {
                                    props.toggleRepeatRender()
                                    props.toggleTogglePosition()
                                }
                                setMiddleValue('')
                            }}
                        />
                    </label>
                    <label className='convertLabel'>
                        {props.fromBottomLabel}
                        <input
                            className='convertInput'
                            type='text'
                            value={bottomValue}
                            placeholder={props.fromBottomInput}
                            maxLength='3'
                            onChange={e => setBottomValue(e.target.value)}
                            onFocus={() => {
                                if (props.repeatRender) {
                                    props.toggleRepeatRender()
                                    props.toggleTogglePosition()
                                }
                                setBottomValue('')
                            }}
                        />
                    </label>
                    <button className='submitButton' onClick={() => {
                        props.playerSubmit(stringVal)
                    }}>Convert</button>
                </div>
            </div>
        </div>
    )
}


export default LeftConvertPanel;
