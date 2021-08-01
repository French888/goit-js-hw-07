// Напиши скрипт, который реагирует на изменение
//  значения input#font-size-control (событие input) 
//  и изменяет инлайн-стиль span#text обновляя 
//  свойство font-size. В результате при 
//  перетаскивании ползунка будет меняться размер 
// //  текста.
// <p><a href="index.html">На главную</a></p>
//    <input id="font-size-control" type="range" /><br />
// <span id="text">Абракадабра!</span>

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
inputEl.addEventListener('input', function(){
    textEl.style.fontSize = inputEl.value + 'px'
})
