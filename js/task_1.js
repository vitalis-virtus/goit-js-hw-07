const listElementsCounter = (array) => {
    return array.children.length;    
}

const categoriesRef = document.querySelector('#categories');
const headerList = categoriesRef.querySelectorAll('h2');

console.log(`В списке ${listElementsCounter(categoriesRef)} категории`);

headerList.forEach(item => {
    console.log(`Категория: ${item.textContent}`);
    console.log(`Количество элементов: ${listElementsCounter(item.nextElementSibling)}`);
});





