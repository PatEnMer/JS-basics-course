function sayHello() {
	return 'Witaj ';
}

let hello = sayHello();

console.log(hello + 'Maciej');
console.log(sayHello() + 'Jacek');

function makeArray() {
	let arr = [ 1, 2, 3 ];
	return arr;
}

console.log(makeArray().length);

function hi() {
	if (3 > 1) {
		return false;
	}
	console.log('czesc');
}
