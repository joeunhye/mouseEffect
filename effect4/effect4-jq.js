//마우스 움직이기
const cursor = $(".cursor");
let x = 0;
let y = 0;
let mouseX = 0,
	mouseY = 0,
	angleX = 0,
	angleY = 0,
	fmouseX = 0,
	fmouseY = 0;
$(window).mousemove(function (e) {
	x = e.pageX;
	y = e.pageY;

	// mouseX = $(window).width() / 2 - x; //마우스 X축을 가운데로 설정
	// mouseY = $(window).width() / 2 - y; //마우스 Y축을 가운데로 설정

	//마우스의 x, y축 최소값 -50, 최대값 50으로 설정
	mouseX = Math.max(-50, Math.min(50, $(window).width() / 2 - x));
	mouseY = Math.max(-50, Math.min(50, $(window).height() / 2 - y));

	angleX = (mouseX * 12) / 100;
	angleY = (mouseY * 12) / 100;

	fmouseX += ((angleX - fmouseX) * 1) / 10;
	fmouseY += ((angleY - fmouseY) * 1) / 10;

	//출력용
	$(".pageX").text(e.pageX);
	$(".pageY").text(e.pageY);
	$(".mouseX").text(mouseX);
	$(".mouseY").text(mouseY);
	$(".angleX").text(angleX);
	$(".angleY").text(angleY);
	$(".fmouseX").text(fmouseX);
	$(".fmouseY").text(fmouseY);

	gsap.to(cursor, { duration: 0.3, left: e.clientX - 5, top: e.clientY - 5 });

	$(".move-image").css({ transform: `translate(-50%, -50%) perspective(600px) rotateX(${fmouseY}deg) rotateY(${fmouseX}deg)` });
});
