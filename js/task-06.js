// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);
function onInputBlur(event){
    if(Number(inputEl.dataset.length) !== inputEl.value.length){
        inputEl.classList.add('invalid');
    } else {
        inputEl.classList.replace('invalid', 'valid')
    }
}