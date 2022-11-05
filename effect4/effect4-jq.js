//마우스 움직이기
const cursor = $(".cursor");
$(window).mousemove(function (e) {
	//출력용
	$(".pageX").text(e.pageX);
	$(".pageY").text(e.pageY);

	gsap.to(cursor, { duration: 0.3, left: e.clientX - 5, top: e.clientY - 5 });

	$(".mouseCont em").hover(
		function () {
			cursor.addClass("active");
		},
		function () {
			cursor.removeClass("active");
		}
	);
});
