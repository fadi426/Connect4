import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { Player } from '../../models/players/player';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor() { }

  board  = new Board;

  createRange(number){
    let items = [];
    if(number == null || number == undefined)
      return items;
    for(let i = 0; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  getRows() {
    if(this.board == undefined)
      return [];
    
      return this.board.board;
  }

  move(column) {
    this.board.playMove(column);
    console.log(this.board.board);
  }

  ngOnInit() {}

}
