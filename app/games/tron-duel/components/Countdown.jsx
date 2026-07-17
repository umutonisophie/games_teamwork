export default function Countdown({ number }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

      <h1 className="text-9xl font-black text-cyan-400 animate-pulse drop-shadow-[0_0_35px_#22D3EE]">

        {number}

      </h1>

    </div>
  );
}