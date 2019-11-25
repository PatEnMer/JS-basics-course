const txt = '';

let b = Boolean(txt);

// !! - dowolną wartość, prawdziwą lub fałszywą skonwertuj na fałsz - podwójne zaprzeczenie
if (!!txt === false) {
	console.log('fałsz');
}
