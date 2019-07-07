import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  redirectToGithub() {
    window.open('https://github.com/fadi426/Connect4');
  }

  ngOnInit() {
  }

}
