import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John"
    }
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Mark" } });
  };

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
}

export default App;
