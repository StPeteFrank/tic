const main = () => {
  document.querySelector('h1').textContent += '?'
}
// How to play tic tac toe
// The game must be two players
// Decide who will be Player X
// Decide who will be Player O
// Create a nine box grid with space to mark the boxes
// To win player will need to have three boxes marked in a horizontal, vertical, or diagonal line
// Cannot win by having a line that is not  horizontal, vertical, or diagonal
// Players cannot mark closed boxes
// Determine where the possible winning lines are

// The game board is a square made up of nine squares stacked 3 wide and 3 high
// A win is defined by a player occupying every space in a row, column, or diagonal

// Possible wins for player X
// Rows:
// The first row is comprised of spaces 1, 2, 3
// The second row is comprised of spaces 4, 5, 6
// The third row is comprised of spaces 7,8,9
// Columns:
// The first column is comprised of spaces 1,4,7
// The second column is comprised of spaces 2,5,8
// The third column is comprised of spaces 3,6,9
// Diagonals:
// The first diagonal is comprised of spaces 1,5,9
// The second diagonal is comprised of spaces 3,5,7

// Possible wins for player X
// Rows:
// The first row is comprised of spaces 1, 2, 3
// The second row is comprised of spaces 4, 5, 6
// The third row is comprised of spaces 7,8,9
// Columns:
// The first column is comprised of spaces 1,4,7
// The second column is comprised of spaces 2,5,8
// The third column is comprised of spaces 3,6,9
// Diagonals:
// The first diagonal is comprised of spaces 1,5,9
// The second diagonal is comprised of spaces 3,5,7

// Remember which player marked which box
// Determine if there is a winner or if the game is a tie
// If someone wins decide on playing again
// Give option to keep score

document.addEventListener('DOMContentLoaded', main)
