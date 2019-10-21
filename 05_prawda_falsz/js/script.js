let isLoggedIn = false;

if (isLoggedIn) {
	console.log('zalogowany');
} else {
	console.log('nie zalogowany');
}

// wartosci fałszywe
// false
// 0
// ""
// null
// undefined
// NaN

let value = 'false';

if (value) {
	console.log('ta wartosc nie jest falszywa');
}

// kazda wartosc poza podanymi powyzej jest prawdziwa
