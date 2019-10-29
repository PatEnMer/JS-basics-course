function init() {
	let firstName = 'Piter';

	function sayHello() {
		//bardzo ważne - funkcja ma dostęp do zmiennych tam gdzie została zdefinioowana, a nie gdzie zostaje wywołana
		let lastName = 'Nowak'; //funkcja ogranicza zakres zmiennych, do zmiennej zdefiniowanej wewnątrz nie mozna się odwołać poza nią. jest dostępna  poza nią
		console.log('czesc, ' + firstName + ' ' + lastName);
	}

	window.hello = sayHello;
}

init();
// garbage collector - odśmiecacz - w JS usuwa on sam z pamięci niepotrzebne dane
