const form = document.querySelector('#myForm');
const link = document.querySelector('#showMessage');

form.addEventListener(
	'submit',
	function(e) {
		if (this.firstName.value === '') {
			e.preventDefault();
			alert('Wpisz imię');
		}
	},
	false
);

form.querySelector('#firstName').addEventListener(
	'keypress',
	function(e) {
		if (String.fromCharCode(e.charCode) === 'a') {
			e.preventDefault();
		}
	},
	false
);

link.onclick = function(e) {
	e.preventDefault();
	let message = document.querySelector(e.target.hash);
	message.style.display = 'block';
	return false;
};
