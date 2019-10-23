let person = {
	firstName: 'Patryk',
	lastName: 'Nowak',
	age: 41
};

person.job = 'programista';

delete person.age;

console.log(person);

let person2 = person;

person2.age = 23;

console.log(person2);
