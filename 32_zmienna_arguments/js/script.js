function sum1(num1, num2) {
	// console.log(arguments);
	// arguments[0] = 10; //nadpisuje argument w tablicy array-like
	if (arguments.length === 2 && typeof num1 === 'number' && typeof num2 === 'number') {
		return num1 + num2;
	} else {
		return 'Podaj poprawne argumenty';
	}
}

console.log(sum1(2, '5'));

function sum() {
	// console.log(arguments);

	let total = 0;

	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}
	return total;
}

console.log(sum(2, 3, 4, 5, 6));
