// import "./gameBoard.css";

import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = () => {
  const [gameBoard, setGameBord] = useState(initialGameBoard);



  const handleClick = (rowIndex, colIndex) => {
    setGameBord((prevGameBoard) => {
      const newGameBoard = [...prevGameBoard.map((row) => [...row])];
      newGameBoard[rowIndex][colIndex] = "X";
      return newGameBoard;
    }
    );
  }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map((playerSymbol, colIndex) => {
                return (
                  <li key={colIndex}>
                    <button onClick={() => handleClick(rowIndex, colIndex)}>
                      {playerSymbol}
                    </button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
};

export default GameBoard;
