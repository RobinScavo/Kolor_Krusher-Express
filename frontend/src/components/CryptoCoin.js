import React, { useContext, useState } from 'react';
// import { render } from 'react-dom'
// import { useSpring, animated as a } from 'react-spring'

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

// const CryptoCoin = () => {
//   const [flipped, set] = useState(false)
//   const { transform, opacity } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
//   return (
//     <div onClick={() => set(state => !state)}>
//       <a.div class="cryptoCoin cryptoOne" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
//       <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
//     </div>
//   )
// }

// render(<Card />, document.getElementById('root'))

export default CryptoCoin;
