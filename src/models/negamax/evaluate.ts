import { Board } from "../board/board";

export class Evaluate {
  score(state, depth) {
    let score = 0;
    let rows = state.rows;
    let columns = state.columns;
    let player1 = 1;
    let player2 = -1;

    if (depth == 0) {
      console.log(state.board);
    }
    if (state.currentPlayer._number == 1) {
      player1 = 1;
      player2 = -1;
    } else if (state.currentPlayer._number == -1) {
      player1 = -1;
      player2 = 1;
    }

    if(state.getWinner()._number == 1)
      score = score + 10000;

    if(state.getWinner()._number == -1)
      score = score - 10000;

    let b = state.board;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        if (b[r][c] == 0) continue;
        // don't check empty slots
        else if (b[r][c] == player1) {
          if (c == 3 && player1 == b[r][c]) {
            //middle column pieces are worth more
            score = score + 2;
          }

          if (
            c + 2 < columns &&
            player1 == b[r][c + 1] && // look right
            player1 == b[r][c + 2]
          ) {
            //player1 3 in a row horizontally
            score = score + 5;
          }

          if (c + 1 < columns && player1 == b[r][c + 1]) {
            //player1 2 in a row horizontally
            score = score + 2;
          }

          if (
            r + 2 < rows &&
            player1 == b[r + 1][c] && // look up
            player1 == b[r + 2][c]
          ) {
            //player1 3 in a row vertically
            score = score + 5;
          }

          if (r + 1 < rows && player1 == b[r + 1][c]) {
            //player1 2 in a row vertically
            score = score + 2;
          }

          if (
            r + 2 < rows &&
            c + 2 < columns &&
            player1 == b[r + 1][c + 1] && // look up & right
            player1 == b[r + 2][c + 2]
          ) {
            //player1 3 in a row diagonally
            score = score + 5;
          }

          if (r + 1 < rows && c + 1 < columns && player1 == b[r + 1][c + 1]) {
            //player1 2 in a row diagonally
            score = score + 2;
          }

          if (
            r + 2 < rows &&
            c - 2 >= 0 &&
            player1 == b[r + 1][c - 1] && // look up & left
            player1 == b[r + 2][c - 2]
          ) {
            //player1 3 in a row diagonally
            score = score + 5;
          }

          if (r + 1 < rows && c - 1 >= 0 && player1 == b[r + 1][c - 1]) {
            //player1 2 in a row diagonally
            score = score + 2;
          }
        } else if (b[r][c] == player2) {
          // we are checking a players tile
          if (c == 3 && player2 == b[r][c]) {
            //middle column pieces are worth more
            score = score - 2;
          }

          if (
            c + 2 < columns &&
            player2 == b[r][c + 1] && // look right
            player2 == b[r][c + 2]
          ) {
            //player2 3 in a row horizontally
            score = score - 5;
          }

          if (c + 1 < columns && player2 == b[r][c + 1]) {
            //player2 2 in a row horizontally
            score = score - 2;
          }

          if (
            r + 2 < rows &&
            player2 == b[r + 1][c] && // look up
            player2 == b[r + 2][c]
          ) {
            //player2 3 in a row vertically
            score = score - 5;
          }

          if (r + 1 < rows && player2 == b[r + 1][c]) {
            //player2 2 in a row vertically
            score = score - 2;
          }

          if (
            r + 2 < rows &&
            c + 2 < columns &&
            player2 == b[r + 1][c + 1] && // look up & right
            player2 == b[r + 2][c + 2]
          ) {
            //player2 3 in a row diagonally
            score = score - 5;
          }

          if (r + 1 < rows && c + 1 < columns && player2 == b[r + 1][c + 1]) {
            //player2 2 in a row diagonally
            score = score - 2;
          }

          if (
            r + 2 < rows &&
            c - 2 >= 0 &&
            player2 == b[r + 1][c - 1] && // look up & left
            player2 == b[r + 2][c - 2]
          ) {
            //player2 3 in a row diagonally
            score = score - 5;
          }

          if (r + 1 < rows && c - 1 >= 0 && player2 == b[r + 1][c - 1]) {
            //player2 2 in a row diagonally
            score = score - 2;
          }
        }
      }
    }
    return score / depth;
  }
}
