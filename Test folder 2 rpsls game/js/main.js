function fight() {
    var randomChoice = Math.random();
    var threeChoice = Math.floor(randomChoice * 5);
    var choice = document.getElementsByName("choice");

    for (i = 0; i < choice.length; i++) {
        currentChoice = choice[i];

        if (currentChoice.checked) {
            var selectedChoice = currentChoice.value;
        } 
    } 
    var cpuChoice = new Array("Paper", "Rock", "Scissors", "Lizard", "Spock")
    var reply = "xxx"
    if (threeChoice === 0) {
        if (selectedChoice === "Paper") {
            reply = "It's a draw";
        }
        else if (selectedChoice === "Rock") {
            reply = "Paper covers Rock, You Loose!";
        }
        else if (selectedChoice === "Scissors") {
            reply = "Paper is shredded by Scissors, You Win!";
        }
        else if (selectedChoice === "Lizard") {
            reply = "Lizard eats paper, You Win!";
        }
        else if (selectedChoice === "Spock") {
            reply = "Paper disproves Spock, You lose!";
        }
        else {
            reply = "what1";
        }
    } else if (threeChoice === 1) {
        if (selectedChoice === "Paper") {
            reply = "Paper covers Rock, You Win!";
        }
        else if (selectedChoice === "Rock") {
            reply = "Tie, try it again!";
        }
        else if (selectedChoice === "Scissors") {
            reply = "Rock smashes Scissors, You Loose!";
        }
        else if (selectedChoice === "Lizard") {
            reply = "Rock crushes Lizard!, You Lose (eww)";
        }
        else if (selectedChoice === "Spock"){
            reply = "Spock vaporizes Rock, You Win!";
        }
        else {
            reply = "what2";
        }
    } else if (threeChoice === 2) {
        if (selectedChoice === "Paper") {
            reply = "Scissors cut paper, your screwed";
        }
        else if (selectedChoice === "Rock") {
            reply = "This is FUN!!! O yeah you won!";
        }
        else if (selectedChoice === "Scissors") {
            reply = "Its a draw, try again!";
        }
        else if (selectedChoice === "Lizard"){
            reply = "Scissors decapitates Lizard! O look at that (gag)!";
        }
        else if (selectedChoice === "Spock") {
            reply = "Spock smashes Scissors, You Win! (Cheater =p )";
        }
        else {
            reply = "what3";
        }
    } else if (threeChoice === 3){
        if (selectedChoice === "Paper") {
            reply = "Lizard Eats Paper, You lose! (HaHaHa)";
        }
        else if (selectedChoice === "Rock") {
            reply = "My Rock smashes your Puny Lizard. I win!";
        }
        else if (selectedChoice === "Scissors") {
            reply = "You decapitated my Lizard, Nooooo! You win";
        }
        else if (selectedChoice === "Lizard"){
            reply = "Lizard meets Lizard and has a baby Lizard? Call it a draw!";
        }
        else if (selectedChoice === "Spock") {
            reply = "Bwahahahaha, My Lizard poisons your Spock! Live long and prosper now! You lose!";
        }
        else {
            reply = "what4";}
    } else {
        reply = "hay now?";
    }
    var output = document.getElementById("output");
    var response = "<h2>You have chosen ";
    response += selectedChoice + "<h2>The CPU has chosen ";
    "<\/h2> \n";
    response += cpuChoice[threeChoice] + "<\/h2> \n";
    response += reply + "<\/h2> \n";
    output.innerHTML = response;
}