const main = () => {
  document.querySelector('h1').textContent
}
// How to play tic tac toe

// The game must be two players
// Decide who will be Player X
// Decide who will be Player O

// The game board is a square made up of nine squares called spaces
// The spaces are arranged in three rows
// The first row has spaces 1 through 3 and are numbered left to right
// The second row has spaces 4 through 6 and are numbered left to right
// The first row has spaces 7 through 9 and are numbered left to right

// Determine what combinations of spaces will result in a win:

// Possible wins for Player X:

// let spaces = {
//   spaceOne: 'open',
//   spaceTwo: 'open',
//   spaceThree: 'open',
//   spaceFour: 'open',
//   spaceFive: 'open',
//   spaceSix: 'open',
//   spaceSeven: 'open',
//   spaceEight: 'open',
//   spaceNine: 'open',
// }

let playerOne = true

const alternatePlayers = () => {
  if (playerOne) {
    console.log(button)
    this.textContent = 'X'
  }
}

const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    playerOne ? button.textContent = 'O' : button.textContent = 'X'
    playerOne ? playerOne = false : playerOne = true
    button.setAttribute('disabled', 'disabled')
  })
})

let spaces = {
  spaceOne: 'X',
  spaceTwo: 'O',
  spaceThree: 'O',
  spaceFour: 'open',
  spaceFive: 'X',
  spaceSix: 'open',
  spaceSeven: 'O',
  spaceEight: 'open',
  spaceNine: 'X'
}

const checkWins = (player) => {
  if (spaces.spaceOne === player && spaces.spaceTwo === player && spaces.spaceThree === player) {
    return player
  } else if (spaces.spaceFour === player && spaces.spaceFive === player && spaces.spaceSix === player) {
    return player
  } else if (spaces.spaceSeven === player && spaces.spaceEight === player && spaces.spaceNine === player) {
    return player
  } else if (spaces.spaceOne === player && spaces.spaceFour === player && spaces.spaceSeven === player) {
    return player
  } else if (spaces.spaceTwo === player && spaces.spaceFive === player && spaces.spaceEight === player) {
    return player
  } else if (spaces.spaceThree === player && spaces.spaceSix === player && spaces.spaceNine === player) {
    return player
  } else if (spaces.spaceOne === player && spaces.spaceFive === player && spaces.spaceNine === player) {
    return player
  } else if (spaces.spaceThree === player && spaces.spaceFive === player && spaces.spaceSeven === player) {
    return player
  }
}

console.log(checkWins('X'))

// if space 1 is an X and space 2 is an X and space 3 is an X: X wins
// if space 4 is an X and space 5 is an X and space 6 is an X: X wins
// if space 7 is an X and space 8 is an X and space 9 is an X: X wins
// if space 1 is an X and space 4 is an X and space 7 is an X: X wins
// if space 2 is an X and space 5 is an X and space 8 is an X: X wins
// if space 3 is an X and space 6 is an X and space 9 is an X: X wins
// if space 1 is an X and space 5 is an X and space 9 is an X: X wins
// if space 3 is an X and space 5 is an X and space 7 is an X: X wins

// Possible wins for Player O:

// if space 1 is an O and space 2 is an O and space 3 is an O: O wins
// if space 4 is an O and space 5 is an O and space 6 is an O: O wins
// if space 7 is an O and space 8 is an O and space 9 is an O: O wins
// if space 1 is an O and space 4 is an O and space 7 is an O: O wins
// if space 2 is an O and space 5 is an O and space 8 is an O: O wins
// if space 3 is an O and space 6 is an O and space 9 is an O: O wins
// if space 1 is an O and space 5 is an O and space 9 is an O: O wins
// if space 3 is an O and space 5 is an O and space 7 is an O: O wins

// Players can now begin to chose spaces
// Player X chooses a space
// Player O chooses a space
// Remember which player marked which space
// Players cannot choose spaces that have been chosen previously
// Players alternate moves until one of the possible win conditions is met
// A winner is determined if one of the win conditions is met
// If all spaces are chosen and none of the possible win conditions are met the game results in a tie
// If a winner is determined or game results in a tie the game is over
// The players can chose to play again if they wish
// Players may keep score if they wish

document.addEventListener('DOMContentLoaded', main)