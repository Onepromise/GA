//alert("Welcome to the world I have created for you. In this text world, your decision chooses your outcome. Are you ready?");
//var userName = prompt("What is your first name?");
//var userage = prompt("How old are you?");
//if (userage < 18){
//	 alert(userName + ", you might be too young to enter my domain, I am not held responsible if you continue on.")
//}
//else{
//	 alert("Prepare yourself, " + userName + "!") ;
//}
function choice1(){
    document.getElementById("s2").style.display = 'block';
    document.getElementById("s1").style.display = 'none';
    var x = document.createElement("P");
    var s = document.createTextNode(c1);
    x.appendChild(s);
    document.getElementById("bodyText").appendChild(x);
}
function choice2(){
    document.getElementById("s2").style.display = 'block';
    document.getElementById("s1").style.display = 'none';
    var x = document.createElement("P");
    var s = document.createTextNode(c1);
    x.appendChild(s);
    document.getElementById("bodyText").appendChild(x);
}
function choice3(){
    document.getElementById("s3").style.display = 'block';
    document.getElementById("s2").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c1,  c3);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/forest.jpg')";
    var lost = document.getElementById("countText").innerHTML;
    var lostTotal = lost.replace(26, 10);
    document.getElementById("countText").innerHTML = lostTotal;
}
function choice4(){
    document.getElementById("s4").style.display = 'block';
    document.getElementById("s2").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c1,  c4);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/hw2.jpg')";
}
function choice5(){
    document.getElementById("s5").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c3, c5);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/house2.jpg')";
}
function choice6(){
    document.getElementById("s6").style.display = 'block';
    document.getElementById("s3").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c3, c6);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/house1.jpg')";
}
function choice7(){
    document.getElementById("s7").style.display = 'block';
    document.getElementById("s4").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c4, c7);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/forest.jpg')";
}
function choice8(){
    document.getElementById("s8").style.display = 'block';
    document.getElementById("s4").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c4, c8);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/rv.jpg')";
}
function choice9(){
    document.getElementById("s9").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c5, c9);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice10(){
    document.getElementById("s10").style.display = 'block';
    document.getElementById("s5").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c5, c10);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice11(){
    document.getElementById("s11").style.display = 'block';
    document.getElementById("s6").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c6, c11);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice12(){
    document.getElementById("s12").style.display = 'block';
    document.getElementById("s6").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c6, c12);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice13(){
    document.getElementById("s13").style.display = 'block';
    document.getElementById("s7").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c7, c13);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice14(){
    document.getElementById("s14").style.display = 'block';
    document.getElementById("s7").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c7, c14);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice15(){
    document.getElementById("s18").style.display = 'block';
    document.getElementById("s8").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c8, c15);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/towm.jpg')"
}
function choice16(){
    document.getElementById("s16").style.display = 'block';
    document.getElementById("s8").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c8, c16);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/hw3.jpg')"
}
function choice17(){
    document.getElementById("s20").style.display = 'block';
    document.getElementById("s9").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c9, c17);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice18(){
    document.getElementById("s21").style.display = 'block';
    document.getElementById("s9").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c9, c18);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')";

}
function choice19(){
    document.getElementById("s22").style.display = 'block';
    document.getElementById("s10").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c10, c19);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice20(){
    document.getElementById("s23").style.display = 'block';
    document.getElementById("s10").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c10, c20);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
function choice21(){
    document.getElementById("s24").style.display = 'block';
    document.getElementById("s11").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c11, c21);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice22(){
    document.getElementById("s25").style.display = 'block';
    document.getElementById("s11").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c11, c22);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
function choice23(){
    document.getElementById("s26").style.display = 'block';
    document.getElementById("s12").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c12, c23);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice24(){
    document.getElementById("s27").style.display = 'block';
    document.getElementById("s12").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c12, c24);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
function choice25(){
    document.getElementById("s34").style.display = 'block';
    document.getElementById("s13").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace( c13, c25);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice26(){
    document.getElementById("s15").style.display = 'block';
    document.getElementById("s13").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c13, c26);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
function choice27(){
    document.getElementById("s19").style.display = 'block';
    document.getElementById("s14").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c14, c27);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice28(){
    document.getElementById("s28").style.display = 'block';
    document.getElementById("s14").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c14, c28);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
function choice29(){
    document.getElementById("s28").style.display = 'block';
    document.getElementById("s35").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c15, c29);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice30(){
    document.getElementById("s29").style.display = 'block';
    document.getElementById("s35").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c15, c30);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/strangers.jpg')";
}
function choice31(){
    document.getElementById("s30").style.display = 'block';
    document.getElementById("s28").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c29, c31);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice32(){
    document.getElementById("s31").style.display = 'block';
    document.getElementById("s28").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c29, c32);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
function choice33(){
    document.getElementById("s33").style.display = 'block';
    document.getElementById("s29").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(c29, c33);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/wm.jpg')"
}
function choice34(){
    document.getElementById("s32").style.display = 'block';
    document.getElementById("s29").style.display = 'none';
    var str = document.getElementById("bodyText").innerHTML;
    var res = str.replace(29, c34);
    document.getElementById("bodyText").innerHTML = res;
    document.body.style.backgroundImage="url('img/map.jpg')"
}
//function choice31(){
    //document.getElementById("").style.display = 'block';
    //document.getElementById("").style.display = 'none';


//    var lost = document.getElementById("countText").innerHTML;
//    var lostTotal = lost.replace(26, 10);
//   document.getElementById("countText").innerHTML = lostTotal;