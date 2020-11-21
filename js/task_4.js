const counterValue = document.querySelector('#value');

const incrementButton = document.querySelector('#counter button[data-action="increment"]');
const decrementButton = document.querySelector('#counter button[data-action="decrement"]');

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
}

const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
}

incrementButton.addEventListener('click', increment);
decrementButton.addEventListener('click', decrement);

console.log( counterValue);
