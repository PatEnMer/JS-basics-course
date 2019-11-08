let container = document.querySelector('#container');
let para = document.querySelector('#container p');

// console.log(container.innerHTML);
// console.log(para.innerHTML);
// console.log(para.textContent);

// para.innerHTML = '<b>Nowa treść</b>';
para.textContent = 'Nowa treść';

console.log(container.outerHTML);
container.outerHTML = '<div id="container"><p>Treść</p></div>';

container.id = 'container2';

document.body.appendChild(container);
