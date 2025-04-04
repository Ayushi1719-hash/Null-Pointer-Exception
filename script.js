let button = document.querySelector("span");
let ball = document.querySelector(".caddie__ball");

button.addEventListener("click", function () {
	console.log("Button clicked. Current state:", this.classList.value); // <-- NEW LINE
	this.classList.toggle("is-added");
});

ball.addEventListener("animationend", function () {
	button.classList.remove("is-added");
});
