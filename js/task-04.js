// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const[decrement, span, increment] = document.querySelector('#counter').children
console.log(decrement, span, increment);
let counterValue=0;
decrement.addEventListener('click', ()=>{
    counterValue-=1;
    span.textContent=counterValue;
});
increment.addEventListener('click', ()=>{
    counterValue+=1;
    span.textContent=counterValue;
})
// decrement.onclick=()=>span.textContent-=1;
// increment.onclick=()=>span.textContent=+span.textContent+1;

// const counterValue = {
// value:0,
// increment(){
// console.log('increment=>this', this);
// this.value +=1;
// },
// decrement(){
//     console.log('decrement=>this', this);
//     this.value -=1;   
// },
// };
// const decrementBtn = document.querySelector('.decrement')
// const incrementBtn = document.querySelector('.increment')
// const valueEl = document.querySelector('#value')

// decrementBtn.addEventListener('click', function(){
//     console.log('клик на декремент');
// counterValue.decrement()
// console.log(counterValue);
// valueEl.textContent = counterValue.value
// });

// incrementBtn.addEventListener('click', function(){
//       console.log('клик на инкремент');
//     counterValue.increment()
//     console.log(counterValue);
//     valueEl.textContent = counterValue.value   
// })