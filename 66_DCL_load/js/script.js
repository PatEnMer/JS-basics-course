window.addEventListener(
	'load',
	function(e) {
		let img = document.querySelector('img');
		console.log('Wymiary obrazka to ' + img.offsetWidth + 'x' + img.offsetHeight + 'px');
	},
	false
);

document.addEventListener(
	'DOMContentLoaded',
	function(e) {
		const h1 = document.querySelector('h1');

		console.log(h1.textContent);
	},
	false
);
