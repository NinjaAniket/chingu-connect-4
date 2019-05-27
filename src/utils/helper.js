export function checkHorizontalWinner(row, col) {
  let cells = this.state.cells;

  let i = 6;

  let value = this.state.player ? 2 : 1;

  while (i >= 3) {
    if (
      cells[row][i] === value &&
      cells[row][i - 1] === value &&
      cells[row][i - 2] === value &&
      cells[row][i - 3] === value
    ) {
      return 1;
    }
    i--;
  }
  return 0;
}
