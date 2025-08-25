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

    const humanSelection = getComputerChoice();
    const computerSelection = getComputerChoice();

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

    function round2(){
        alert ("Round 2!")
        playRound(humanSelection, computerSelection);
    }
    function round3(){
        alert ("Round 3!")
        playRound(humanSelection, computerSelection);
    }
    function round4(){
        alert ("Round 4!")
        playRound(humanSelection, computerSelection);
    }
    function round5(){
        alert ("Round 5!")
        playRound(humanSelection, computerSelection);
    }

    round2();
    round3();
    round4();
    round5();

    
    // playRound(humanSelection, computerSelection);
    // playRound(humanSelection, computerSelection);
    // playRound(humanSelection, computerSelection);
}

playgame();