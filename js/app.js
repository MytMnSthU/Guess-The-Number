window.addEventListener("load", () => {
	const randomNumber = Math.floor(Math.random() * 100),
		guessBtn = document.querySelector(".btn-guess"),
		tryagainBtn = document.querySelector(".btn-try-again");

	var counter = 0,
		inputTxt = document.querySelector(".input-text");
	inputTxt.value = "";
	inputTxt.focus();

	var guessNumber = function () {
		var inputNum = document.querySelector(".input-text").value,
			answer = document.querySelector(".answer");

		counter++;

		if (inputNum > 10 && inputNum < 100) {
			if (inputNum > randomNumber) {
				answer.textContent = "Your answer is larger than than the number";
				answer.style.color = "red";
				answer.animate(
					[
						{
							transform: "translateX(-5px)",
						},
						{
							transform: " translateX(5px)",
						},
						{
							transform: "translateX(-5px)",
						},
					],
					{
						duration: 200,
						easing: "ease",
						iterations: 1,
					}
				);
			} else if (inputNum < randomNumber) {
				answer.textContent = "Your answer is smaller than the number";
				answer.style.color = "red";
				answer.animate(
					[
						{
							transform: "translateX(-5px)",
						},
						{
							transform: " translateX(5px)",
						},
						{
							transform: "translateX(-5px)",
						},
					],
					{
						duration: 200,
						easing: "ease",
						iterations: 1,
					}
				);
			} else {
				answer.textContent = "Your found the answer within " + counter + " times";
				answer.style.color = "green";
				answer.animate(
					[
						{
							transform: "scale(0.98)",
						},
						{
							transform: " scale(1.1)",
						},
						{
							transform: "scale(0.98)",
						},
					],
					{
						duration: 1000,
						easing: "ease-in",
						iterations: 1,
					}
				);
				tryagainBtn.style.display = "block";
			}
		} else {
			answer.textContent = "You should enter a number between 10 and 100";
			answer.style.color = "orange";
		}
	};

	guessBtn.addEventListener("click", guessNumber);
	tryagainBtn.addEventListener('click', () => {
		location.reload();	
	});
	window.addEventListener("keydown", (e) => {
		if (e.key == "Enter") {
			guessNumber();
		}
	});
	// console.log(randomNumber);

});
