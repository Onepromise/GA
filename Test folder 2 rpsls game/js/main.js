$(function() {
    $("#radio").buttonset();
});

function fight() {
    var randomChoice = Math.random();
    var threeChoice = Math.floor(randomChoice * 4);
    var weapon = document.getElementsByName("weapon");

    for (i = 0; i < weapon.length; i++) {
        currentWeapon = weapon[i];

        if (currentWeapon.checked) {
            var selectedWeapon = currentWeapon.value;
        } // end if
    } // end for
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
            reply = "Lizard eats paper, You Lose!";
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
        else {
            reply = "what2";
        }
    } else if (threeChoice === 2) {
        if (selectedWeapon === "Paper") {
            reply = "Scissors cut paper, your screwed";
        }
        else if (selectedWeapon === "Rock") {
            reply = "I can't believe Promise wrote a video game! oh and you won...";
        }
        else if (selectedWeapon === "Scissors") {
            reply = "Oh no, not again!";
        }
        else {
            reply = "what3";
        }
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