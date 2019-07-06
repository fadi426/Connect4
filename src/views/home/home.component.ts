import { Component, OnInit } from '@angular/core';
import { StoreModule } from '../../modules/store/store.module';
import { Board } from '../../models/board/board';
import { AI } from '../../models/players/ai';
import { Human } from '../../models/players/human';
import { Timer } from '../../models/timer/timer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private store: StoreModule) { }

  maxTime = 10;
  singleplayer() {
    this.store._board = new Board(new AI("red"), new Human("black"));
    this.store._timer = new Timer(this.maxTime);
    this.goToGame();
  }

  multiplayer() {
    this.store._board = new Board(new Human("red"), new Human("black"));
    this.store._timer = new Timer(this.maxTime);
    this.goToGame();
  }

  goToGame() {
    this.router.navigate(['game'])
  }

  ngOnInit() {
    this.store._board = null;
    this.store._timer = null;
  }

}
