const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

const changeName = event => {
    nameOutputRef.textContent = event.target.value;
    if (event.target.value === '')
        nameOutputRef.textContent = 'незнакомец';
}

nameInputRef.addEventListener('input', changeName);