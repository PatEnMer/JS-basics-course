// setTimeout(() => {
// 	console.log('Witam po 3 sekundach');
// }, 3000);

let timeout = setTimeout(() => {
	console.log('Witam po 3 sekundach');
}, 5000);

// clearTimeout(timeout);

let counter = 0;
let clock = null;

function tick() {
	if (counter <= 5) {
		console.log(counter++);
	} else {
		clearInterval(clock);
	}
}

// clock = setInterval(tick, 1000);

let count = 0;
function tock() {
	if (count <= 5) {
		console.log(count++);
		setTimeout(tock, 1000);
	}
}

tock();
