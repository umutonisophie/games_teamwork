"use client";

import { useState, useEffect } from "react";

import {
  createInitialGame,
  nextGame,
  updateDirection,
} from "./logic";

import Board from "./components/Board";
import HUD from "./components/HUD";

export default function TronDuel() {
  const [game, setGame] = useState(createInitialGame());

  useEffect(() => {
    const interval = setInterval(() => {
     setGame((current) => {
  const updated = nextGame(current);
  console.log(updated.score);
  return updated;
});
    }, 220);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
 function handleKeyDown(event) {
  if (event.key === "r" || event.key === "R") {
    setGame(createInitialGame());
    return;
  }

  setGame((current) => updateDirection(current, event.key));
}

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, []);

  return (
    <main className="
min-h-screen
bg-[radial-gradient(circle_at_center,#111827_0%,#000000_70%)]
flex
flex-col
items-center
justify-center
p-6
overflow-hidden
">
      <HUD game={game} />

      <Board board={game.board} />
      {game.gameOver && (
  <div className="mt-8 text-center">
    <h2 className="text-4xl font-bold text-yellow-400">
    {game.winner} Wins!
    </h2>

    <p className="text-gray-400 mt-2">
      Press R to play again
    </p>
  </div>
)}
    </main>
  );
}
