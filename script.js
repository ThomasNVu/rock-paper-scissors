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