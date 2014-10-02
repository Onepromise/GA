var images =[""]
var currentImage = 0

function changePicture(whichNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[whichNum]);
	currentImage =	whichNum;
}
function nextImage(){
	currentImage++;
	img.setAttribute('src', images[currentImage]);
	
}
function prevImage(){
	currentImage = currentImage - 1;
	img.setAttribute('src', images[whichNum]);
}