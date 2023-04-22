window.onload = ev => {
	const pics_container = document.getElementById("pics-container");
	const random_pics = Array.from({length: 9}, () => Math.floor(Math.random() * 442))
		// Map them to the image url
		.map(num => `<img src="/cv/images/${num}.png">`)
		// Join them into a string
		.join("");
	pics_container.innerHTML = random_pics;
	// For every child
	Array.from(pics_container.children).map(el => el.onload = ev => el.style.opacity = "100")
}
