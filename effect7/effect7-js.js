const cursor = document.querySelector(".cursor");
const circle = cursor.getBoundingClientRect();
const width = circle.width / 2;
const height = circle.height / 2;

function curserMove(e) {
	gsap.to(cursor, { duration: 0.5, left: e.pageX - width, top: e.pageY - height });
}

document.addEventListener("mousemove", curserMove);
