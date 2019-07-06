import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class StoreModule {
  _board = null;
  _invalidMove = null;
  _timer = null;
}
