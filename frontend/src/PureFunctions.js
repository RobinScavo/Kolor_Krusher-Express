
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
