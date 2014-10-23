function fight() {
    var randomChoice = Math.random();
    var threeChoice = Math.floor(randomChoice * 5);
    var weapon = document.getElementsByName("weapon");

    for (i = 0; i < weapon.length; i++) {
        currentWeapon = weapon[i];

        if (currentWeapon.checked) {
            var selectedWeapon = currentWeapon.value;
        } 
    } 
    var cpuChoice = new Array("Paper", "Rock", "Scissors", "Lizard", "Spock")
    var reply = "xxx"
    if (threeChoice === 0) {
        if (selectedWeapon === "Paper") {
            reply = "It's a draw";
        }
        else if (selectedWeapon === "Rock") {
            reply = "Paper covers Rock, You Loose!";
        }
        else if (selectedWeapon === "Scissors") {
            reply = "Paper is shredded by Scissors, You Win!";
        }
        else if (selectedWeapon === "Lizard") {
            reply = "Lizard eats paper, You Win!";
        }
        else if (selectedWeapon === "Spock") {
            reply = "Paper disproves Spock, You lose!";
        }
        else {
            reply = "what1";
        }
    } else if (threeChoice === 1) {
        if (selectedWeapon === "Paper") {
            reply = "Paper covers Rock, You Win!";
        }
        else if (selectedWeapon === "Rock") {
            reply = "Tie, try it again!";
        }
        else if (selectedWeapon === "Scissors") {
            reply = "Rock smashes Scissors, You Loose!";
        }
        else if (selectedWeapon === "Lizard") {
            reply = "Rock crushes Lizard!, You Lose (eww)";
        }
        else if (selectedWeapon === "Spock"){
            reply = "Spock vaporizes Rock, You Win!";
        }
        else {
            reply = "what2";
        }
    } else if (threeChoice === 2) {
        if (selectedWeapon === "Paper") {
            reply = "Scissors cut paper, your screwed";
        }
        else if (selectedWeapon === "Rock") {
            reply = "This is FUN!!! O yeah you won!";
        }
        else if (selectedWeapon === "Scissors") {
            reply = "Its a draw, try again!";
        }
        else if (selectedWeapon === "Lizard"){
            reply = "Scissors decapitates Lizard! O look at that (gag)!";
        }
        else if (selectedWeapon === "Spock") {
            reply = "Spock smashes Scissors, You Win! (Cheater =p )";
        }
        else {
            reply = "what3";
        }
    } else if (threeChoice === 3){
        if (selectedWeapon === "Paper") {
            reply = "Lizard Eats Paper, You lose! (HaHaHa)";
        }
        else if (selectedWeapon === "Rock") {
            reply = "My Rock smashes your Puny Lizard. I win!";
        }
        else if (selectedWeapon === "Scissors") {
            reply = "Its a draw, try again!";
        }
        else if (selectedWeapon === "Lizard"){
            reply = "Scissors decapitates Lizard! O look at that (gag)!";
        }
        else if (selectedWeapon === "Spock") {
            reply = "Spock smashes Scissors, You Win! (Cheater =p )";
        }
        else {
            reply = "what4";}
    } else {
        reply = "hay now?";
    }
    var output = document.getElementById("output");
    var response = "<h2>You have chosen ";
    response += selectedWeapon + "<h2>The CPU has chosen ";
    "<\/h2> \n";
    response += cpuChoice[threeChoice] + "<\/h2> \n";
    response += reply + "<\/h2> \n";
    output.innerHTML = response;
} // end function
//]]>