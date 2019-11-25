let arr = [ 1, 34, 54, 2342, 23, 0, 234, 4546, 899 ];

console.log(arr);

arr.sort(function(a, b) {
	let random1 = Math.round(Math.random() * (10 - 1) + 1);
	let random2 = Math.round(Math.random() * (10 - 1) + 1);

	return random1 - random2;
});

console.log(arr);
