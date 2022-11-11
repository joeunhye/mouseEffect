let x;
let y;
$(".move-image").mousemove(function (e) {
	gsap.to(".cursor", { duration: 0.2, left: e.pageX - 10, top: e.pageY - 10 });

	//특정 콘텐츠 기준 좌표값 중앙으로 설정 공식
	// = x좌표 - 컨텐츠 박스의 width / 2 + 콘텐츠 왼쪽의 여백값(포지션 값)
	x = e.clientX - ($(".move-image").width() / 2 + $(".move-image").position().left);
	y = e.clientY - ($(".move-image").height() / 2 + $(".move-image").position().top);
	console.log(x, y);
	$(".img").attr("style", `transform: translate(${x / 20}px, ${y / 20}px)`);
});

//출력용
$(window).mousemove(function (e) {
	$(".clientX").text(e.clientX);
	$(".clientY").text(e.clientY);
	$(".mouseX").text(Math.floor(x) + "px");
	$(".mouseY").text(Math.floor(y) + "px");
});

//좌표 확인
$(".cord").click(function (e) {
	e.preventDefault();
	$(".cursor strong").fadeToggle();
});
