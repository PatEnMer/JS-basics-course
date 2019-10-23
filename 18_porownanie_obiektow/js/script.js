let person = {
	firstName: 'Maciej',
	lastName: 'Kowalski'
};

let person2 = {
	firstName: 'Maciej',
	lastName: 'Kowalski'
};

console.log(person === person2);

// taki kod zwróci false, ponieważ porównywane są tylko referencje do obiektów, a nie ich zawartość, alternatywa może być wykorzystanie For-in dla porówania wartości wewnątrz obiektów
