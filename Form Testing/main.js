var TestVar =""; 
var c1="";

	function testResults (form) { 
	var TestVar = form.inputbox.value; 
	document.getElementById("page2").style.display = 'block';
	document.getElementById("page1").style.display = 'none';
	c1="Welcome " + TestVar +", this is where you shall perish and fade from existance!"  
} 
function np1(){ 
	document.getElementById("page3").style.display = 'block'; 
	document.getElementById("page2").style.display = 'none'; 
	var x = document.createElement("P"); 
	var s = document.createTextNode(c1); 
	x.appendChild(s); 
	document.getElementById("bodyText1").appendChild(x); 
	console.log(TestVar) 
}