import { Component, OnInit } from '@angular/core';
import { StoreModule } from '../../modules/store/store.module';
import { Timer } from '../../models/timer/timer';
import { Human } from '../../models/players/human';
import { AI } from '../../models/players/ai';

@Component({
  selector: 'app-information-panel',
  templateUrl: './information-panel.component.html',
  styleUrls: ['./information-panel.component.css']
})
export class InformationPanelComponent implements OnInit {
  constructor(private store: StoreModule) { }

  currentPlayer(){
    return this.store._board._currentPlayer._number;
  }

  gameEnded(){
    if(this.store._board.winner != null)
      return true

    return false;
  }

  startTimer() {
    let seconds = 20;
    this.store._timer = new Timer(seconds);
  }

  timerTime() {
    if(this.store._board.currentPlayer instanceof AI)
      return "AI is thinking.."
    else if(this.isHuman)
      return this.store._timer.timeString;
    else(this.store._timer == null)
      return " ";
  }

  isHuman(){
    if(this.store._board.currentPlayer instanceof Human)
      return true;
    return false;
  }

  ngOnInit() {
    this.startTimer();
  }

}
