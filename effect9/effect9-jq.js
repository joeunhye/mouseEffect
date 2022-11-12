$(window).mousemove(function (e) {
	const mouseX = e.clientX;
	const mouseY = e.clientY;

	$(".item").each(function (index, item) {
		const itemX = $(this).offset().left + 20;
		const itemY = $(this).offset().top + 20;
		const diffX = mouseX - itemX;
		const diffY = mouseY - itemY;
		const radians = Math.atan2(diffY, diffX);
		const angle = (radians * 180) / Math.PI;

		$(this).css({ transform: "rotate(" + angle + "deg)" });
	});

	//커서
	gsap.to(".cursor", { duration: 0.1, x: e.clientX - 20, y: e.clientY - 20 });

	//출력용
	$(".pageX").text(parseInt(mouseX));
	$(".pageY").text(parseInt(mouseY));
});
