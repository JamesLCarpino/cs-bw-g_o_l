import React, { useState, useEffect } from "react";
import Grid from "./Grid";
import Canvas from "./Canvas";

// newGame = {
//   gridSize: 25,
//   cellSize: 10,
//   cellLife: Array(25 * 25),
// };

const Main = (props) => {
  //const [grid, setGrid] = useState(newGame);
  const [generations, setGenerations] = useState(0);
  const [isWorking, setIsWorking] = useState(false);

  return (
    <div>
      <h1>Conway's Game of Life</h1>

      <Canvas />

      {/* <Grid generations={generations} /> */}
      <h2>Life generations: {generations}</h2>
    </div>
  );
};

export default Main;
