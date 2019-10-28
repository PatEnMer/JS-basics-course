function square(num) {
	return num * num;
}
console.log(square(4));

function sum(a, b) {
	//dane podawane w fumcji są parametrami
	return a + b;
}

console.log(sum(2, 3)); //w przyadku nie podania jednego z parametrów wartoś jest NaN - undefined
// konkretne dane podawane jużdo obliczeń funkcji, są argumentami

let person = {
	firstName: 'Tomek',
	lastName: 'Nowak'
};

function sayHello(obj) {
	obj.firstName = 'Piter'; // po odwolani sie do objektu przez referencje zostaje on nadpisany i wartość jego zostaje zmieniona
	return 'Witaj, ' + obj.firstName + ' ' + obj.lastName;
}

console.log(sayHello(person));
