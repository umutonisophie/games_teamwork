export default function HUD({ game }) {
  return (
    <div className="w-full max-w-6xl flex justify-between items-center mb-8 text-white">

      <div className="text-left">
        <h2 className="text-cyan-400 font-bold text-2xl">
          PLAYER 1
        </h2>

        <p className="text-zinc-400">W A S D</p>

        <div className="mt-3 text-4xl font-black text-cyan-300">
  {game.score.player1}
</div>



      </div>

      <div className="text-center">
        <h1
          className="
            text-7xl
            font-black
            tracking-[0.4em]
            text-cyan-300
            drop-shadow-[0_0_30px_#22D3EE]
          "
        >
          TRON DUEL
        </h1>

        <p className="text-zinc-500 mt-2 tracking-widest uppercase">
          Ride. Survive. Outlast.
        </p>
        <div className="mt-4 h-[2px] w-full bg-cyan-400 shadow-[0_0_15px_#22D3EE]" />
      </div>

      <div className="text-right">
        <h2 className="text-orange-400 font-bold text-2xl">
          PLAYER 2
        </h2>

        <p className="text-zinc-400">← ↑ ↓ →</p>

        <div className="mt-3 text-4xl font-black text-orange-300">
  {game.score.player2}
</div>
      </div>

    </div>
  );
}