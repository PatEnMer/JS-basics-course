let list = document.querySelector('#list');

let children = list.childNodes;
let elementChildern = list.children;

let first = list.firstChild;
let firstElement = list.firstElementChild;

let last = last.lastChild;
let lastElement = list.lastElementChild;

let second = firstElement.nextSibling;
let secondElement = firstElement.nextElementSibling;

let lastButOne = lastElement.previousSibling;
let lastButOneElement = lastElement.previousElementSibling;

//odwołanie do rodzica
let parent = second.parentNode;

secondElement.parentNode.removeChild(secondElement);
