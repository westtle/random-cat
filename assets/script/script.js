const html = {
	randomizer: document.querySelector("#js---btn-randomize"),
	catImage:document.querySelector("#js---random-image"),
	facts: document.querySelector("#js---facts--inner-text")
}

html.randomizer.addEventListener("click", getCat);

function getCat() {
	const apiURL = {
		image: "https://aws.random.cat/meow",
		facts: "https://meowfacts.herokuapp.com/"
	}

	fetch(apiURL.image)
		.then(response => response.json())
		.then(data => {
			html.catImage.src = `${data.file}`;
		});

	fetch(apiURL.facts)
		.then(response => response.json())
		.then(data => {
			html.facts.innerText = "'" + `${data.data}` + "'";
		});
}

window.body.onload = getCat();