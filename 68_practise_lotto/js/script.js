(function() {
	const btn = document.querySelector('#getNumbers');
	const output = document.querySelector('#showNumbers');

	function getRandom(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	function showRandomNumbers() {
		let numbers = [];
		let random;
		for (let i = 0; i < 6; i++) {
			random = getRandom(1, 49);
			while (numbers.indexOf(random) !== -1) {
				random = getRandom(1, 49);
			}
			numbers.push(random);
		}
		output.value = numbers.join(', ');
	}

	btn.onclick = showRandomNumbers;
})();
