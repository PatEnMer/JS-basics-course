const h1 = document.querySelector('h1');
const container = document.querySelector('#container');
const p = container.querySelectorAll('p');
const link = container.querySelector('a');

h1.style.color = '#ff0000';
h1.style.fontSize = '20px';

container.style.cssText = 'width: 600px; margin: 0 auto;';

for (let i = 0; i < p.length; i++) {
	p[i].style.lineHeight = '30px';
}

link.style.display = 'block';
// link.style.display = ''; //pusty string resetuje wcześniej ustalony styl

console.log(parseInt(container.style.width));
console.log(h1.style.display);

console.log(window.getComputedStyle(h1).display);
//przypisywanie styli przez JS tylko w niezbędnych przypadkach
