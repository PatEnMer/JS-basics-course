(function() {
	let arr = [ 1, 44, 22, 31, 4 ];

	arr.sort(function(a, b) {
		return a - b;
	});

	function sayHello(text, getName) {
		let result = text + getName();
		return result;
	}

	console.log(
		sayHello(
			'Witam, ' +
				function() {
					return 'Pioter';
				}
		)
	);
})(); //samo wywołująca się funkcja
