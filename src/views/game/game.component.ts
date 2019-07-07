import { Component, OnInit } from '@angular/core';
import { Board } from '../../models/board/board';
import { StoreModule } from '../../modules/store/store.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  constructor(public router: Router, public store: StoreModule) { }
  ngOnInit() {
    
    setTimeout(() => {
      if(this.store._board == null)
        this.router.navigate(['home']);
    });

  }

}
