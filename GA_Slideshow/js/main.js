var images =["1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg"]
var currentImage = 0

function changePicture(picNum){
	var img = document.getElementById('mainImage');
	img.setAttribute('src', images[picNum]);
	currentImage =	picNum;
}
function nextImage(){
	currentImage++;
	img.setAttribute('src', images[currentImage]);
	
}
function prevImage(){
	currentImage = currentImage - 1;
	img.setAttribute('src', images[picNum]);
}