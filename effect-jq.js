//출력용
$(window).mousemove(function (e) {
	$(".clientX").text(e.clientX);
	$(".clientY").text(e.clientY);
	$(".offsetX").text(e.offsetX);
	$(".offsetY").text(e.offsetY);
	$(".pageX").text(e.pageX);
	$(".pageY").text(e.pageY);
	$(".screenX").text(e.screenX);
	$(".screenY").text(e.screenY);
});

//마우스 움직이기
$(window).mousemove(function (e) {
	// console.log(e);
	$(".cursor").css({
		left: e.clientX - 25,
		top: e.clientY - 25,
	});

	$(".contents em").hover(
		function () {
			$(".cursor").addClass("active");
		},
		function () {
			$(".cursor").removeClass("active");
		}
	);
});
