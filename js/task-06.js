// Напиши скрипт, который бы при потере фокуса на инпуте,
//  проверял его содержимое на правильное количество символов.

 const inputRef = document.querySelector('#validation-input');
 inputRef.addEventListener('blur', ()=>{
     if(inputRef.value.length===Number(inputRef.getAttribute('data-length'))){
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
     }else{
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');  
     };
 });


// inputRef.addEventListener('blur', ()=>{
//     if(inputRef.value.length===Number(inputRef.getAttribute('data-length'))){
//         toggleClass('valid', 'invalid')   
//     }else{
//         toggleClass('invalid', 'valid')
//     }
// });
// function toggleClass(add, rem){
//     inputRef.classList.add(add);
//     inputRef.classList.remove(rem);
// };

// inputRef.onblur = ({target:{value, dataset}})=>value.length===+dataset.length
// ?toggleClass('valid', 'invalid')
// :toggleClass('invalid', 'valid')

// function toggleClass(add, rem){
//         inputRef.classList.add(add);
//         inputRef.classList.remove(rem);
//     };