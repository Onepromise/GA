function buttonclick(whichLight){
	var redLight = document.getElementById('redlight')
	var yellowLight = document.getElementById('yellowlight')
	var greenLight = document.getElementById('greenlight')

	if (whichLight == "redLight"){
		redLight.style.backgroundColor ="red";
	} else if (whichLight == "yellowLight") {
		yellowLight.style.backgroundColor ="yellow";
	} else {	
		greenLight.style.backgroundColor ="green";
	}
}
