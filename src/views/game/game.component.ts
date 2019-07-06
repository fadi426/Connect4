import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { StoreModule } from '../../modules/store/store.module';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(public store: StoreModule) { }
  ngOnInit() {
  }

}
