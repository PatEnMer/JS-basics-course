let n = 'Asia Kowalska';

let n1 = new String('Aga'); //jest to funkcja konstruktora tworząca obiekt - nie trzeba z niego korzystać, jest wykonywany w locie przez JS po przypisaniu metody

let n2 = String(32);

// console.log(typeof n);
// console.log(typeof n1);
// console.log(typeof n2);

//metody dostępne na stringach
console.log(n.length); //zwórci zawse długość stringa - ciągu znaków
console.log(n[1]); //dowołanie do indeksu w stringu, jak do tablicy
console.log(n.charAt(1)); //alternatywa do powyższego opisu
console.log(n.indexOf('nia')); //pozwala sprawdzić, czy w danym stringu znajduję się określony ciąg znakow, zwraca indeks gdzie zaczyna się string
console.log(n.replace('Asia', 'Jonna'));
console.log(n.slice(0, 1)); //wycinanie, bez uwzględnienia oznaczonego indeksu 'do'
console.log(n.substr(0, 1)); //wycinanie określonej ilości znaków, (od, ile znaków)
console.log(n.split(' ')); //split zwraca tablicę ze stringa, rozdzielenie na spacji oznacza, że grdy spacja zostanie znaleoziona, to stringi rozdzielane są do tablicy
console.log(n.toLowerCase());
console.log(n.toUpperCase());
