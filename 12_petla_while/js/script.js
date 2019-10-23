let number = 10;

while (number > 0) {
	// console.log(number);
	number--;
}

let secretNumber = 2;

while (prompt('Podaj liczbę') != secretNumber) {
	alert('Nie trafiłeś');
}

alert('Brawo, udało ci sie!');
