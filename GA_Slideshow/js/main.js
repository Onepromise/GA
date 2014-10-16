var images = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg"]
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


