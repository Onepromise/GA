var story =[intro, forest, highway, house1, house2, rv, enp, wwt, wal1, wal2, wal3]

alert("Welcome to the world I have created for you. In this text world, your decision chooses your outcome. Are you ready?");
var userName = prompt("What is your first name?");
var userage = prompt("How old are you?");
if (userage < 18){
	 alert(userName + ", you might be too young to enter my domain, I am not held responsible if you continue on.")
}
else{
	 alert("Prepare yourself, " + userName + "!") ;
}
function choice1(){
    document.getElementById("s2").style.display = 'block';
    document.getElementById("s1").style.display = 'none';
    var x = document.createElement("P");
    var s = document.createTextNode(intro);
    x.appendChild(s);
    document.getElementById("bodyText").appendChild(x);
}
function choice2(){
    document.getElementById("s2").style.display = 'block';
    document.getElementById("s1").style.display = 'none';
    var x = document.createElement("P");
    var s = document.createTextNode(intro);
    x.appendChild(s);
    document.getElementById("bodyText").appendChild(x);
}
function choice3(){
    document.getElementById("s3").style.display = 'block';
    document.getElementById("s2").style.display = 'none';
    var x = document.createElement("P");
    var s = document.createTextNode(forest);
    x.appendChild(s);
    document.getElementById("bodyText").appendChild(x);
    document.body.style.backgroundImage="url('img/forest.jpg')";
}
function choice4(){
    document.getElementById("s4").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
    document.body.style.backgroundImage="url('img/highway.jpg')";
}
function choice5(){
    document.getElementById("s5").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
}
function choice6(){
    document.getElementById("s6").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
}
function choice7(){
    document.getElementById("s11").style.display = 'block';
    document.getElementById("s4").style.display = 'none';
}
function choice8(){
    document.getElementById("s12").style.display = 'block';
    document.getElementById("s4").style.display = 'none';
}
function choice9(){
    document.getElementById("s7").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice10(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice11(){
    document.getElementById("s9").style.display = 'block';
    document.getElementById("s6").style.display = 'none';
}
function choice12(){
    document.getElementById("s10").style.display = 'block';
    document.getElementById("s6").style.display = 'none';
}
function choice13(){
    document.getElementById("s11").style.display = 'block';
    document.getElementById("s7").style.display = 'none';
}
function choice14(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s7").style.display = 'none';
}
function choice15(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice16(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice17(){
    document.getElementById("s2").style.display = 'block';
    document.getElementById("s1").style.display = 'none';
}
function choice18(){
    document.getElementById("s2").style.display = 'block';
    document.getElementById("s1").style.display = 'none';
}
function choice19(){
    document.getElementById("s3").style.display = 'block';
    document.getElementById("s2").style.display = 'none';
}
function choice20(){
    document.getElementById("s4").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
}
function choice21(){
    document.getElementById("s5").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
}
function choice22(){
    document.getElementById("s6").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
}
function choice23(){
    document.getElementById("s11").style.display = 'block';
    document.getElementById("s4").style.display = 'none';
}
function choice24(){
    document.getElementById("s12").style.display = 'block';
    document.getElementById("s4").style.display = 'none';
}
function choice25(){
    document.getElementById("s7").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice26(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice27(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice28(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice29(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
function choice30(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
}
//function choice31(){
    //document.getElementById("").style.display = 'block';
    //document.getElementById("").style.display = 'none';