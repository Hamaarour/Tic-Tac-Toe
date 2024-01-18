import "./index.css";

import GameBoard from "./components/GameBoard";
import { Header } from "./components/Header";
import { Player } from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  const handlePlayerChange = () => {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === 'X' ? 'O' : 'X';
    });
  };
  
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
      Logs
    </main>
  );
}

export default App;
