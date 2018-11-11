const main = () => {
  document.querySelector('h1').textContent
}

// NOTES -------------------------------------------------------------------------

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

// END NOTES -------------------------------------------------------------------------

// sets 1st player to either X or O - true is O, false is X 
let playerOne = false

// querySelectorAll makes an array-like object for each button
// forEach statement attaches an event handler to each of those
// (gavin didn't cover this, just saves having to attach the event individually)
document.querySelectorAll('.playButton').forEach(button => {
  button.addEventListener('click', () => {
    let currentPlayer
    // this checks the status of playerOne and if true - 
    // sets the value of current player to O
    // if false, sets if to X
    playerOne ? currentPlayer = 'O' : currentPlayer = 'X'
    // changes the value of currentPlayer so it alternates
    playerOne ? playerOne = false : playerOne = true
    // sets the text of the chosen button to value of currentPlayer (X or O)
    button.textContent = currentPlayer
    // sets the "disabled" property of the chosen button to "disabled" so 
    // it can only get picked once
    button.setAttribute('disabled', 'disabled')
    // sets the value of the chosen object in the spaces object (see below)
    // from open to the value of currentPlayer (X or O)
    // targets this from alt tags I put on each button in index.html
    spaces[button.getAttribute('alt')] = currentPlayer
    // currently all this does is count the amount of spaces that are set to "open"
    // eventually it will use this to say the game is a draw when that number reaches 0
    checkIfBoardIsFull()
    console.log(checkWins(currentPlayer))
  })
})

// NOTES -------------------------------------------------------------------------
// for each click, the corresponding space to the chosen one must be set to 
// the currentPlayer at the time it was clicked

// the checkWins function is run and passed the currentPlayer variable 
// which checks the current state of spaces for a matching pattern

// a new line has to be added to checkWins to check if all spaces are full to 
// declare a draw
//  END NOTES -------------------------------------------------------------------------

// this stores the current state of the spaces
// whether the space is open, X or O

let spaces = {
  spaceOne: 'open',
  spaceTwo: 'open',
  spaceThree: 'open',
  spaceFour: 'open',
  spaceFive: 'open',
  spaceSix: 'open',
  spaceSeven: 'open',
  spaceEight: 'open',
  spaceNine: 'open'
}
// this counts the open spaces in the board
const checkIfBoardIsFull = () => {
  // this counts the all the spaces that have been disabled
  let leftovers = document.querySelectorAll('.playButton[disabled]').length
  if (leftovers >= 9) {
    console.log('draw')
  }

  // console.log(lef5tOverSpaces)
  // this will eventually run thru another statement that will declare a draw when that
  // count is 0
  // }
  // }
}

const closeBoard = () => {
  document.querySelectorAll('.playButton').forEach(button => button.setAttribute('disabled', 'disabled'))
}

// logic for determining winning spaces
const checkWins = (player) => {
  if (spaces.spaceOne === player && spaces.spaceTwo === player && spaces.spaceThree === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceFour === player && spaces.spaceFive === player && spaces.spaceSix === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceSeven === player && spaces.spaceEight === player && spaces.spaceNine === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceOne === player && spaces.spaceFour === player && spaces.spaceSeven === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceTwo === player && spaces.spaceFive === player && spaces.spaceEight === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceThree === player && spaces.spaceSix === player && spaces.spaceNine === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceOne === player && spaces.spaceFive === player && spaces.spaceNine === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  } else if (spaces.spaceThree === player && spaces.spaceFive === player && spaces.spaceSeven === player) {
    closeBoard()
    console.log(`${player} wins!`)
    return player
  }
}
// NOTES -------------------------------------------------------------------------

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
// END NOTES -------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', main)