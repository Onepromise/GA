var userName =""; 
var userAge ="";
var c1="";

	function testResults (form) { 
	var userName = form.firstName.value;
	var userAge = form.age.value; 
	document.getElementById("page2").style.display = 'block';
	document.getElementById("page1").style.display = 'none';
	c1="Welcome " + userName +", this is where you shall perish and fade from existance! I see you are " + userAge +". I shall have fun with you!"  
	c2=" This is another test to make sure your name " + userName + ". Your age," + userAge + " works properly!"
} 
function np1(){ 
	document.getElementById("page3").style.display = 'block'; 
	document.getElementById("page2").style.display = 'none'; 
	var x = document.createElement("P"); 
	var s = document.createTextNode(c1); 
	x.appendChild(s); 
	document.getElementById("bodyText1").appendChild(x); 
}
function np2(){ 
	document.getElementById("page4").style.display = 'block'; 
	document.getElementById("page3").style.display = 'none'; 
	var x = document.createElement("P"); 
	var s = document.createTextNode(c2); 
	x.appendChild(s); 
	document.getElementById("bodyText2").appendChild(x);
}