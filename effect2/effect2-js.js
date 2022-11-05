const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

window.addEventListener("mousemove", function (e) {
	document.querySelector(".pageX").innerHTML = e.pageX;
	document.querySelector(".pageY").innerHTML = e.pageY;

	// cursor.style.cssText = `left: ${e.clientX - 25}px; top: ${e.clientY - 25}px;`;
	gsap.to(cursor, { duration: 0.3, left: e.clientX - 5, top: e.clientY - 5 });
	gsap.to(follower, { duration: 1.2, left: e.clientX - 15, top: e.clientY - 15 });

	//오버 효과
	let em = document.querySelectorAll(".mouseCont em");
	em.forEach(elem => {
		elem.addEventListener("mouseenter", () => {
			cursor.classList.add("active");
			follower.classList.add("active");
		});

		elem.addEventListener("mouseleave", () => {
			cursor.classList.remove("active");
			follower.classList.remove("active");
		});
	});
});
