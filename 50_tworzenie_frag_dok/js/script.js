let list = document.getElementById('list');

// for (let i = 0; i <= 5; i++) {
// 	let li = document.createElement('li');
// 	li.appendChild(document.createTextNode('Nowy element listy ' + i));
// 	list.appendChild(li);
// }
// niejest zalecane takie działanie na DOM

//dobra praktyka
let dc = document.createDocumentFragment();

for (let i = 0; i <= 5; i++) {
	let li = document.createElement('li');
	li.appendChild(document.createTextNode('Nowy element listy ' + i));
	dc.appendChild(li);
}

list.appendChild(dc);
