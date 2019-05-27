import React from "react";
import styled, { keyframes } from "styled-components";

const Circle = ({ cell }) => {
  let color = "#182C61";
  if (cell === 1) {
    color = "#f46b45";
  } else if (cell === 2) {
    color = "#00d2d3";
  }
  const addCoin = keyframes`
      from {transform: translateY(-500px);}
  to {transform: translateY(0px);
  }`;

  const Bar = styled.div`
    animation: ${addCoin} 0.3s;
    animation-iteration-count: 1;
    border: 6px solid black;
  `;

  var style = {
    backgroundColor: color
  };

  return <div className="circle" style={style} />;
};

export default Circle;
