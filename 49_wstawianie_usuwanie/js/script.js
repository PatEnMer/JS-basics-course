let list1 = document.querySelector('#list1');
let list2 = document.querySelector('#list2');

let li = document.createElement('li');
let text = document.createTextNode('Treść jakaś');

li.appendChild(text);

// list1.appendChild(li);

// list1.insertBefore(li, list1.querySelector('li:nth-child(2)'));
list1.appendChild(list1.querySelector('li:first-child')); //element nie jest ponownie wstawiany, lecz zamieniana jest jego kolejność

list2.removeChild(list2.querySelector(':last-child'));

list1.replaceChild(li, list1.querySelector(':last-child'));
