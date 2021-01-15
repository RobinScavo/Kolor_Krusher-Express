

// export function pickColor() {
//     const random = Math.floor(Math.random() * colors.length);
//     return colors[random];
// }
export function generateEasyColors() {
    let arr = ["(0, 0, 0)", "(0, 0, 255)", "(255, 0, 255)", "(255, 255, 255)", "(0, 255, 255)", "(255, 0, 0)", "(0, 255, 0)", "(255, 255, 0)"];
    let returnArr = []

    while (returnArr.length !== 6) {
        let randomNum = Math.floor(Math.random() *8)
        if (!returnArr.includes(arr[randomNum])){
            returnArr.push(arr[randomNum])
        }
    }
    return returnArr
}

export function generateRandomColors() {
    //make an array
    const arr = [];
    for (let i = 0; i < 6; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    return (arr);
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
