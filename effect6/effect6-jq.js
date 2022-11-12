$(window).mousemove(function (e) {
	let x = e.pageX;
	let y = e.pageY;
	let mouseX = ((x - ($(".word").offset().left - $(".word").width() / 2)) / $(".word").width()) * 5;
	let mouseY = ((y - ($(".word").offset().top - $(".word").height() / 2)) / $(".word").height()) * 5;

	$(".word").css({
		textShadow: `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 9, 0.4), ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4), ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4), ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`,
	});
});
