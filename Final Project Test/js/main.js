var choices =[cforest, chighway, chouse1, chouse2, chouse3, crv, cenp, cwwt, cwal1, cwal2, cwal3]
var story =[intro, forest, highway, house1, house2, house3, rv, enp, wwt, wal1, wal2, wal3]

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
    var t = document.createTextNode(forest);
    x.appendChild(t);
    document.getElementById("bodyText").appendChild(x);
}
function choice2() {
    var x = document.createElement("P");
    var t = document.createTextNode(highway);
    x.appendChild(t);
    document.getElementById("bodyText").appendChild(x);
}