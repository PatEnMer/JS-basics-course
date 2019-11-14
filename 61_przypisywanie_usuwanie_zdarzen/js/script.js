const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');

function sayHello() {
	alert('Hej');
}

btn2.onclick = sayHello;
btn2.onclick = function() {
	alert('Siema');
};

btn3.addEventListener('click', sayHello, false);

btn3.addEventListener(
	'click',
	function() {
		alert('wywolanie ze srodka');
	},
	false
);

// usuwanie zadarzeń
btn2.onclick = null;

btn3.removeEventListener('click', sayHello, false);
