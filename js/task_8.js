const controlsRef = document.querySelector('#controls');
const inputRef = document.querySelector('#controls > input');
const renderBtnRef = document.querySelector('[data-action="render"]');
const destroyBtnRef = document.querySelector('[data-action="destroy"]');
const boxesRef = document.querySelector('#boxes');


//==============color generator======================//
const generateRandomColor = () => {
    return Math.floor(Math.random()*16777215).toString(16);
}
//===================================================//

const getAmount = () => {
    const amount = inputRef.value;
    createBoxes(amount);
}

const createBoxes = (amount) => {
    const basicWidth = 30;
    const basicHeight = 30;
    for (let i = 0; i < amount; i++){
        let stringStyle = `style="width: ${basicWidth + (i * 10)}px; height:${basicHeight + (i * 10)}px; background-color: #${generateRandomColor()}"`;
        boxesRef.insertAdjacentHTML('beforeend', `<div ${stringStyle}><div>`);
    }
}

const destroyBoxes = () => {
    boxesRef.innerHTML = "";
    inputRef.value = 0;
}

renderBtnRef.addEventListener('click', getAmount);
destroyBtnRef.addEventListener('click', destroyBoxes);
