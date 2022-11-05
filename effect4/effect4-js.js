const cursor = document.querySelector(".cursor");
let x = 0,
	y = 0,
	mouseX = 0,
	mouseY = 0,
	angleX = 0,
	angleY = 0,
	fmouseX = 0,
	fmouseY = 0;

window.addEventListener("mousemove", function (e) {
	x = e.pageX;
	y = e.pageY;

	mouseX = Math.max(-50, Math.min(50, window.innerWidth / 2 - x));
	mouseY = Math.max(-50, Math.min(50, window.innerHeight / 2 - y));
	angleX = (mouseX * 12) / 100;
	angleY = (mouseY * 12) / 100;
	fmouseX += ((angleX - fmouseX) * 1) / 10;
	fmouseY += ((angleY - fmouseY) * 1) / 10;

	document.querySelector(".pageX").textContent = x;
	document.querySelector(".pageY").textContent = y;
	document.querySelector(".mouseX").textContent = mouseX;
	document.querySelector(".mouseY").textContent = mouseY;
	document.querySelector(".angleX").textContent = angleX;
	document.querySelector(".angleY").textContent = angleY;
	document.querySelector(".fmouseX").textContent = Math.round(fmouseX);
	document.querySelector(".fmouseY").textContent = Math.round(fmouseY);

	gsap.to(cursor, { duration: 0.3, left: e.clientX - 5, top: e.clientY - 5 });

	let move = document.querySelector(".move-image");
	move.style.transform = `translate(-50%, -50%) perspective(600px) rotateX(${fmouseY}deg) rotateY(${fmouseX}deg)`;
});
