(function() {
	function createButton() {
		let button = document.createElement('Button');
		button.classList.add('backToTop', 'hidden');
		button.textContent = 'Powrót do góry';
		document.body.appendChild(button);
		return button;
	}

	const button = createButton();

	function animateScroll() {
		if (window.scrollY > 0) {
			window.scrollBy(0, -5);
			setTimeout(animateScroll, 5);
		}
	}

	button.addEventListener(
		'click',
		function(e) {
			e.stopPropagation();
			animateScroll();
		},
		false
	);

	window.addEventListener(
		'scroll',
		function() {
			if (window.scrollY >= 100) {
				button.classList.remove('hidden');
			} else {
				button.classList.add('hidden');
			}
		},
		false
	);
})();
