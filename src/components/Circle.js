import React from "react";

const Circle = ({ cell }) => {
  let color = "#182C61";
  if (cell === 1) {
    color = "#f46b45";
  } else if (cell === 2) {
    color = "#00d2d3";
  }

  var style = {
    backgroundColor: color
  };

  return <div className="circle" style={style} />;
};

export default Circle;
