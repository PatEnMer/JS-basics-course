let arr = [ 33, 12, 2, 5, 0, 7, 99, 23 ];

console.log(arr);

// let half = arr.slice(0, 4);
let half = arr.slice(-4, 6);

// console.log(half);

// console.log(arr.join(', '));

// console.log(arr.indexOf(101) !== -1);

// console.log(arr.concat(half));

arr.forEach(function(value, index, array) {
	// console.log(value);
	// console.log(index);
	// console.log(array);
});

let gt10 = arr.filter(function(value) {
	return value > 10;
});

// console.log(gt10);

let negative = arr.map(function(value) {
	return value * -1;
});

console.log(negative);
