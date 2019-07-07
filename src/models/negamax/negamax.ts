import { Board } from "../board/board";
import * as cloneDeep from "lodash/cloneDeep";
import { Evaluate } from "./evaluate";

export class Negamax {
  _evaluate: Evaluate = new Evaluate();

  aiMove(board: Board, player) {
    var baseAlpha = -Infinity,
      baseBeta = Infinity,
      maximumDepth = 6,
      initialDepth = 0,
      bestMove,
      evaluate = this._evaluate;

    // let winningMove = this.getWinningMove(player._number, board);
    // if (winningMove != -1) return winningMove;

    // let blockingMove = this.getWinningMove(board.nextPlayer()._number, board);
    // if (blockingMove != -1) return blockingMove;

    let nm = negamax(board, initialDepth, baseAlpha, baseBeta, 1);
    return bestMove;

    function negamax(gameState, depth, alpha, beta, color) {
      if (gameState.getAvailableMoves().length == 0 || (gameState.getWinner() != 0 && gameState.getWinner() != null) || depth == maximumDepth) {
        let s = evaluate.score(gameState, depth) * color;
        return s;
      }
      let max = -Infinity;
      var values = [];
      var moves = [];

      var availableMoves = gameState.getAvailableMoves();
      for (var i = 0; i < availableMoves.length; i++) {
        let newState = cloneDeep(gameState);
        newState.playMove(availableMoves[i]);
        values.push(-negamax(newState, depth + 1, -beta, -alpha, -color));
        moves.push(availableMoves[i]);
      }
      let index = indexOfMax(values);
      let a = values[index];

      if (a > max) {
        max = a;
        bestMove = moves[index];
        if(depth == 0){
          console.log(values)
          console.log(moves)
        }
      }
      if (a > alpha) alpha = a;

      if (alpha >= beta) return alpha;

      return max;
    }

    function indexOfMax(arr) {
      if (arr.length === 0) {
        return -1;
      }

      var max = arr[0];
      var maxIndex = 0;

      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
          maxIndex = i;
          max = arr[i];
        }
      }

      return maxIndex;
    }
  }

  getWinningMove(playerId, gameBoard) {
    let rows = gameBoard.rows;
    let columns = gameBoard.columns;
    let empty = gameBoard.empty;
    let board = gameBoard.board;

    for (let r = 0; r < rows; r++) {
      // iterate rows, bottom to top
      for (let c = 0; c < columns; c++) {
        // iterate columns, left to right
        let player = playerId;
        if (board[r][c] == empty) {
          if (r != rows - 1) {
            if (board[r + 1][c] == empty) continue;
          }

          if (
            c + 3 < columns &&
            player == board[r][c + 1] && // look right
            player == board[r][c + 2] &&
            player == board[r][c + 3]
          )
            return c;
          if (
            c - 3 > 0 &&
            player == board[r][c - 1] && // look left
            player == board[r][c - 2] &&
            player == board[r][c - 3]
          )
            return c;
          if (r + 3 < rows) {
            if (
              player == board[r + 1][c] && // look up
              player == board[r + 2][c] &&
              player == board[r + 3][c]
            )
              return c;
            if (
              c + 3 < columns &&
              player == board[r + 1][c + 1] && // look up & right
              player == board[r + 2][c + 2] &&
              player == board[r + 3][c + 3]
            )
              return c;
            if (
              c - 3 >= 0 &&
              player == board[r + 1][c - 1] && // look up & left
              player == board[r + 2][c - 2] &&
              player == board[r + 3][c - 3]
            )
              return c;
          }
        }
      }
    }
    return -1;
  }
}
