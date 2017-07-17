var profileImage = document.getElementById('profileImage');

profileImage.addEventListener('mouseover', function mouseover(event) {
	largeImg(event.target);
}, false);

profileImage.addEventListener('mouseout', function mouseout(event) {
	normalImg(event.target);
}, false);

function largeImg(element) {
	element.style.width = "400px";
}

function normalImg(element) {
	element.style.width = "100px";
}