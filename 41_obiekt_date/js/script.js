let d = new Date();

let d2 = new Date(1232124235123); //ilość sekund od 1.01.1970 - unix time stamp

let d3 = new Date(2015, 0, 14, 12, 14, 34); //miseiące liczone są jak indeksy - od zera

console.log(d);
console.log(d2);
console.log(d3);

console.log(d3.getFullYear()); //porbanie roku
console.log(d3.getMonth()); //pobiera miesiąc
console.log(d3.getDay()); //pobiera dzień
console.log(d3.getHours()); //analogicznie
console.log(d3.getMinutes());
console.log(d3.getMilliseconds());
console.log(d3.getDay());
console.log(d3.getTime()); //pobrana jest liczba milisekund od 1 stycznia 1970
//każdą z powyższych metod można ustawić jako set

console.log(d3.toString());
console.log(d3.toLocaleString());

console.log(d3.getDate() + '.' + (d3.getMonth() + 1) + '.' + d3.getFullYear());

d3.setFullYear(2020);
console.log(d3);

let d4 = new Date('Mon Nov 04 2019 17:27:13 GMT+0100 (GMT+01:00)');
