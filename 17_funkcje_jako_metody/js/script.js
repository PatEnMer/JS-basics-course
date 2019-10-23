let person = {
	firstName: 'Jan',
	lastName: 'Kowalski',
	sayHello: function() {
		console.log('cześć mam na imię ' + this.firstName);
	},
	setFirstName: function(firstName) {
		this.firstName = firstName;
	}
};

person.firstName = 'Piotr';

// person.sayHello();
// powyższa linijka do odpalenia z node.js
