// for (let i = 0; i <= 20; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// for (let i = 0; i <= 20; i++) {
// 	if (i % 2 === 0) {
// 		continue;
// 	}

// 	console.log(i);
// }
// // po uzyciu continue kod ponizej nie zostanie wykonany

let numbers = [ 2, 3, 6, 20, 0, 52, 11 ];
let containZero = false;

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);

	if (numbers[i] === 0) {
		containZero = true;
		break;
	}
}
