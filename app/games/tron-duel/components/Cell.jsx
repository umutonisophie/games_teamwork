import {
  EMPTY,
  PLAYER1,
  PLAYER2,
} from "./constants";

export default function Cell({ value }) {
  let classes =
    "w-5 h-5 rounded-sm transition-all duration-75";

  switch (value) {
    case PLAYER1:
      classes +=
        " bg-cyan-400 shadow-[0_0_15px_#22D3EE]";
      break;

    case PLAYER2:
      classes +=
        " bg-orange-500 shadow-[0_0_15px_#F97316]";
      break;

    default:
      classes +=
        " bg-zinc-900 border border-zinc-800";
  }

  return <div className={classes}></div>;
}