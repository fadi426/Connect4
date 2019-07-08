import { Board } from "../board/board";
import * as cloneDeep from "lodash/cloneDeep";
import { Evaluate } from "./evaluate";

export class Negamax {
  _evaluate: Evaluate = new Evaluate();

  aiMove(board: Board, player) {
    var baseAlpha = -Infinity,
      baseBeta = Infinity,
      maximumDepth = 10,
      initialDepth = 0,
      bestMove,
      evaluate = this._evaluate;

    let nm = negamax(cloneDeep(board), initialDepth, baseAlpha, baseBeta, 1);
    return bestMove;

    function negamax(gameState, depth, alpha, beta, color) {
      if (gameState.getAvailableMoves().length == 0 || (gameState.getWinner() != 0 && gameState.getWinner() != null) || depth == maximumDepth) {
        let s = evaluate.score(gameState, depth) * color;
        return s;
      }

      let max = -Infinity;

      var availableMoves = gameState.getAvailableMoves();
      for (var i = 0; i < availableMoves.length; i++) {
        gameState.playMove(availableMoves[i]);
        let x = -negamax(gameState, depth + 1, -beta, -alpha, -color);
        gameState.undoMove(availableMoves[i]);
        if (x > max) {
          max = x;
          if(depth == 0)
            bestMove = availableMoves[i];
        }
        if (x > alpha) alpha = x;
        if (alpha >= beta) return alpha;
      }
      return max;
    }
  }
}
