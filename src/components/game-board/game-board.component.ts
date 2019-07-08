import { Component, OnInit } from '@angular/core';
import { StoreModule } from '../../modules/store/store.module';
import { Human } from '../../models/players/human';
import { AI } from '../../models/players/ai';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  constructor(private store: StoreModule) { }

  getRows() {
    if(this.store._board == undefined)
      return [];
    
      return this.store._board.board;
  }

  async move(column) {
    let playedMove = null;
    if(this.store._board._currentPlayer instanceof Human){
      playedMove = this.store._board._currentPlayer.doMove(this.store._board, column);
      if(playedMove){
        this.store._invalidMove = null;
        if(this.store._board._currentPlayer instanceof Human){
          this.store._timer.reset();
          return;
        }
        setTimeout(() => {
          playedMove = this.aiMove();
        }, 50);
      }
      else
        this.store._invalidMove = "Invalid move!";
    }
  }
// 
  firstAiMove(){
    let playedMove = null;
    if(this.store._board._currentPlayer instanceof AI && this.store._board.lastMove == -1){
      playedMove = this.aiMove();
    }
  }

  aiMove(){
    return new Promise((resolve) => {
      resolve(this.store._board._currentPlayer.doMove(this.store._board));
    }).then(() => this.store._timer.reset());
  }

  timerCountDown(){
    let interval = setInterval(() =>{
      if(this.store._timer == null){
        clearInterval(interval);
        return
      }
      this.store._timer.tick();
      if(this.store._timer.timeString == 0){
        this.store._board.randomMove();
        this.store._timer.reset();
        setTimeout(() => {
          if(this.store._board._currentPlayer instanceof AI)
            this.aiMove();
        }, 100);
      }
    }, 1000);
  }
  
  ngOnInit() {
    setTimeout(() => {
      this.timerCountDown();
      this.firstAiMove();
    }, 200);
  
  }

}
