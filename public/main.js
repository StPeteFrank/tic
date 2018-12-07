const main = () => {
  document.querySelector('h1').textContent
}
let playerOne = false

document.querySelector('.reset-button').addEventListener('click', () => {
  document.querySelectorAll('.playButton').forEach(button => {
    button.innerHTML = '&nbsp;'
    button.removeAttribute('disabled')
    document.querySelector('.win-status').textContent = ''
    playerOne = false
    for (let prop in spaces) {
      spaces[prop] = 'open'
    }
  })
})

// querySelectorAll makes an array-like object for each button
// forEach statement attaches an event handler to each of those
// (gavin didn't cover this, just saves having to attach the event individually)
document.querySelectorAll('.playButton').forEach(button => {
  button.addEventListener('click', () => {
    let currentPlayer
    // this checks the status of playerOne and if true -
    // sets the value of current player to O
    // if false, sets if to X
    playerOne ? (currentPlayer = 'O') : (currentPlayer = 'X')
    // changes the value of currentPlayer so it alternates
    playerOne ? (playerOne = false) : (playerOne = true)
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
    checkWins(currentPlayer)
  })
})

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
    document.querySelector('.win-status').textContent = `Draw!`
  }
}

const closeBoard = player => {
  document.querySelector('.win-status').textContent = `${player} wins!`
  document
    .querySelectorAll('.playButton')
    .forEach(button => button.setAttribute('disabled', 'disabled'))
}

// logic for determining winning spaces
const checkWins = player => {
  if (
    spaces.spaceOne === player &&
    spaces.spaceTwo === player &&
    spaces.spaceThree === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceFour === player &&
    spaces.spaceFive === player &&
    spaces.spaceSix === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceSeven === player &&
    spaces.spaceEight === player &&
    spaces.spaceNine === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceOne === player &&
    spaces.spaceFour === player &&
    spaces.spaceSeven === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceTwo === player &&
    spaces.spaceFive === player &&
    spaces.spaceEight === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceThree === player &&
    spaces.spaceSix === player &&
    spaces.spaceNine === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceOne === player &&
    spaces.spaceFive === player &&
    spaces.spaceNine === player
  ) {
    closeBoard(player)
  } else if (
    spaces.spaceThree === player &&
    spaces.spaceFive === player &&
    spaces.spaceSeven === player
  ) {
    closeBoard(player)
  }
}

document.addEventListener('DOMContentLoaded', main)
