import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { StoreModule } from '../../modules/store/store.module';
import { Human } from '../../models/players/human';
import { AI } from '../../models/players/ai';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(private store: StoreModule) { }

  playerOne = new AI("red");
  playerTwo = new Human("black");
  ngOnInit() {
    this.store._board = new Board(this.playerOne,this.playerTwo);
  }

}
