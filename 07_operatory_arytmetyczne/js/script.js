// dodawanie
let numner1 = 2;
let numner2 = 4;

let res1 = numner1 + numner2;

// konkatenacja - dołączenie liczby do stringa
let res2 = 2 + '5';

// odejmowanie
let res3 = numner2 - numner1;

// mnożenie - string konwertowany jest na liczbę
let res4 = numner1 * numner2 * '1';
let res5 = 5 * 'asdqwe'; //NaN

// dzielenie
let res6 = numner2 / numner1;

// reszta z dzielenia
let res7 = 6 % 3;
let res8 = 6 % 4;

// kolejność wykonywania działań matematyczna - mnożenie/dzielenie przed dodawanie, odejmowaniem
let res9 = 2 + 2 * 9;
let res10 = (2 + 2) * 9;

// Przypisywanie obliczeń
// numner2 = numner2 + 2; //to samo co poniżej
numner2 += 2; //+=, -=, *=, /=, %=
