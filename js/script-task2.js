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
  
  const ingredientsList = document.querySelector('#ingredients');
  const element = ingredients.map(option => {
    const ingredientEl = document.createElement('li');
    ingredientEl.textContent = option;
    console.log(ingredientEl);
    return ingredientEl;
  })
  ingredientsList.append(...element);