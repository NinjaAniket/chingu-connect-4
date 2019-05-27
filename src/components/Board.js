import React, { Component } from "react";
import SquareGrid from "./SquareGrid";
export default class Board extends Component {
  constructor(props) {
    super(props);
    let cells = [];
    for (let i = 0; i < 6; i++) {
      cells.push(new Array(7).fill(0));
    }
    this.state = {
      cells: cells,
      player: false,
      winner: 0,
      tie: false
    };
  }

  onClickHandler = (row, col) => {
    let board = this.state.cells;
    let temp = [];

    for (let i = 0; i < 6; i++) {
      temp.push(board[i].slice());
    }

    //check for tie
    let tie = this.checkForTie(board);

    if (tie) {
      console.log("tie");
      this.setState({
        tie: true
      });
    }

    console.log("temp is" + temp);
    let emptyRow = this.rowWhereCoinBeAdded(col);
    console.log(emptyRow);
    temp[emptyRow][col] = this.state.player ? 1 : 2;
    this.setState({
      cells: temp,
      player: !this.state.player
    });
  };
  rowWhereCoinBeAdded = col => {
    for (let i = 0; i < 6; i++) {
      if (this.state.cells[i][col] === 0) {
        return i;
      }
    }
    return -1;
  };

  checkForTie = board => {
    for (let i = 0; i < board.length; i++) {
      for (let y = 0; y < board[i].length; y++) {
        if (board[i][y] === 0) {
          return false;
        }
      }
    }
    return true;
  };

  render() {
    let status;
    if (this.state.player) {
      status = (
        <div>
          <p>"Player Black's turn" </p>
        </div>
      );
    } else if (this.state.tie) {
      status = <p>Its a Tie</p>;
    } else {
      status = <p>Red turn</p>;
    }
    return (
      <div>
        <h1>{status}</h1>
        <SquareGrid
          cells={this.state.cells}
          onClickHandler={this.onClickHandler}
        />
      </div>
    );
  }
}
