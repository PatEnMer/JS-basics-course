let number = 10;

// koniunkcja
console.log(number < 20 && number > 5);

// alternatywa - or
let firstName = 'Maciej';
let lastName = 'Nowak';

if (firstName === 'Jacek' || lastName === 'Nowak') {
	console.log('uzytkownik zalogowany');
}

// negacja
let name = '';

if (!name) {
	console.log('Imie nie zostało podane');
} else {
	console.log('imie podane');
}
