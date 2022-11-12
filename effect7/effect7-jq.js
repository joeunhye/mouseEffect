const width = $(".cursor").outerWidth() / 2;
const height = $(".cursor").outerWidth() / 2;

$(window).mousemove(function (e) {
	gsap.to(".cursor", { duration: 0.5, left: e.pageX - width, top: e.pageY - height });
});
