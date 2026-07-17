export const BOARD_WIDTH = 30;
export const BOARD_HEIGHT = 20;

export const EMPTY = 0;
export const PLAYER1 = 1;
export const PLAYER2 = 2;

export const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};
export const GAME_STATUS = {
  WAITING: "waiting",
  COUNTDOWN: "countdown",
  PLAYING: "playing",
  ROUND_OVER: "round_over",
  MATCH_OVER: "match_over",
};