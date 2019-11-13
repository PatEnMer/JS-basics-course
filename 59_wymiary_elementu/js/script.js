const container = document.querySelector('#container');
const box = container.querySelector('.box');
const link = container.querySelector('a');

let containerDim = container.getBoundingClientRect();

console.log(containerDim);

console.log(container.offsetWidth);
console.log(container.offsetHeight);

console.log(box.getBoundingClientRect().width);
console.log(box.offsetWidth);

// bez borderu
console.log(container.clientWidth);
console.log(container.clientHeight);

// wysokość boxa z treścią wewnątrz
console.log(box.scrollWidth);
console.log(box.scrollHeight);

console.log(link.offsetWidth);

// przeglądarka
console.log(window.innerHeight);
console.log(window.innerWidth);
