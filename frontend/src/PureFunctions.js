
export function generateEasyColors() {
    let arr = [
        "(0, 0, 0)",
        "(0, 0, 255)",
        "(255, 0, 255)",
        "(255, 255, 255)",
        "(0, 255, 255)",
        "(255, 0, 0)",
        "(0, 255, 0)",
        "(255, 255, 0)"
    ];
    let returnArr = []

    while (returnArr.length !== 6) {
        let randomNum = Math.floor(Math.random() *8)
        if (!returnArr.includes(arr[randomNum])){
            returnArr.push(arr[randomNum])
        }
    }

    const newArray = addStyleString(returnArr)
    return newArray
}

function addStyleString (arr) {
    const newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray.push({ background: `radial-gradient(circle at 100px 100px, rgb${arr[i]}, #000)` })
    }

    return newArray
}

export function generateHardColors() {
    //make an array
    const arr = [];
    for (let i = 0; i < 6; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }

    const newArray = addStyleString(arr);
    return newArray;
}

const zenObject = {
    1: "I've never known a thing in my life.",
    2: "Nothing is something worth doing.",
    3: "Sleep is the best meditation.",
    4: "Everything has a crack in it, that's how the light gets in.",
    5: "These mountains that you carry, you were only meant to climb.",
    6: "Let go or be dragged.",
    7: "Transcend the bullshit.",
    8: "And when they played they really played. And when they worked they really worked.",
    9: "Relax. Nothing is under control.",
    10: "If you chase two rabbits, you catch none.",
    11: "Don't be afraid to just sit and watch.",
    12: "Become comfortable with not knowing.",
    13: "Life begins where fear ends.",
    14: "Don't curse the darkness, light a candle.",
    15: "This will never come again.",
    16: "Nothing is what I want.",
    17: "I have lived with several Zen masters - all of them cats.",
    18: "Matters of great concern should be treated lightly. Matters of small concerns should be treated seriously.",
    19: "Obstacles don't block the path, they are the path.",

}



function randomColor() {
    //pick a "red" from 0 to 255
    const r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    const g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    const b = Math.floor(Math.random() * 256);
    return `(${r}, ${g}, ${b})`;
}

export default generateEasyColors;
