var choices  =  {rock : {name: "Rock", defeats: ["scissors","lizard"]},
                 paper: {name: "Paper", defeats: ["rock", "spock"]},
                 scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
                 lizard: {name: "Lizard", defeats:["paper","spock"]},
                 spock: {name: "Spock", defeats:["scissors","rock"]}
                };


var computerChoice = Math.random();
if (computerChoice < 0.2) {
    computerChoice = "rock";
} else if (computerChoice <= 0.4) {
    computerChoice = "paper";
} else if (computerChoice <= 0.6) {
    computerChoice = "scissors";
} else if (computerChoice <= 0.8) {
    computerChoice = "lizard";
} else {
    computerChoice = "spock";
}


var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or spock?").toLowerCase();

alert("The computer chose " + computerChoice);



if(computerChoice == userChoice){
    alert("It's a tie");
}else if(choices[userChoice] === undefined){
    alert("Invalid Choice");
}else{
    userChoice = choices[userChoice];
    
    var victory = userChoice.defeats.indexOf(computerChoice) > -1;
    
    if(victory) {
        alert("Vitory! " + userChoice.name + " wins!")
    }else{
        alert("Defeat, " + computerChoice + " wins!");
    }   
}
    
