$(window).on("mousemove", mouseMove);
function mouseMove(e) {
	let position = (e.pageX - $(window).width() / 2) * 0.1;
	// $(".spanSlow").css({ transform: `translateX(${position}px)` });
	// $(".spanFast").css({ transform: `translateX(${-position}px)` });

	gsap.to(".spanSlow", { duration: 0.5, x: position });
	gsap.to(".spanFast", { duration: 0.5, x: -position });
}
