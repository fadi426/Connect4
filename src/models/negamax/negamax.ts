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
}
