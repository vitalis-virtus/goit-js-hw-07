const sizeControlBtnRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const changeTextFontSize = () => {
    textRef.style.fontSize = `${event.target.value}px`;
}

sizeControlBtnRef.addEventListener('input', changeTextFontSize);
