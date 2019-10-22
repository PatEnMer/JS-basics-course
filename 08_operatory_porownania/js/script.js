// każde porównanie zwraca boolen - true lub false
let number = 20;

// porównanie
if (number == '20') {
	console.log('liczba jest równa 20');
}
// nie sprawdza typu

if (undefined === null) {
	console.log('undefined jest równe null');
}
// sprawdza i typ i wartosć

// zaprzeczenie
if (number !== '20') {
	console.log('liczba nie jest równa 20');
}

if (number > 10) {
	console.log('liczba jest większa 10');
}

if (number < 10) {
	console.log('liczba jest mniejsza 10');
}

if (number >= 20) {
	console.log('liczba jest większa lub równa 20');
}

if (number <= 20) {
	console.log('liczba jest mniejsza lub równa 20');
}

let number2 = 6;
let isEven = number2 % 2 === 0;
