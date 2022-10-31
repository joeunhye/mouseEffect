window.addEventListener("mousemove", function (e) {
	document.querySelector(".clientX").innerHTML = e.clientX;
	document.querySelector(".clientY").innerHTML = e.clientY;
	document.querySelector(".offsetX").innerHTML = e.offsetX;
	document.querySelector(".offsetY").innerHTML = e.offsetY;
	document.querySelector(".pageX").innerHTML = e.pageX;
	document.querySelector(".pageY").innerHTML = e.pageY;
	document.querySelector(".screenX").innerHTML = e.screenX;
	document.querySelector(".screenY").innerHTML = e.screenY;

	document.querySelector(".cursor").style.cssText = `left: ${e.clientX - 25}px; top: ${e.clientY - 25}px;`;

	//오버 효과
	let em = document.querySelectorAll(".contents em");
	em.forEach(elem => {
		elem.addEventListener("mouseenter", () => {
			document.querySelector(".cursor").classList.add("active");
		});
	});

	em.forEach(elem => {
		elem.addEventListener("mouseleave", () => {
			document.querySelector(".cursor").classList.remove("active");
		});
	});
});
