function searchDb() {
	console.log('Otwieramy połączenie');
	db.search();
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
