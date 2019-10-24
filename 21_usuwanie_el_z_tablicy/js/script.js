let arr = [ 'Tomek', 'Wojtek', 'Jacek', 'Paweł' ];

console.log(arr.length);

// arr.length = 2;

// delete arr[2];

let last = arr.pop(); //usuwanie ostatniego elementu z tbalicy i zwraca element z tablicy
let first = arr.shift(); //usuwanie pierwszego elementu z tbalicy i zwraca element z tablicy
arr.splice(1, 1);
let lastTwo = arr.splice(-2, 2, 'Piotr', 'Waldek'); //usuwanie od tyłu, pod[ane lelmenty zastępują usunięte, zwracane są też usunięte elementy

console.log(arr);
console.log(last);
console.log(first);
