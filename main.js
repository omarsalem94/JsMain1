// counter to know how many rounds each contenders won
let computer = 0;
let human = 0;

// Main JavaScript Project
function computerPlay() {
  let random = Math.floor(Math.random() * 3);
  let choices = ['rock', 'paper', 'scissors'];
  return choices[random];
}


let playerSelection = prompt('Play with the computer. Choose Rock, Paper or Scissors and write it down');
if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
  function playRound() {
    let victor;
   
    if (playerSelection === 'rock') {
      if (computerSelection === 'rock') {
        console.log(`That's a tie! Both chose ${playerSelection}.`);
      } else if (computerSelection === 'paper') {
        victor = 'computer';
        console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
      } else {
        victor = 'human';
        console.log(`You win!!! ${playerSelection} beats ${computerSelection}.`);
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'paper') {
        console.log(`That's a tie! Both chose ${playerSelection}.`);
      } else if (computerSelection === 'scissors') {
        victor = 'computer';
        console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
      } else {
        victor = 'human';
        console.log(`You win!!! ${playerSelection} beats ${computerSelection}.`);
      }
    } else if (playerSelection === 'scissors') {
      if (computerSelection === 'scissors') {
        console.log(`That's a tie! Both chose ${playerSelection}.`);
      } else if (computerSelection === 'rock') {
        victor = 'computer';
        console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
      } else {
        victor = 'human';
        console.log(`You win!!! ${playerSelection} beats ${computerSelection}.`);
      }
    }
    if (victor === 'human') {
      human += 1;
    } else if (victor === 'computer') {
      computer += 1;
    }
  }
  function game() {
    for(let i = 0; i < 5; i++) {
      computerSelection = computerPlay();
      playRound();
    }
    console.log(`You have played 5 rounds and won ${human} round/s!`);
  }
  game();
} else {
  alert('Enter a valid value!');
}


