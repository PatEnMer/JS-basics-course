function getValues() {
	let obj = {
		firstName: 'Pioter',
		lastName: 'Nosacz'
	};

	let id = 2345234;

	return [ obj, id ];
}

let values = getValues();
let data = values[0];
let id = values[1];

console.log(data);
console.log(id);
