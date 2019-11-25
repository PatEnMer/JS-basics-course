// const txt = '';

// let b = Boolean(txt);

// // !! - dowolną wartość, prawdziwą lub fałszywą skonwertuj na fałsz - podwójne zaprzeczenie
// if (!!txt === false) {
// 	console.log('fałsz');
// }

function sayHello(name) {
	name = name || 'Nieznajomy'; //zapis poniższy można zastąpić przez "or"
	// name = name ? name : 'Nieznajomy';
	alert('Witaj, ' + name);
}

sayHello('Pat');
