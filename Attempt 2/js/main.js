var userChoice ="rock";
var computerChoice = "scissors";

var userWins = ["rockscissors", "paperrock", "scissorspaper"];
var computerWins=["rockpaper", "paperscissors", "scissorsrock"];

var choices = ["rock", "paper", "scissors"];

computerChoice = choices[math.random()*choices.length]; 

function evaluate(){
	if(userChoice==computerChoice){
		alert('tie!');
	} else{
		var outCome = userChoice + computerChoice;

		$.each(userWins, function(index,value) {
		if(outcome==value){
			alert("You Win!");
		} else{
		  	alert ="You Lose!";
		}
	});
	}
}

evaluate();
