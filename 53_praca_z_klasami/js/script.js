let link = document.querySelector('.link');

console.log(link.className);

link.classList.add('red', 'green');
link.classList.remove('red');
link.classList.toggle('green'); //ustawia nowa klase jeśli jej niema, lub usuwa istniejącą
console.log(link.classList.contains('red')); //zwraca true lub false
