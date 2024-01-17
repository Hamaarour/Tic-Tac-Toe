import "./index.css";

import { Header } from "./components/Header";
import { Player } from "./components/Player";

function App() {
  return (
    <main>
      <Header />
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="O" />
        </ol>
        Game Bored
      </div>
      Logs
    </main>
  );
}

export default App;
