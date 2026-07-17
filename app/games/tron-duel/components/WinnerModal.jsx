export default function WinnerModal({
winner,
onRestart,
}) {
return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center">

    <div className="bg-zinc-950 border border-cyan-500 rounded-2xl p-10 text-center shadow-[0_0_40px_#22D3EE]">

        <h2 className="text-5xl font-black text-white">

        :trophy:

        </h2>

        <h3 className="text-3xl mt-4 text-cyan-300">

        {winner} Wins!

        </h3>

        <button
        onClick={onRestart}
        className="mt-8 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold"
        >
        Play Again
        </button>

    </div>
    </div>
);
}