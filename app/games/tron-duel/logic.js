import {
  BOARD_HEIGHT,
  BOARD_WIDTH,
  EMPTY,
  PLAYER1,
  PLAYER2,
  DIRECTIONS,
} from "./constants";

export function createBoard() {
  return Array.from(
    { length: BOARD_HEIGHT },
    () => Array(BOARD_WIDTH).fill(EMPTY)
  );
}

export function createInitialGame() {
  const board = createBoard();

  const player1 = {
    x: 4,
    y: Math.floor(BOARD_HEIGHT / 2),
    direction: DIRECTIONS.RIGHT,
  };

  const player2 = {
    x: BOARD_WIDTH - 5,
    y: Math.floor(BOARD_HEIGHT / 2),
    direction: DIRECTIONS.LEFT,
  };

  board[player1.y][player1.x] = PLAYER1;
  board[player2.y][player2.x] = PLAYER2;

  return {
    board,
    player1,
    player2,
    score: {
      player1: 0,
      player2: 0,
    },
    winner: null,
    gameOver: false,
  };
}

export function movePlayer(player) {
  return {
    ...player,
    x: player.x + player.direction.x,
    y: player.y + player.direction.y,
  };
}
export function updatePlayerDirection(player, direction) {
  // Prevent reversing directly into yourself
  if (
    (player.direction === DIRECTIONS.UP && direction === DIRECTIONS.DOWN) ||
    (player.direction === DIRECTIONS.DOWN && direction === DIRECTIONS.UP) ||
    (player.direction === DIRECTIONS.LEFT && direction === DIRECTIONS.RIGHT) ||
    (player.direction === DIRECTIONS.RIGHT && direction === DIRECTIONS.LEFT)
  ) {
    return player;
  }

  return {
    ...player,
    direction,
  };
}

export function updateDirection(game, key) {
  let player1 = game.player1;
  let player2 = game.player2;

  switch (key) {
    // Player 1
    case "w":
    case "W":
      player1 = updatePlayerDirection(player1, DIRECTIONS.UP);
      break;

    case "s":
    case "S":
      player1 = updatePlayerDirection(player1, DIRECTIONS.DOWN);
      break;

    case "a":
    case "A":
      player1 = updatePlayerDirection(player1, DIRECTIONS.LEFT);
      break;

    case "d":
    case "D":
      player1 = updatePlayerDirection(player1, DIRECTIONS.RIGHT);
      break;

    // Player 2
    case "ArrowUp":
      player2 = updatePlayerDirection(player2, DIRECTIONS.UP);
      break;

    case "ArrowDown":
      player2 = updatePlayerDirection(player2, DIRECTIONS.DOWN);
      break;

    case "ArrowLeft":
      player2 = updatePlayerDirection(player2, DIRECTIONS.LEFT);
      break;

    case "ArrowRight":
      player2 = updatePlayerDirection(player2, DIRECTIONS.RIGHT);
      break;

    default:
      return game;
  }

  return {
    ...game,
    player1,
    player2,
  };
}
export function nextGame(game) {
  if (game.gameOver) {
    return game;
  }

  const board = game.board.map((row) => [...row]);

  const player1 = movePlayer(game.player1);
  const player2 = movePlayer(game.player2);

  // ---- Wall Collision ----
  if (
    player1.x < 0 ||
    player1.x >= BOARD_WIDTH ||
    player1.y < 0 ||
    player1.y >= BOARD_HEIGHT
  ) {
    console.log("PLAYER 2 SHOULD SCORE", game.score);
   return {
  ...game,
  gameOver: true,
  winner: "Player 2",
  score: {
    ...game.score,
    player2: game.score.player2 + 1,
  },
};
  }

  if (
    player2.x < 0 ||
    player2.x >= BOARD_WIDTH ||
    player2.y < 0 ||
    player2.y >= BOARD_HEIGHT
  ) {
    return {
  ...game,
  gameOver: true,
  winner: "Player 1",
  score: {
    ...game.score,
    player1: game.score.player1 + 1,
  },
};
  }

  // ---- Trail Collision ----
  if (board[player1.y][player1.x] !== EMPTY) {
    return {
  ...game,
  gameOver: true,
  winner: "Player 1",
  score: {
    ...game.score,
    player1: game.score.player1 + 1,
    
  },
};
  }

  if (board[player2.y][player2.x] !== EMPTY) {
   return {
  ...game,
  gameOver: true,
  winner: "Player 1",
  score: {
    ...game.score,
    player1: game.score.player1 + 1,
  },
};
  }

  // Draw trails
  board[player1.y][player1.x] = PLAYER1;
  board[player2.y][player2.x] = PLAYER2;

  return {
    ...game,
    board,
    player1,
    player2,
  };
}