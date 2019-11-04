let number = 24;

let number2 = Number('23'); //ciąg znaków nie jest parsowany, w przypadku dołączenia np. "zł", wynik będzie NaN

console.log(typeof number2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(Infinity === Number.POSITIVE_INFINITY);

console.log(number.toString(16)); //wartość dla metody toString orkreśla w jakim systemie otrzymuje wynik
console.log(number.toFixed(2)); //oznacza, że chcemy 2 miejsca po przecinku
