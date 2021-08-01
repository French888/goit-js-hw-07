// Напиши скрипт который, при наборе текста в инпуте 
// input#name-input (событие input), подставляет его 
// текущее значение в span#name-output. Если инпут пустой, 
// в спане должна отображаться строка 'незнакомец'.

const inputRef = document.querySelector('#name-input');
const textRef = document.querySelector('#name-output');

inputRef.oninput = ({target:{value}}) => textRef.textContent =
value.trim()!==''?value:'незнакомец'
// const refs = {
//     inputEl:document.querySelector('#name-input'),
//     outputEl:document.querySelector('#name-output'),
// };
// refs.inputEl.addEventListener('input', (event)=>{
//     event.currentTarget.value.trim()
//     ?refs.outputEl.textContent=event.currentTarget.value:
//     refs.outputEl.textContent='незнакомец'
// });

