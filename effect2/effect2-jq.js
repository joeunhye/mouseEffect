//마우스 움직이기
const cursor = $(".cursor");
const follower = $(".cursor-follower");
$(window).mousemove(function (e) {
	//출력용
	$(".pageX").text(e.pageX);
	$(".pageY").text(e.pageY);

	// cursor.css({
	// 	left: e.clientX - 5,
	// 	top: e.clientY - 5,
	// });

	// follower.css({
	// 	left: e.clientX - 15,
	// 	top: e.clientY - 15,
	// });

	gsap.to(cursor, { duration: 0.3, left: e.clientX - 5, top: e.clientY - 5 });
	gsap.to(follower, { duration: 1, left: e.clientX - 15, top: e.clientY - 15 });

	$(".mouseCont em").hover(
		function () {
			cursor.addClass("active");
			follower.addClass("active");
		},
		function () {
			cursor.removeClass("active");
			follower.removeClass("active");
		}
	);
});
