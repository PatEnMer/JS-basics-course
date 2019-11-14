const body = document.body;
const btn = document.querySelector('#btn');

body.addEventListener(
	'click',
	function(e) {
		console.log('Kliknales w body');
	},
	false
);

btn.addEventListener(
	'click',
	function(e) {
		e.stopPropagation(); //zapobiega wykonania na rodzicu
		e.stopImmediatePropagation(); //zapobiega w ogóle wykonaniu
		console.log('Kliknales w przycisk');
	},
	false
);

btn.addEventListener(
	'click',
	function(e) {
		e.stopPropagation();
		console.log('Znów Kliknales w przycisk');
	},
	false
);
