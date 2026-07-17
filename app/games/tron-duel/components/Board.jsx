import Cell from "./Cell";

export default function Board({ board }) {
  return (
    <div
      className="
        relative
        p-6
        rounded-2xl
        border-2
        border-cyan-400
        bg-gradient-to-b
        from-black
        via-zinc-950
        to-black
      animate-pulse
shadow-[0_0_45px_#22D3EE]
      "
    >
      <div
        className="grid gap-[1px]"
        style={{
          gridTemplateColumns: `repeat(${board[0].length}, 20px)`,
        }}
      >
        {board.flat().map((cell, index) => (
          <Cell key={index} value={cell} />
        ))}
      </div>
    </div>
  );
}