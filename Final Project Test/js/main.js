//alert("Welcome to the world I have created for you. In this text world, your decision chooses your outcome. Are you ready?");
//var userName = prompt("What is your first name?");
//var userage = prompt("How old are you?");
//if (userage < 18){
//	 alert(userName + ", you might be too young to enter my domain, I am not held responsible if you continue on.")
//}
//else{
//	 alert("Prepare yourself, " + userName + "!")
//}
function choice1() {
    var x = document.createElement("P");
    var t = document.createTextNode("This is a paragraph.");
    x.appendChild(t);
    document.getElementById("bodyText").appendChild(x);
}