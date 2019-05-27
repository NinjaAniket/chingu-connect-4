import React from "react";
import Circle from "./Circle";

const Cells = props => {
  var style = {
    height: 50,
    width: 50,
    border: "1px solid black",
    backgroundColor: "yellow"
  };

  return (
    <div
      style={style}
      onClick={() => props.onClickHandler(props.row, props.col)}
    >
      <Circle cell={props.cell} />
    </div>
  );
};

export default Cells;
