import React from "react";
import Circle from "./Circle";

const Cells = props => {
  return (
    <div
      className="squareGrid"
      onClick={() => props.onClickHandler(props.row, props.col)}
    >
      <Circle cell={props.cell} />
    </div>
  );
};

export default Cells;
