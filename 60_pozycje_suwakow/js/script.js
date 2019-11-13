const container = document.querySelector('#container');
const box = container.querySelector('.box');

console.log(box.scrollTop);
console.log(box.scrollLeft);

window.scrollTo(0, 250); //do pozycjy podstawowej okna 
window.scrollBy(1, 100); //relatywnie do pozycji okna 
