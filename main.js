// Main JavaScript Project


// counters to know how many rounds each contenders won
let computer = 0;
let human = 0;

let choices = ['rock', 'paper', 'scissors'];



// a function to randomly make the computer choose a value
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  return choices[random];
}

// Here we ask the user if he wants to play or not
let playerResponse = confirm('Do you want to play?');

// based on the user's response we either start the game or don't
if (playerResponse) {

  //  In this function we compare the values of both the user and computer and then determine a winner
  function playRound() {
    let victor;
    let playerSelection = prompt('Play with the computer. Choose Rock, Paper or Scissors and write it down').toLowerCase();
    if (!choices.includes(playerSelection)) {
      alert('Wrong input!');
      return playRound();
    } else if (playerSelection === computerSelection) {
      console.log(`That's a tie! Both chose ${playerSelection}.`);
    } else if (
      playerSelection === 'rock' && computerSelection === 'scissors' || 
      playerSelection === 'scissors' && computerSelection === 'paper' || 
      playerSelection === 'paper' && computerSelection === 'rock'
      ) {
      victor = 'human';
      console.log(`You win!!! ${playerSelection} beats ${computerSelection}.`);
    } else {
      victor = 'computer';
      console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
    }
    // Here we keep track of how many times the user have won
    if (victor === 'human') {
      human += 1;
    } else if (victor === 'computer') {
      computer += 1;
    }
  }
  // This function makes you play for 5 rounds as per requirements and then logs the results
  function game() {
    for (let i = 0; i < 5; i++) {
      computerSelection = computerPlay();
      playRound();
    }
    console.log(`You have played 5 rounds and won ${human} round/s!`);
    if (human > computer) {
      alert('You won!!');
    } else if (human === computer) {
      alert('draw!');
    } else {
      alert('Computer Won');
    }
  }
  game();
} else {
  alert('Ok so no game then :/');
}


