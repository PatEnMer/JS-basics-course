// let regex = /a+/gi;

let regex = new RegExp('a+', 'gi');

let n = 'Ania';

console.log(n.replace(regex, 'p'));

console.log(regex.test('kolejka'));
