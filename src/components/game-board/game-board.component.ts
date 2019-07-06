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
        this.store._timer.reset();
        setTimeout(() => {
          playedMove = this.aiMove();
        }, 100);
      }
    }
  }

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
    setInterval(() =>{
      this.store._timer.tick();
      if(this.store._timer.timeString == 0){
        this.store._board.randomMove();
        this.store._timer.reset();
      } 
    }, 1000);
  }
  
  ngOnInit() {
    this.timerCountDown();
    this.firstAiMove();
  }

}
