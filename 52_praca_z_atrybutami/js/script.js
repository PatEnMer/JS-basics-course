let link = document.querySelector('.link');
let href = link.getAttribute('href');

link.setAttribute('href', 'http://pp40.pl/');

link.removeAttribute('class');

let button = document.querySelector('button');

button.setAttribute('disabled', true);
button.removeAttribute('disabled');

let img = document.createElement('img');

img.src = 'https://images.pexels.com/photos/3099025/pexels-photo-3099025.jpeg';

document.body.appendChild(img);

let attrs = img.attributes;
