import { Component, OnInit } from "@angular/core";
import { StoreModule } from "../../modules/store/store.module";
import { AI } from "../../models/players/ai";
import { Router } from "@angular/router";

@Component({
  selector: "app-result-screen",
  templateUrl: "./result-screen.component.html",
  styleUrls: ["./result-screen.component.css"]
})
export class ResultScreenComponent implements OnInit {
  constructor(private router: Router, private store: StoreModule) {}

  gameWinner() {
    if (this.store._board.winner != null && this.store._board.winner != 0)
      return this.store._board.winner._color + " has won the game";
    else if (this.store._board.winner != null && this.store._board.winner == 0)
      return "It's a draw";
    else return null;
  }

  goHome() {
    this.router.navigate(['home']);
  }

  resetGame() {
    this.store._board.reset();
    this.store._timer.reset();

    if (this.store._board._currentPlayer._number != 1)
      this.store._board._currentPlayer = this.store._board.nextPlayer();

    if (this.store._board._currentPlayer instanceof AI) {
      return new Promise(resolve => {
        resolve(this.store._board._currentPlayer.doMove(this.store._board));
      });
    }
  }

  ngOnInit() {}
}
