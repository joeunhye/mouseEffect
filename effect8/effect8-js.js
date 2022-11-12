const spanSlow = document.querySelectorAll(".spanSlow");
const spanFast = document.querySelectorAll(".spanFast");

const mouseMove = e => {
	let position = (e.pageX - window.innerWidth / 2) * 0.1;

	spanSlow.forEach(el => {
		el.style.transform = `translateX(${position}px)`;
	});

	spanFast.forEach(el => {
		el.style.transform = `translateX(${-position}px)`;
	});
};

window.addEventListener("mousemove", mouseMove);
