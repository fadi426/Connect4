import { Player } from "./player";
import { Board } from "../board/board";
import * as cloneDeep from "lodash/cloneDeep";
import { Negamax } from "../negamax/negamax";

export class AI extends Player {
  _negamax:Negamax = new Negamax;
  doMove(board: Board) {
    return(board.playMove(this._negamax.aiMove(board, this)));
  }
}
