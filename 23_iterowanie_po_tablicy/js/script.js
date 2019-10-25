// let numbers = [ 2, 4, 15, 23, 14, 5 ];
// let text = 'Wylosowane liczby to: ';

// let arrLength = numbers.length; //zmienna w celu optymalizacji w przypadku iterowania po dużych tablicach

// for (let i = 0; i < arrLength; i++) {
// 	text += numbers[i];
// 	if (i !== arrLength - 1) {
// 		text += ', ';
// 	}
// }

// console.log(text);

// iterowanie po zagnieżdzonych tablicach
let arr = [ [ 'Piotrek', 'Włodarczyk', 24 ], [ 'Maria', 'Milewska', 24 ], [ 'Wojtek', 'Nowak', 5 ] ];

for (let i = 0; i < arr.length; i++) {
	console.log('DANE');
	for (let j = 0; j < arr[i].length; j++) {
		console.log(arr[i][j]);
	}
	console.log('------------');
}
