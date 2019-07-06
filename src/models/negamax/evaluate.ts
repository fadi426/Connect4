import { Board } from "../board/board";

export class Evaluate {
  score(state, depth) {
    let SCORE = 0;
    let HEIGHT = state.rows;
    let WIDTH = state.columns;
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

    // if(state.getWinner()._number == 1)
    //   SCORE = SCORE + 10;

    // if(state.getWinner()._number == -1){
    //   SCORE = SCORE - 10;
    //   if(depth == 1){
    //     let jugh = 1;
    //   }
    // }

    // return SCORE/depth;
    let b = state.board;
    for (let r = 0; r < HEIGHT; r++) {
      // iterate rows, bottom to top
      for (let c = 0; c < WIDTH; c++) {
        // iterate columns, left to right
        if (b[r][c] == 0) continue;
        // don't check empty slots
        else if (b[r][c] == player1) {
          // we are checking a computers tile
          if (c == 3 && player1 == b[r][c]) {
            //middle column pieces are worth more
            SCORE = SCORE + 2;
          }

          if (
            c + 3 < WIDTH &&
            player1 == b[r][c + 1] && // look right
            player1 == b[r][c + 2] &&
            player1 == b[r][c + 3]
          ) {
            //player1 4 in a row horizontally
            SCORE = SCORE + 10000;
          }

          if (
            c + 2 < WIDTH &&
            player1 == b[r][c + 1] && // look right
            player1 == b[r][c + 2]
          ) {
            //player1 3 in a row horizontally
            SCORE = SCORE + 5;
          }

          if (c + 1 < WIDTH && player1 == b[r][c + 1]) {
            //player1 2 in a row horizontally
            SCORE = SCORE + 2;
          }

          if (
            r + 3 < HEIGHT &&
            player1 == b[r + 1][c] && // look up
            player1 == b[r + 2][c] &&
            player1 == b[r + 3][c]
          ) {
            //player1 4 in a row vertically
            SCORE = SCORE + 10000;
          }

          if (
            r + 2 < HEIGHT &&
            player1 == b[r + 1][c] && // look up
            player1 == b[r + 2][c]
          ) {
            //player1 3 in a row vertically
            SCORE = SCORE + 5;
          }

          if (r + 1 < HEIGHT && player1 == b[r + 1][c]) {
            //player1 2 in a row vertically
            SCORE = SCORE + 2;
          }

          if (
            r + 3 < HEIGHT &&
            c + 3 < WIDTH &&
            player1 == b[r + 1][c + 1] && // look up & right
            player1 == b[r + 2][c + 2] &&
            player1 == b[r + 3][c + 3]
          ) {
            //player1 4 in a row diagonally
            SCORE = SCORE + 10000;
          }

          if (
            r + 2 < HEIGHT &&
            c + 2 < WIDTH &&
            player1 == b[r + 1][c + 1] && // look up & right
            player1 == b[r + 2][c + 2]
          ) {
            //player1 3 in a row diagonally
            SCORE = SCORE + 5;
          }

          if (r + 1 < HEIGHT && c + 1 < WIDTH && player1 == b[r + 1][c + 1]) {
            //player1 2 in a row diagonally
            SCORE = SCORE + 2;
          }

          if (
            r + 3 < HEIGHT &&
            c - 3 >= 0 &&
            player1 == b[r + 1][c - 1] && // look up & left
            player1 == b[r + 2][c - 2] &&
            player1 == b[r + 3][c - 3]
          ) {
            //player1 4 in a row diagonally
            SCORE = SCORE + 10000;
          }

          if (
            r + 2 < HEIGHT &&
            c - 2 >= 0 &&
            player1 == b[r + 1][c - 1] && // look up & left
            player1 == b[r + 2][c - 2]
          ) {
            //player1 3 in a row diagonally
            SCORE = SCORE + 5;
          }

          if (r + 1 < HEIGHT && c - 1 >= 0 && player1 == b[r + 1][c - 1]) {
            //player1 2 in a row diagonally
            SCORE = SCORE + 2;
          }
        } else if (b[r][c] == player2) {
          // we are checking a players tile
          if (c == 3 && player2 == b[r][c]) {
            //middle column pieces are worth more
            SCORE = SCORE - 2;
          }

          if (
            c + 3 < WIDTH &&
            player2 == b[r][c + 1] && // look right
            player2 == b[r][c + 2] &&
            player2 == b[r][c + 3]
          ) {
            //player2 4 in a row horizontally
            SCORE = SCORE - 10000;
          }

          if (
            c + 2 < WIDTH &&
            player2 == b[r][c + 1] && // look right
            player2 == b[r][c + 2]
          ) {
            //player2 3 in a row horizontally
            SCORE = SCORE - 5;
          }

          if (c + 1 < WIDTH && player2 == b[r][c + 1]) {
            //player2 2 in a row horizontally
            SCORE = SCORE - 2;
          }

          if (
            r + 3 < HEIGHT &&
            player2 == b[r + 1][c] && // look up
            player2 == b[r + 2][c] &&
            player2 == b[r + 3][c]
          ) {
            //player2 4 in a row vertically
            SCORE = SCORE - 10000;
          }

          if (
            r + 2 < HEIGHT &&
            player2 == b[r + 1][c] && // look up
            player2 == b[r + 2][c]
          ) {
            //player2 3 in a row vertically
            SCORE = SCORE - 5;
          }

          if (r + 1 < HEIGHT && player2 == b[r + 1][c]) {
            //player2 2 in a row vertically
            SCORE = SCORE - 2;
          }

          if (
            r + 3 < HEIGHT &&
            c + 3 < WIDTH &&
            player2 == b[r + 1][c + 1] && // look up & right
            player2 == b[r + 2][c + 2] &&
            player2 == b[r + 3][c + 3]
          ) {
            //player2 4 in a row diagonally
            SCORE = SCORE - 10000;
          }

          if (
            r + 2 < HEIGHT &&
            c + 2 < WIDTH &&
            player2 == b[r + 1][c + 1] && // look up & right
            player2 == b[r + 2][c + 2]
          ) {
            //player2 3 in a row diagonally
            SCORE = SCORE - 5;
          }

          if (r + 1 < HEIGHT && c + 1 < WIDTH && player2 == b[r + 1][c + 1]) {
            //player2 2 in a row diagonally
            SCORE = SCORE - 2;
          }

          if (
            r + 3 < HEIGHT &&
            c - 3 >= 0 &&
            player2 == b[r + 1][c - 1] && // look up & left
            player2 == b[r + 2][c - 2] &&
            player2 == b[r + 3][c - 3]
          ) {
            //player2 4 in a row diagonally
            SCORE = SCORE - 10000;
          }

          if (
            r + 2 < HEIGHT &&
            c - 2 >= 0 &&
            player2 == b[r + 1][c - 1] && // look up & left
            player2 == b[r + 2][c - 2]
          ) {
            //player2 3 in a row diagonally
            SCORE = SCORE - 5;
          }

          if (r + 1 < HEIGHT && c - 1 >= 0 && player2 == b[r + 1][c - 1]) {
            //player2 2 in a row diagonally
            SCORE = SCORE - 2;
          }
        }
      }
    }
    return SCORE / depth;
  }
}
