import { useContext } from "react";
import { GameContext } from "./context";
import Home from "./components/pages/Home";
import Game from "./components/pages/Game";

function App() {

  const {state}=useContext(GameContext)

  if (state.level === 0) {
    return <Home />;
  } else {
    return <Game />;
  }
}

export default App;
