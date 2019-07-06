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

    let winningMove = board.getWinningMove(player._number);
    if (winningMove != -1){
        console.log("winning move " + winningMove);
        return winningMove;
    }

    let blockingMove = board.getWinningMove(board.nextPlayer()._number);
    if (blockingMove != -1){
        console.log("blocking move " + blockingMove);
        return blockingMove;
    }


    let nm = negamax(board, initialDepth, baseAlpha, baseBeta, 1);
    // console.log(bestMove);
    return bestMove;

    function negamax(gameState, depth, alpha, beta, color) {
      if (gameState.getAvailableMoves().length == 0 || depth >= maximumDepth) {
        let s = evaluate.score(gameState, depth) * color;
        // console.log(s)
        return s;
      }
      let max = -Infinity;
      var values = [];
      var moves = [];

      var availableMoves = gameState.getAvailableMoves();
      let offset = gameState.columns - availableMoves.length;
      for (var i = 0; i < availableMoves.length; i++) {
        let newState = cloneDeep(gameState);
        newState.playMove(i + offset);
        values.push(-negamax(newState, depth + 1, -beta, -alpha, -color));
        moves.push(availableMoves[i]);
      }
      let index = indexOfMax(values);
      let a = values[index];

      if (a > max) {
        max = a;
        bestMove = moves[index];
        if (depth == 0) {
          console.log(gameState.board);
          console.log("BOIGBOI = " + values);
          console.log("BOIGBOI = " + moves);
        }
      }
      if (a > alpha) {
        alpha = a;
      }
      if (alpha >= beta) {
        return alpha;
      }
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
}
