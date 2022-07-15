const ratings = document.querySelectorAll('.rating button');
const displayRating = document.querySelector('.heading span');
const card1 = document.querySelector('.first');
const card2 = document.querySelector('.second');
const submitBtn = document.querySelector('.submit-btn');

function feedback(rating) {
	displayRating.textContent = rating;
}

function changeCard() {
	submitBtn.addEventListener('click', (e) => {
		card1.classList.add('hide');
		card2.classList.remove('hide');
	});
}

ratings.forEach((el) => {
	el.addEventListener('click', (e) => {
		const picked = document.querySelectorAll('.picked');
		for (const i of [...picked]) {
			i.classList.remove('picked');
		}
		e.target.classList.add('picked');

		const rating = e.target.textContent;

		changeCard();
		feedback(rating);
	});
});
