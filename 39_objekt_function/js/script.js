//rzadko korzysta się z konstruktoa funkcji, ze względu na bezpeczeństwo aplikacji

function sayHallo(firstName, lastName) {
	return firstName + ' ' + lastName;
}

// let f = new Function('firstName', 'lastName', 'return firstName + " " + lastName');

// console.log(sayHallo('Jan', 'Kowalski'));
// console.log(f('Piotr', 'Piotrowicz'));

function f(firstName, lastName) {
	arguments.callee.counter = arguments.callee.counter ? arguments.callee.counter : 1; //nie zadziała w strict mode
	return firstName + ' ' + lastName, ' funkcja wywołana po raz ' + arguments.callee.counter++;
}

console.log(f('Piotr', 'Piotrowski'));
console.log(f.length);
