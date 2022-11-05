const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", function (e) {
	document.querySelector(".pageX").innerHTML = e.pageX;
	document.querySelector(".pageY").innerHTML = e.pageY;

	gsap.to(cursor, { duration: 0.3, left: e.clientX - 5, top: e.clientY - 5 });

	//오버 효과
	let em = document.querySelectorAll(".mouseCont em");
	em.forEach(elem => {
		elem.addEventListener("mouseenter", () => {
			cursor.classList.add("active");
		});

		elem.addEventListener("mouseleave", () => {
			cursor.classList.remove("active");
		});
	});
});
