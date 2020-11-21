const validationInputRef = document.querySelector('#validation-input');

const replaceClassOnValid = () => {
    event.target.classList.contains('invalid') ? event.target.classList.replace('invalid', 'valid') : event.target.classList.add('valid');
}

const replaceClassOnInvalid = () => {
    event.target.classList.contains('valid') ? event.target.classList.replace('valid', 'invalid') : event.target.classList.add('invalid');
    
}

const inputTextValidation = event => {
    event.target.value.length <= event.target.getAttribute('data-length') ? replaceClassOnValid() : replaceClassOnInvalid();
}

validationInputRef.addEventListener('change', inputTextValidation);