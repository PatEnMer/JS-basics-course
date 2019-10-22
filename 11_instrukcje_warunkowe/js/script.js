let firstName = 'Maciej';

if (firstName !== '') {
	console.log('cześć ' + firstName);
} else {
	console.log('Podaj imię');
}

let number = 20;

if (number < 30) {
	console.log('liczba mniejsza od 30');
} else {
	if (number > 10) {
		console.log('liczba jest większa od 10');
	} else {
		console.log('licznia nie jest mniejsza od 30 ani większa od 10');
	}
}

// skrócona notacja if - do poszukania jak traktowana w ES6
let firstName = 'Maciej';

let userName;

// if (firstName) {
// 	userName = firstName;
// } else {
// 	userName = 'Nieznajomy';
// }

userName = firstName ? firstName : 'Nieznajomy';

console.log('Witaj, ' + userName);

// switch
let numberSwitch = 1;
let word = '';

// if (numberSwitch === 1) {
// 	word = 'jeden';
// } else {
// 	if (numberSwitch === 2) {
// 		word = 'dwa';
// 	} else {
// 		if (numberSwitch === 3) {
// 			word = 'trzy';
// 		} else {
// 			word = 'wartość nieznana';
// 		}
// 	}
// }

switch (numberSwitch) {
	case 1:
		word = 'jeden';
		break;
	case 2:
		word = 'dwa';
		break;
	case 3:
		word = 'trzy';
		break;
	default:
		word = 'wartość nieznana';
}

console.log('Wartość to ' + word) + '.';
