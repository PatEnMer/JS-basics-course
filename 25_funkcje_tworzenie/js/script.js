let text = 'hello';

function sayHello() {
	// console.log(text);
	let text = 'cześć';
	console.log(text);
}
sayHello(); //przypisana w ten sposób funkcja jest odczytywana z każdego miejsca - hoisting

let sayHello2 = function() {
	console.log('siema');
};
sayHello2(); //funkcja przypisana do zmiennej może być wywołana dopiero po jej wystąpeiniu w kodzie

let sayHello3 = function hello() {
	console.log(hello);
	console.log('JOŁ');
};
sayHello3(); //taki zapis funkcji tworzony jest by móc siędo niej odnieść w niej samej
