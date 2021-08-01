const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

   const galleryListRef = document.querySelector('#gallery');
const galleryListItems = images.reduce(callback, ' ');
function callback(acc, {url, alt}){
  return acc + 
  `<Li>
     <img src = ${url} alt = ${alt} width='300'></img>
  </Li>`
};
galleryListRef.insertAdjacentHTML('afterbegin', galleryListItems);
console.log(galleryListItems);
galleryListRef.setAttribute("style", "list-style:none; display: flex; justify-content: space-around;")

    

