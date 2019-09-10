import React from "react";
import Square from "./Square";
import calculateWinner from "../api/calculateWinner";

function Board() {
  const [state, setState] = React.useState({
    squares: Array(9).fill(null),
    xIsNext: true
  });

  function handleClick(index) {
    if (state.squares[index] || calculateWinner(state.squares)) {
      return;
    }
    const squaresCopy = state.squares.slice();
    squaresCopy[index] = state.xIsNext ? "X" : "O";
    setState({
      squares: squaresCopy,
      xIsNext: !state.xIsNext
    });

    // const winner = calculateWinner(squaresCopy);
    // if (winner) {
    //   alert("Congratulations " + winner);
    //   setState({
    //     squares: Array(9).fill(null),
    //     xIsNext: true
    //   });
    // }
  }

  function renderSquare(index) {
    return (
      <Square value={state.squares[index]} onClick={() => handleClick(index)} />
    );
  }

  const winner = calculateWinner(state.squares);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${state.xIsNext ? "X" : "O"}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
