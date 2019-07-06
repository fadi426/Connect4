import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from '../router/app-routing.module';
import { GameComponent } from '../views/game/game.component';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { StoreModule } from '../modules/store/store.module';
import { InformationPanelComponent } from '../components/information-panel/information-panel.component';
import { ResultScreenComponent } from '../components/result-screen/result-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameBoardComponent,
    InformationPanelComponent,
    ResultScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
