// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//  после чего вставит все li за одну операцию в список ul.ingredients. 
//  Для создания DOM-узлов используй document.createElement().
  
const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsListEl = document.querySelector('#ingredients')
const element = ingredients.map(option=>{
const ingredientLi = document.createElement('li');
ingredientLi.innerHTML = `<p>${option}</p>`;
console.log(ingredientLi);
return ingredientLi;
})
ingredientsListEl.append(...element)
ingredientsListEl.style.listStyle='none'

  