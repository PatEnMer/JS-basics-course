for (let i = 0; i <= 10; i++) {
	console.log(i);
}

let person = {
	firstName: 'Maciej',
	lastName: 'Nowak',
	age: '40'
};

let person2 = {};

// for (let key in person) {
// 	console.log(key + ': ' + person[key]);
// }

for (let key in person) {
	person2[key] = person[key];
}

console.log(person2);
