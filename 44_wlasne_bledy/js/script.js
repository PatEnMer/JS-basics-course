function getData(type) {
	if (!type) {
		throw new Error('Nieprawidłowy typ');
	}
	return {
		firstName: 'Jan',
		lastName: 'Kowalski'
	};
}

function searchDb() {
	console.log('Otwieramy połączenie');
	console.log('Pobieramy dane');
	let data = getData();
	if (data === null) {
		throw new Error('Brak danych');
	}
	console.log('Zamykamy połączenie');
}

try {
	db.search();
} catch (error) {
	console.dir('Wystąpił błąd: ' + error.message);
} finally {
	console.log('Zamykam połączenie po wystąpieniu błędu');
}

searchDb();
