import { Player } from "./player";
import { Board } from "../board/board";

export class Human extends Player {

    doMove(board:Board, move:number) {
        return(board.playMove(move));
    }
}
