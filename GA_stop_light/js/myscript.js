
var redLight = document.getElementById('redlight');
var yellowLight = document.getElementById('yellowlight');
var greenLight = document.getElementById('greenlight');

function buttonclick(whichLight){
	turnOffLights();
	if (whichLight == "redLight"){
		redLight.style.backgroundColor ="red";
	} else if (whichLight == "yellowLight") {
		yellowLight.style.backgroundColor ="yellow";
	} else {	
		greenLight.style.backgroundColor ="green";
	}
}

function turnOffLights() {
	redLight.style.backgroundColor ="black"; // Don't forget your semicolons
	yellowLight.style.backgroundColor ="black";
	greenLight.style.backgroundColor ="black";
}

