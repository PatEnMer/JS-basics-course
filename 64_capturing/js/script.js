const body = document.body;
const btn = document.querySelector('#btn');

body.addEventListener(
	'click',
	function(e) {
		console.log(e.eventPhase);
		console.log('Kliknąłeś w body');
	},
	true
);

body.addEventListener(
	'click',
	function(e) {
		console.log(e.eventPhase);
		console.log('Kliknąłeś ponownie w body');
	},
	false
);

btn.addEventListener(
	'click',
	function(e) {
		console.log(e.eventPhase);
		console.log('Kliknąłes przycisk');
	},
	false
);

// phase 1 - capturing
// phase 2 - on target
// phase 3 - bubbling
