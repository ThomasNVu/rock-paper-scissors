/*Function getComputerChoice
    Set randomNumberGenerator to Math.floor(Math.random() * 100)
    Set rng to randomNumberGenerator mod 3
    
    If rng equals 0
        Return "rock"
    Else If rng equals 1
        Return "paper"
    Else
        Return "scissors"
    End If
End Function
*/

function getComputerChoice() {
    let randomNumberGenerator = Math.floor(Math.random() * 100);
    let rNG = randomNumberGenerator % 3;

    if (rNG === 0) {
        return "Rock";
    } else if (rNG === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

/*
Init playerOption
Function getHumanChoice
    Display "Welcome to RPS: Enter Rock, Paper, or Scissors"
    Obtain playerOption
    
    Repeat
    Convert playerOption to lowercase
        If playerOption equals "rock" then
            Return "Rock"
        Else if playerOption equals "paper" then
            Return "Paper"
        Else if playerOption equals "scissors" then
            Return "Scissors"
        Else
            Display "Try Again Enter: Rock, Paper, or Scissors"
            Obtain playerOption
        End If
    Until player enters valid input    
End Function
*/

function getHumanChoice() {
    let playerOption;
    while (true) {
        playerOption = prompt('Enter: Rock, Paper, or Scissors');
        console.log(playerOption);
        if (playerOption.toLowerCase() === "rock") {
            return "Rock";
        } else if (playerOption.toLowerCase() === "paper") {
            return "Paper";
        } else if (playerOption.toLowerCase() === "scissors") {
            return "Scissors";
        } else {
            alert("Try Again Enter: Rock, Paper, or Scissors");
        }
    }
}

function playRound() {
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice; 
    let computerChoice;


    while (humanScore < 5 && computerScore < 5) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        if (humanChoice === computerChoice) {
            alert(`It's a Tie! Try Again.\nYou: ${humanScore}\nComputer: ${computerScore}`);
        } else if ((humanChoice === 'Rock' && computerChoice === 'Scissors') ||
                   (humanChoice === 'Paper' && computerChoice === 'Rock') ||
                   (humanChoice === 'Scissors' && computerChoice === 'Paper')) {
            humanScore++;
            alert(`You Win! ${humanChoice} beats ${computerChoice}.  \nYou: ${humanScore}\nComputer: ${computerScore}`);
        } else {
            computerScore++;
            alert(`You Lose! ${computerChoice} beats ${humanChoice}.  \nYou: ${humanScore}\nComputer: ${computerScore}`);
        }
    }

    if (humanScore === 5) {
        alert(`You Won the Game! \nYou: ${humanScore}\nComputer: ${computerScore}` );
    } else {
        alert(`You Lost the Game! \nYou: ${humanScore}\nComputer: ${computerScore}`);
    }
}