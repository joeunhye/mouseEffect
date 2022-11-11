let x = 0;
let y = 0;

let moveImg = document.querySelector(".move-image");
moveImg.addEventListener("mousemove", function (e) {
	const rect = this.getBoundingClientRect();
	this.style.setProperty("--x", 100);
	this.style.setProperty("--y", 100);
});
