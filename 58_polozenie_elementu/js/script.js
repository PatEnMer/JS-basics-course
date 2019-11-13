const container = document.querySelector('#container');
const box = container.querySelector('.box');

console.log(box.offsetTop);
console.log(box.offsetLeft);
console.log(box.offsetParent);
// jest to odczytywane względem rodzica

let pos = box.getBoundingClientRect();
console.log(pos);

console.log(document.elementFromPoint(399, 200));
