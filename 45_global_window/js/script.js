// console.log(window);

function sayHello() {
	// window.message = 'Hej!';
	message = 'Hej!'; //zostało to przypisane do globalnego kontekstu window. nie powinno się w ten  sposób robić
	// alert(message);
	// let con = confirm('Czy wyrażasz zgodę?');
	let ans = prompt('Jak masz na imię?', 'Podaj imię');
	console.log(ans);
}
sayHello();
