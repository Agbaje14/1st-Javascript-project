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
            (humanAns === "rock" && compAns ==="scissors") || (humanAns === "scissors" && compAns === "paper") || (humanAns === "paper" && compAns === "rock")
        ){
            humanScore++;
            alert (`You win because ${humanAns} beats ${compAns}`)
        } else {
            alert (`You lose because ${compAns} beats ${humanAns}`)
            computerScore++;
        }

        alert(`Your score: ${humanScore}  computer score: ${computerScore}`)

    }

    function round1(){
    alert ("Round 1!")
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    }

    function round2(){
        alert ("Round 2!")
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function round3(){
        alert ("Round 3!")
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    function round4(){
        alert ("Round 4!")
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    function round5(){
        alert ("Round 5!")
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    round1();
    round2();
    round3();
    round4();
    round5();

    if (humanScore > computerScore){
        alert("You win the game!")
    } else {
        alert("The computer wins")
    }

    
    // playRound(humanSelection, computerSelection);
    // playRound(humanSelection, computerSelection);
    // playRound(humanSelection, computerSelection);
}

playgame();