let text = 'Odrwócony tekst do przeczytania całkiem całkiem';

let reverse = '';

for (let i = text.length - 1; i >= 0; i--) {
	reverse += text[i];
}

console.log(reverse);

text1 = 'dowolną wartość, prawdziwą lub fałszywą skonwertuj na fałsz';
console.log(text1.split('').reverse().join(''));
