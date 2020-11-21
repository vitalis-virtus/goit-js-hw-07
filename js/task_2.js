const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const addLiElement = (item, nodeRef) => {
    const li = document.createElement('li');
    li.textContent = item;
    nodeRef.appendChild(li);
}

const ingredientsRef = document.querySelector('#ingredients');

ingredients.forEach( item => addLiElement(item, ingredientsRef))

console.log(ingredientsRef);