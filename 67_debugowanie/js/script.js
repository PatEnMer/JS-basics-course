// w konsoli przeglądarki
// $$('h1')[index_liczbowo] - to fukncja dla querySelectorAll
// clear() - to wbudowana funkcja do czyszczenia konsoli
// console.dir(obiekt) - ta metoda wyświetla obiekt, tak by można było do niego wejść

const h1 = document.querySelector('h1');

h1.onclick = function(e) {
	let text = this.textContent;
	this.textContent = text.toUpperCase();
};

// devtoolstips.com - strona z poradami dotyczącymi narzędzi zawartych w przeglądarce.
