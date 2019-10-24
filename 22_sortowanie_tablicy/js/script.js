let arr = [ 4, 45, 23, 1, 22, 5, 65, 13, 7 ];
let arr2 = [ 'Wojtek', 'Tomek', 'Ania', 'Patrycha', 'Lena', 'Mateusz' ];

console.log(arr);

// arr.sort(); //sortuje liczby jka stringi - bez parametrów

arr.sort(function(a, b) {
	return a - b;
	// if (a < b) {
	// 	return -1;
	// } else {
	// 	if (a > b) {
	// 		return 1;
	// 	} else {
	// 		return 0;
	// 	}
	// }
});

console.log(arr);

console.log(arr2);

arr2.sort(function(a, b) {
	if (a < b) {
		return -1;
	} else {
		if (a > b) {
			return 1;
		} else {
			return 0;
		}
	}
});

console.log(arr2);
