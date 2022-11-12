const star = document.querySelectorAll(".word");
function shadow(e) {
	star.forEach(el => {
		let { x, y } = e;
		const rect = el.getBoundingClientRect();
		const mouseX = ((x - rect.left - rect.width / 2) / rect.width) * 5;
		const mouseY = ((y - rect.top - rect.height / 2) / rect.height) * 5;
		el.style.textShadow = `${mouseX}px ${-mouseY}px 0px rgba(255, 165, 9, 0.4), ${-mouseX}px ${mouseY}px 0px rgba(255, 35, 251, 0.4), ${mouseY}px ${-mouseX}px 0px rgba(255, 255, 73, 0.4), ${-mouseY}px ${mouseX}px 0px rgba(102, 249, 255, 0.4)`;
	});
}

document.addEventListener("mousemove", shadow);
