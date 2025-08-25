console.log("Hello, World!");

function getcomputerchoice(){
    const randomNum = Math.floor(Math.random()*3);
    
    if (randomNum === 0){
        return "rock";
    }
    else if (randomNum === 1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

console.log(getcomputerchoice());

function getHumanChoice(){
    let userinput = prompt("Enter your choice (rock, paper, scissors): ");

    return userinput;
}

console.log(getHumanChoice());



function playgame(){

    let userScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getcomputerchoice().toLowerCase();

        if (humanChoice === computerChoice){
            userScore += 0;
            computerScore += 0;
            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so it's a tie! score: you: ${userScore} computer: ${computerScore}`);
            console.log("It's a tie!");
            return "It's a tie!";
        }
        else if(humanChoice === "rock" && computerChoice === "scissors"){

            userScore += 1;
            computerScore += 0;

            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so you win because Rock beats Scissors! score: you: ${userScore} computer: ${computerScore}`);

            console.log("rock beats scissors");
            
            return "You win! Rock beats Scissors";
        }
        else if(humanChoice === "paper" && computerChoice === "rock"){

            userScore += 1;
            computerScore += 0;

            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so you win because Paper beats Rock!`);

            console.log("paper beats rock");

            return "You win! Paper beats Rock";
        }
        else if(humanChoice === "scissors" && computerChoice === "paper"){

            userScore += 1;
            computerScore += 0;

            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so you win because Scissors beats Paper!`);

            console.log("scissors beats paper");

            return "You win! Scissors beats Paper";
        }
        else if(humanChoice === "rock" && computerChoice === "paper"){

            userScore += 0;
            computerScore += 1;

            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so you lose because Paper beats Rock!`);

            console.log("paper beats rock");

            return "You lose! Paper beats Rock";
        }
        else if(humanChoice === "paper" && computerChoice === "scissors"){

            userScore += 0;
            computerScore += 1;

            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so you lose because Scissors beats Paper!`);

            console.log("scissors beats paper");

            return "You lose! Scissors beats Paper";
        }
        else if(humanChoice === "scissors" && computerChoice === "rock"){

            userScore += 0;
            computerScore += 1;

            alert(`computer chose ${computerChoice} and you chose ${humanChoice} so you lose because Rock beats Scissors!`);

            console.log("rock beats scissors");
            
            return "You lose! Rock beats Scissors";
        }
        else{

            return "Invalid input! Please enter rock, paper, or scissors.";
        }

    }

    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (userScore > computerScore){
        alert(`Final score: you: ${userScore} computer: ${computerScore}`);
        return "You win the game!";
    }
    else if (userScore < computerScore){
        alert(`Final score: you: ${userScore} computer: ${computerScore}`);
        return "You lose the game!";
    }
    else{
        alert(`Final score: you: ${userScore} computer: ${computerScore}`);
        return "The game is a tie!";
    }

    
}


console.log(playgame());