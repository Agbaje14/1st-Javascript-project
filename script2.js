console.log("Hello World!")

function getComputerChoice(){
   const randomAns = Math.random();

    if (randomAns < 0.33){
        return "scissors"
    } else if(randomAns < 0.66){
        return "rock"
    } else {
        return "paper"
    }
}

console.log(getComputerChoice());

alert("Welcome to the Rock, Paper, Scissors Game!");

alert("Round 1")

function getHumanChoice(){
    let userInput = prompt("Enter your choice(Rock, Paper or Scissors))")

    return userInput
}

console.log (getHumanChoice());



function playgame(){

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){

        let humanAns = humanChoice.toLowerCase();
        let compAns = computerChoice.toLowerCase();

        if (humanAns === compAns){
            alert(`You and the computer both chose ${compAns} so its a tie!`)
        } else if (
            (humanAns === "rock" && compAns ==="scissors") || (humanAns === "scissors" && compAns === "paper") || (humanAns === "paper" & compAns === "rock")
        ){
            humanScore++;
            alert (`You win because ${humanAns} beats ${compAns}`)
        } else {
            alert (`You lose because ${compAns} beats ${humanAns}`)
        }

        alert(`Your score: ${humanScore}  computer score: ${computerScore}`)

    }

    const humanSelection = getComputerChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
}