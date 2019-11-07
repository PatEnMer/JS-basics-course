let container = document.getElementById('container');

let firstName = document.getElementsByName('firstName')[0];

let paragraphs = document.getElementsByTagName('p');

let texts = document.getElementsByClassName('text');

let h1 = document.querySelector('h1');

let form = document.querySelector('#myForm');

let submit = form.querySelector('button[type="submit"]');

let links = document.querySelectorAll('a');

// właściwości:
document.all; //wszystkie elementy na stronie
document.forms; //zwróci wszystkie formularze
document.images; //zwróci wszystkie obrazki
document.links; //zwróci wszystkie linki

let firstForm = document.forms[0];
